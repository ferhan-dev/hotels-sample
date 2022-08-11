import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { Avatar, Box, Drawer } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import AppButton from "src/components/elements/Button";
import { COMPANY_NAME } from "src/constants";
import { userInfoSelector } from "src/store/selectors/userSelector";
import { ModalVariant } from "src/types/modal";
import { logoutAction } from "src/store/actions/userAction";
import { useSidebarStyles } from "./styles";
interface Props {
  open: boolean;
  onClose: () => void;
  setModal: React.Dispatch<React.SetStateAction<ModalVariant>>;
}

const SideBar: React.FC<Props> = ({
  open,
  onClose,
  //setModal
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const authUser = useSelector(userInfoSelector);
  const classes = useSidebarStyles();

  const handleLogout = () => {
    dispatch(logoutAction());
    router.push("/");
  };

  return (
    <Drawer
      classes={{
        paper: classes.paper,
      }}
      open={open}
      style={{ zIndex: 99999 }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="48px">
        <Avatar src={"/images/green-logo.png"} alt={COMPANY_NAME} className={classes.logo} />
        <Close fontSize="inherit" className={classes.closeIcon} onClick={onClose} />
      </Box>

      {authUser ? (
        <>
          <AppButton className={classes.discoverbtn} fullWidth>
            Discover Places
          </AppButton>
          <div>
            <Box>
              <Box className={classes.boxBorder}>
                <Box display="flex" alignItems="center" marginBottom="16px">
                  <Avatar className={classes.account} src="/images/account.png" variant="square"></Avatar>
                  <Typography className={classes.accountTitle} onClick={() => router.push("/account-setting")}>
                    My account
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" marginBottom="16px">
                  <Avatar className={classes.account} src="/images/personalInfo.png" variant="square"></Avatar>
                  <Typography className={classes.accountTitle}>Personal informations</Typography>
                </Box>
              </Box>
              <Box className={classes.boxBorder}>
                <Box display="flex" alignItems="center" marginBottom="16px">
                  <Avatar className={classes.account} src="/images/messages.png" variant="square"></Avatar>
                  <Typography className={classes.accountTitle}>Messages</Typography>
                </Box>
                <Box display="flex" alignItems="center" marginBottom="16px">
                  <Avatar className={classes.account} src="/images/booking.png" variant="square"></Avatar>
                  <Typography className={classes.accountTitle}>Bookings</Typography>
                </Box>
                <Box display="flex" alignItems="center" marginBottom="16px">
                  <Avatar className={classes.account} src="/images/favourite.png" variant="square"></Avatar>
                  <Typography className={classes.accountTitle}>Favorites</Typography>
                </Box>
              </Box>
              <Box className={classes.boxBorderHost}>
                <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom="16px" className={classes.hostBox}>
                  <Box display="flex" alignItems="center">
                    <Avatar className={classes.account} src="/images/host.png" variant="square"></Avatar>
                    <Typography className={classes.accountTitle}>Become a host</Typography>
                  </Box>
                  <Avatar className={classes.arrow} src="/images/arrowright.png" variant="square"></Avatar>
                </Box>
                <Box display="flex" alignItems="center" marginBottom="16px" className={classes.hostBox}>
                  <Avatar className={classes.account} src="/images/logout.png" variant="square"></Avatar>
                  <Typography className={classes.logoutTitle} onClick={handleLogout}>
                    Log out
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom="16px" className={classes.hostBox}>
                  <Typography className={classes.accountTitle}>EN</Typography>
                  <Avatar className={classes.arrow} src="/images/arrowright.png" variant="square"></Avatar>
                </Box>
              </Box>
            </Box>
          </div>
        </>
      ) : (
        <>
          <div>
            <Box>
              <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom="16px" className={classes.hostBox}>
                <Box display="flex" alignItems="center">
                  <Typography className={classes.accountTitle} style={{ marginLeft: 0 }}>
                    Become a host
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="start" marginBottom="16px">
                <Typography className={classes.accountTitle}>EN</Typography>
                <Avatar className={classes.arrow} src="/images/arrowBottom.png" variant="square" style={{ marginLeft: "16px" }}></Avatar>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom="16px">
                <Typography className={classes.accountTitle}>Login</Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="start" marginBottom="16px">
                <Typography className={classes.accountTitle}>Discover Places</Typography>
                <Avatar className={classes.arrow} src="/images/arrowBottom.png" variant="square" style={{ marginLeft: "16px" }}></Avatar>
              </Box>
            </Box>
          </div>
        </>
      )}
    </Drawer>
  );
};

export default SideBar;
