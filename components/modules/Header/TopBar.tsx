import { AppBar, AppBarProps, Avatar, Hidden, IconButton, Toolbar, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { useSelector } from "react-redux";
import AppButton from "src/components/elements/Button";
import AppDivider from "src/components/elements/Divider";
import ArrowDownIcon from "src/components/elements/icons/ArrowDown";
import CheckIcon from "src/components/elements/icons/Check";
import { COMPANY_NAME, TO_HOME_PAGE, TO_SEARCH_RESULTS_PAGE } from "src/constants";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { ListingSectionVariant } from "src/types/listing";
import { ModalVariant } from "src/types/modal";
import { userInfoSelector } from "src/store/selectors/userSelector";
import { sectionProgressMap } from "./data";
import HeaderProgressBar from "./ProgressBar";
import HeaderStepper from "./Stepper";
import { useTopBarStyles } from "./styles";
import clsx from "clsx";
import SearchBox from "../home/HomeHero/search";
import { useSmallSize } from "src/hooks/screenSize";
import ProfilePopUp from "./ProfilePopUp";
// import { buildListingPath } from "src/utils";
// import Link from "next/link";

interface Props extends AppBarProps {
  onOpenDrawer: () => void;
  onOpenMenu: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setModal: React.Dispatch<React.SetStateAction<ModalVariant>>;
  type?: "listing";
}

const TopBar: React.FC<Props> = ({ onOpenDrawer, onOpenMenu, setModal, type, ...otherProps }) => {
  const authUser = useSelector(userInfoSelector);
  const [isTop, setIsTop] = useState(true);
  const scroll = false;
  const router = useRouter();
  const isSmallerSizeDown = useScreenSizeDown("xs");
  const isSmallSize = useSmallSize();
  const isCustomSizeDown = useScreenSizeDown(700);
  const isListingPage = type === "listing";
  const [hostName, setToken] = useState();
  const [uniquePage, setUniquePage] = useState(false)
  const { section } = router.query as { section: ListingSectionVariant };
  const backWhite = false;
  const classes = useTopBarStyles({
    backWhite,
    scroll,
    isTop: isListingPage ? false : isTop,
  });
  const accountRoute: string = router.route.replace("/", "");

  useEffect(() => {
    const tokensa: any = localStorage.getItem("host");
    setToken(tokensa);
  }, []);

  useEffect(() => {
    if (router.pathname !== "/") setIsTop(false);

    if (window && router.pathname === "/") {
      window.onscroll = () => {
        window.scrollY > 600 ? setIsTop(false) : setIsTop(true);
      };
    }
    if (router.pathname === "/unique-property"){
      setUniquePage(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // setScroll(window.scrollY > 100);
    });
  }, []);

  const languageChangeButtonElement = (
    <AppButton
    className={uniquePage ? classes.Blackbtn : classes.transparentBtn}
    endIcon={<ArrowDownIcon color={isListingPage || !isTop ? "action" : "inherit"} />}
      startIcon={<Avatar src="/images/en-flag.png" style={{ height: "24px", width: "24px" }} variant="square" />}
      style={{ width: "96px", padding: "8px 24px" }}
      variant={isListingPage ? "outlined" : undefined}
      onClick={() => {
        setModal("region");
        console.log("modal");
      }}
    >
      EN
    </AppButton>
  );

  return (
    <AppBar className={clsx(classes.appbar, classes.isTopHeader)} variant="outlined" {...otherProps}>
      {/* <AppBar className={scroll ? `${classes.bgWhite}` : `${classes.appbar}`} variant="outlined" {...otherProps}> */}
      {accountRoute !== "account-setting" ? (
        // <Box position="relative" className={isTop ? classes.isTopHeader : undefined}>
        <Box position="relative">
          {isListingPage ? <HeaderProgressBar width={sectionProgressMap[section]} /> : null}{" "}
          <Toolbar style={{ maxWidth: isListingPage ? 1400 : undefined }} className={classes.toolbar}>
            <Box display="flex" alignItems="center">
              <Avatar
                src={
                  isListingPage || !isTop
                    ? isSmallSize && router.pathname === TO_SEARCH_RESULTS_PAGE
                      ? "/images/back-icon.svg"
                      : "/images/green-logo.png"
                    : "/images/white-logo.png"
                }
                alt={COMPANY_NAME}
                className={classes.logo}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (router.pathname !== TO_HOME_PAGE) router.push(TO_HOME_PAGE);
                }}
              />
              {isListingPage ? (
                <Typography variant="h1" color="textPrimary" className={classes.companyName} onClick={() => router.push("/")}>
                  {COMPANY_NAME.replace(" ", "")}
                </Typography>
              ) : isTop || isSmallSize ? null : (
                <SearchBar />
              )}
            </Box>
            {isListingPage ? (
              <>
                {isCustomSizeDown || section === "inbetween" ? null : <HeaderStepper />}
                <Box style={{ display: "flex", gap: "16px" }}>
                  {isSmallerSizeDown ? null : (
                    <AppButton
                      className={classes.transparentBtn}
                      startIcon={<CheckIcon color="action" style={{ fontSize: "17px" }} />}
                      onClick={() => router.push("/")}
                      variant="outlined"
                      style={{ padding: "8px 24px" }}
                    >
                      Save and Exit
                    </AppButton>
                  )}
                  {/* {languageChangeButtonElement} */}
                </Box>
              </>
            ) : (
              <>
                <Hidden smDown>
                  <Box className={clsx(classes.flexWrapper, classes.headerActionBtn)}>
                    <AppButton onClick={onOpenMenu} className={uniquePage ? classes.Blackbtn : classes.transparentBtn}>
                    {/* <AppButton onClick={onOpenMenu} className={classes.transparentBtn}> */}
                      Discover Places
                    </AppButton>

                    {authUser ? (
                      <>
                        <a href="/add-listing/one/property-type/" style={{ textDecoration: "none" }}>
                          <AppButton variant="outlined" className={uniquePage ? classes.Blackbtn : classes.transparentBtn} onClick={() => {}}>
                            Become a Host
                          </AppButton>
                        </a>
                        <ProfilePopUp hostName={hostName} config={"Topbar"} isTop={isTop} />
                      </>
                    ) : (
                      <>
                        <AppButton className={uniquePage ? classes.Blackbtn : classes.transparentBtn} onClick={() => setModal("question")}>
                          Login
                        </AppButton>
                        {languageChangeButtonElement}
                        <AppButton
                          variant="outlined"
                          style={{background: uniquePage ? "black" : ""}}
                          className={uniquePage ? `${classes.Blackbtn} ${classes.hostbtn}` : clsx(classes.transparentBtn, classes.headerRoundedButton)}
                          onClick={() => {
                            setModal("signup");
                          }}
                        >
                          Become a host
                        </AppButton>
                      </>
                    )}
                  </Box>
                </Hidden>

                <Hidden mdUp>
                  <Box>
                    <IconButton
                      // onClick={onOpenDrawer}
                      className={classes.menuBtn}
                    >
                      {!isTop && router.pathname === TO_SEARCH_RESULTS_PAGE && <img src="/images/search-icon-filled.svg" alt="search-icon" />}
                    </IconButton>
                    <IconButton onClick={onOpenDrawer} className={classes.menuBtn}>
                      {isTop && <img src="/images/menu-line.svg" alt="menu-button" />}
                      {!isTop && <img src="/images/menu-icon-filled.svg" alt="menu-icon" />}
                    </IconButton>
                  </Box>
                </Hidden>
              </>
            )}
          </Toolbar>
          {isListingPage && isCustomSizeDown ? (
            <>
              <AppDivider />
              <Toolbar className={classes.toolbar} style={{ justifyContent: "center", height: "64px" }}>
                <HeaderStepper />
              </Toolbar>
            </>
          ) : null}
        </Box>
      ) : (
        ""
      )}
    </AppBar>
  );
};

const SearchBar: React.FC = () => {
  return (
    <SearchBox inTopBar={true} />
  );
};

export default TopBar;
