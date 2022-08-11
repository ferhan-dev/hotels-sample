import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Close } from "@material-ui/icons";
import { Tabs, Tab, Avatar, Box, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { userInfoSelector } from "src/store/selectors/userSelector";
import { ModalVariant } from "src/types/modal";
import ForgotPasswordDialog from "../dialog/ForgotPasswordDialog";
import SigninDialog from "../dialog/SigninDialog";
import SignupDialog from "../dialog/SignupDialog";
import QuestionDialog from "../dialog/QuestionDialog";
import DiscoverPlacesMenu from "../DiscoverPlacesMenu";
import MenuIcon from "src/components/elements/icons/Menu";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import AccountSetting from "src/components/modules/AccountSetting";
import MyProperty from "src/components/modules/AccountSetting/Header/Property";
import ProfilePopUp from "./ProfilePopUp";
import { getMeAction, socialLoginAction } from "src/store/actions/userAction";
import Booking from "../Booking";
import { useStyles } from "./styles";
import RegionDialog from "../dialog/Region";
import { useSession } from "next-auth/client";

const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index: any) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
};

interface Props {
  appBarProps?: AppBarProps;
  type?: "listing";
}

const Header: React.FC<Props> = ({ appBarProps, type }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(userInfoSelector);
  const [session] = useSession();

  useEffect(() => {
    if (session && !userInfo) {
      const accessToken = session.accessToken;
      if (accessToken) {
        const socialData: any = {
          access_token: accessToken,
          type: session.provider,
        };
        dispatch(socialLoginAction(socialData));
      }
    }
  }, [session]);

  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState<ModalVariant>("none");
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const classes = useStyles();
  const router = useRouter();
  const [hostName, setToken] = useState();

  useEffect(() => {
    const tokensa: any = localStorage.getItem("host");
    setToken(tokensa);
  }, []);

  const accountRoute = router.route.replace("/", "");

  const handleCloseModal = () => {
    setModal("none");
  };

  const [value, setValue] = React.useState(0);

  function handleChange(event: any, newValue: any) {
    console.log(event.target.value);
    setValue(newValue);
  }
  const [menuDrawer, setDrawer] = useState(false);
  const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(e.currentTarget);
  };

  useEffect(() => {
    if (userInfo) {
      dispatch(getMeAction());
    }
  }, []);
  return (
    <>
      <DiscoverPlacesMenu anchorEl={anchorElement} open={Boolean(anchorElement)} onClose={() => setAnchorElement(null)} />
      <ForgotPasswordDialog open={modal === "forgot-password"} onClose={handleCloseModal} />
      <SigninDialog open={modal === "signin"} onClose={handleCloseModal} setModal={setModal} />
      <QuestionDialog open={modal === "question"} onClose={handleCloseModal} setModal={setModal} />
      <SignupDialog open={modal === "signup"} onClose={handleCloseModal} />
      <RegionDialog open={modal === "region"} onClose={handleCloseModal} setModal={setModal} />
      <TopBar onOpenDrawer={() => setOpen(true)} setModal={setModal} onOpenMenu={handleOpenMenu} type={type} {...appBarProps} />
      <SideBar open={open} onClose={() => setOpen(false)} setModal={setModal} />
      {accountRoute == "account-setting" ? (
        <div className={classes.root}>
          <AppBar position="static" className={classes.headBar}>
            <Toolbar>
              <Box display="flex" alignItems="center" marginRight="auto">
                <Box marginRight="70px" className={classes.logoMain}>
                  <Avatar src={"/images/Logo.png"} className={classes.logoHeader} />
                </Box>
                <Box className={classes.tabAppbar}>
                  <AppBar position="static" color="default">
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      variant="scrollable"
                      scrollButtons="auto"
                      aria-label="scrollable auto tabs example"
                    >
                      <Tab label="Overview" {...a11yProps(0)} />
                      <Tab label="Inbox" {...a11yProps(1)} className={classes.tabInbox} />
                      <Tab label="Bookings" {...a11yProps(2)} className={`${classes.tabInbox} ${classes.tabBooking}`} />
                      <Tab label="My properties" {...a11yProps(3)} />
                    </Tabs>
                  </AppBar>
                </Box>
                <Box onClick={() => setDrawer(true)}>
                  <IconButton
                    // onClick={onOpenDrawer}
                    className={classes.menuBtn}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" className={classes.addProperty}>
                <Box>
                  <Button className={classes.buttonAdd}>
                    <span>+</span>Add a property
                  </Button>
                </Box>

                <ProfilePopUp hostName={hostName} config={"setting"} />
              </Box>
              <Box display="flex" alignItems="center" className={menuDrawer ? `${classes.menuMobile} ${classes.showMenu}` : `${classes.menuMobile}`}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Avatar src={"/images/green-logo.png"} className={classes.logoMobile} />
                  <Close className={classes.closeMenu} fontSize="inherit" onClick={() => setDrawer(false)} />
                </Box>
                <Box className={classes.mobileTabItem}>
                  <AppBar position="static" color="default" className={classes.tabAppbar}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      variant="scrollable"
                      scrollButtons="auto"
                      aria-label="scrollable auto tabs example"
                    >
                      <Tab label="Overview" {...a11yProps(0)} />
                      <Tab label="Inbox" {...a11yProps(1)} />
                      <Tab label="Bookings" {...a11yProps(2)} />
                      <Tab label="My properties" {...a11yProps(3)} />
                    </Tabs>
                  </AppBar>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
          <TabPanel value={value} index={0}>
            <AccountSetting getMeData={userInfo} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h1>inbox</h1>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Booking />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <MyProperty />
          </TabPanel>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
