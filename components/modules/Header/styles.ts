import { makeStyles } from "@material-ui/core";

interface Props {
  isTop: boolean;
  backWhite: boolean;
  scroll: boolean;
}

export const useTopBarStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    appbar: ({ isTop }: Props) => ({
      background: isTop ? "transparent " : `${palette.background.paper} `,
      position: isTop ? "absolute" : "fixed",
      border: isTop ? "none" : undefined,
      zIndex: isTop ? 99999 : undefined,
    }),
    companyName: {
      fontWeight: 800,
      fontSize: "24px",
      letterSpacing: "-0.04em",
      lineHeight: "32px",
      marginLeft: "12px",
      textTransform: "lowercase",
      textAlign: "center",
      [breakpoints.down(360)]: {
        fontSize: "20px",
      },
    },
    bgWhite:{
      background: "#fff",
      "& .MuiButtonBase-root": {
        "& span": {
          fontWeight: 540,
        }
      }
    },
    arrowIcon: {
      color: "#5A6987",
      fontFamily: "inter",
    },
    flexWrapper: {
      display: "flex",
      [breakpoints.down("md")]: {
        gridGap: "24px",
      },
    },
    logo: {
      height: "32px",
      width: "24px",
    },
    profileLogo: {
      background: "rgba(255, 255, 255, 0.24)",
      borderRadius: "16px",
      width: "32px",
      height: "32px",
      "& img": {
        width: "auto",
        height: "auto",
      },
    },
    barlogo: {
      width: "auto",
      height: "auto",
      marginLeft: "10px",
    },
    logoMain: {
      border: "1px solid #fff",
      borderRadius: "30px",
      padding: "6px 15px 6px 4px",
    },
    popover: {
      "& .MuiPopover-paper": {
        transform: "translate(-90px, 10px) !important",
        [breakpoints.down(1280)]: {
          transform: "translate(-45px, 10px) !important",
        },
        [breakpoints.down("md")]: {
          transform: "translate(0px, 10px) !important",
        },
      },
    },
    account: {
      height: "18px",
      width: "17px",
      "& img": {
        objectFit: "contain",
      },
    },
    accountTitle: {
      fontSize: "14px",
      color: "#1A2232",
      marginLeft: "18px",
      cursor: "pointer",
    },
    boxBorder: {
      borderBottom: "1px solid #EAEEF5",
      marginTop: "12px",
    },
    popoverBox: {
      width: "263px",
      padding: "0px 20px",
    },
    hostBox: {
      border: "1px solid #EAEEF5",
      borderRadius: "6px",
      justifyContent: "center",
      cursor: "pointer",
      padding: "5px 0px",
      "& p": {
        color: "#364259",
      },
    },
    logoutTitle: {
      fontSize: "14px",
      color: "#F12237 !important",
      marginLeft: "18px",
    },
    searchBtn: {
      background: "transparent",
      margin: '0px 6px  0px 5px',
    },

    Blackbtn:{
      background: "transparent" ,
      color: "black",
      padding: "8px 20px",
    },

    menuBtn: {
      height: "48px",
      padding: "12px",
      width: "48px",

    },
    transparentBtn: ({ isTop }: Props) => ({
      // transparentBtn: ({ isTop, scroll, backWhite }: Props) => ({
      background: isTop ? "transparent" : undefined,
      borderColor: isTop ? palette.common.white : undefined,
      color: isTop ? palette.common.white : undefined,
      padding: "8px 20px",
    }),

    hostbtn: ({ scroll, backWhite }: Props) => ({
      background: backWhite ? "#2E3543" : "transparent",
      borderColor: backWhite ? "#2E3543" : "transparent",
      border: "1px solid #2E3543",
      color: !scroll || backWhite ? palette.common.white :"#2E3543",
      padding: "12px 20px",
      borderRadius: "30px",
      "&:hover": {
        color: backWhite ? "#364259" : undefined,
        border: "1px solid transparent",
        backgroundColor: "transparent"
      }
    }),   
    // ostScroll: {
    //   color: isTop ? palette.common.white : undefined,
    //   padding: isTop ? "8px 20px" : 0,
    // },
    headerActionBtn: ({ isTop }: Props) => ({
      // gridGap: !isTop ? "35px" : "48px",
      gridGap: "20px",
      ...(!isTop && { flex: "0 0 47%" }),
      justifyContent: "flex-end",
    }),
    headerRoundedButton: {
      borderRadius: "24px",
      background: "black !important",
      padding: "12px 20px !important",
      color: "white",
      border: "none",
      "& .MuiButton-label": {
        lineHeight: "24px",
      },
    },
    hostScroll: {
      border: "1px solid #000",
    },

    toolbar: {
      justifyContent: "space-between",
      // maxWidth: breakpoints.values.lg,
      margin: "auto",
      height: "96px",
      width: "100%",
      maxWidth: "1180px",
      [breakpoints.down("lg")]: {
        padding: "0 24px",
      },
      [breakpoints.down(700)]: {
        height: "64px",
        padding: "12px",
      },
      [breakpoints.down("sm")]: {
        // justifyContent: "flex-end"
      },
    },
    isTopHeader: {
      //flex: "0 0 53%",
      // padding: "0 15px 0 0",
    },
  }),
  { index: 2 }
);

export const useSidebarStyles = makeStyles(
  ({ breakpoints }) => ({
    paper: {
      padding: "32px 24px",
      width: "375px",
      [breakpoints.down(426)]: {
        // width: "320px",
        width: "100% !important",
      },
      [breakpoints.down(375)]: {
        // width: "300px",
        width: "100% !important",
      },
    },
    btn: {
      marginBottom: "8px",
      justifyContent: "flex-start",
    },
    closeIcon: {
      fontSize: "17.15px",
      color: "#353e50",
    },
    logo: {
      height: "32px",
      width: "24px",
    },
    profileLogo: {
      background: "rgba(255, 255, 255, 0.24)",
      borderRadius: "16px",
      width: "32px",
      height: "32px",
      "& img": {
        width: "10px",
        height: "15px",
      },
    },
    barlogo: {
      width: "15px",
      height: "13px",
      marginLeft: "10px",
    },
    logoMain: {
      border: "1px solid #fff",
      borderRadius: "30px",
      padding: "6px 15px 6px 4px",
    },
    account: {
      height: "18px",
      width: "17px",
      "& img": {
        objectFit: "contain",
      },
    },
    accountTitle: {
      fontSize: "14px",
      color: "#1A2232",
      marginLeft: "18px",
    },
    boxBorder: {
      borderBottom: "1px solid #EAEEF5",
      marginTop: "24px",
    },
    boxBorderHost: {
      marginTop: "24px",
    },
    discoverbtn: {
      borderBottom: "1px solid #EAEEF5",
      paddingBottom: "24px",
      justifyContent: "flex-start",
    },
    hostBox: {
      border: "1px solid #EAEEF5",
      borderRadius: "6px",
      padding: "7px 15px",
      "& p": {
        color: "#364259",
      },
    },
    arrow: {
      width: "13px",
      height: "12px",
      "& img": {
        objectFit: "contain",
      },
    },
    logoutTitle: {
      fontSize: "14px",
      color: "#F12237 !important",
      marginLeft: "18px",
    },
    menuBtn: {
      height: "48px",
      padding: "12px",
      width: "48px",
    },
  }),
  { index: 2 }
);

export const useSearchBarStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    root: {
      border: `1px solid ${palette.divider}`,
      borderRadius: "50%",
      height: "40px",
      marginLeft: "74px",
      padding: "8px 12px",
      width: "192px",
      [breakpoints.down("md")]: {
        marginLeft: "24px",
      },
    },
    searchBtn: {
      background: "transparent",
      margin: '0px 6px  0px 5px',
    },
    searchBox: {
      marginLeft: '2.5rem',
      border: `1px solid ${palette.divider}`,
      padding: '2px 8px',
      borderRadius: '30px',
      [breakpoints.down("md")]: {
        marginLeft: "1.5rem",
      },
      [breakpoints.down("sm")] : {
        display: 'none',
      }
    },
    divider: {
      borderLeft: `1px solid ${palette.divider}`,
      height: '25px',
      marginLeft: '18px',
    },
    searchTopic: {
      color: "#5A6987",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "32px",
      marginLeft: "12px",
      textAlign: "center",
      cursor: "pointer",
      [breakpoints.down(360)]: {
        fontSize: "18px",
      },
      "&:hover": {
        color: "#000",
        transition: " 0.5s",
      }
    },
  }),
  { index: 2 }
);
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // width: "100%",
    // backgroundColor: theme.palette.background.paper,
  },
  headBar: {
    boxShadow: "0px 1px 0px #eaeef5",
    background: "#fff",
    "& .MuiToolbar-gutters": {
      padding: "0px 40px",
      minHeight: "72px",
      [theme.breakpoints.down(991)]: {
        display: "block",
        marginTop: "20px",
      },
    },
  },
  logoHeader: {
    "& img": {
      width: "22px",
      height: "32px",
    },
  },
  logoMain: {
    [theme.breakpoints.down(991)]: {
      marginRight: "auto",
    },
  },
  showMenu: {
    transform: "translateX(0%) !important",
  },
  menuMobile: {
    display: "none",
    [theme.breakpoints.down(991)]: {
      background: "#fff",
      position: "fixed",
      top: 0,
      left: 0,
      width: "375px",
      height: "100vh",
      overflow: "scroll",
      transform: "translateX(-100%)",
      transition: " 0.5s",
      display: "block",
      padding: "32px 24px",
      zIndex: 9,
      boxShadow: "0px 0px 5px #e0dada",
    },
    [theme.breakpoints.down(425)]: {
      width: "320px",
    },
    [theme.breakpoints.down(375)]: {
      width: "290px",
    },
  },
  closeMenu: {
    color: "#353e50",
    fontSize: "18px",
  },
  logoMobile: {
    width: "24px",
    height: "32px",
  },
  mobileTabItem: {
    padding: "48px 0px 0px 0px",
    "& .MuiAppBar-root": {
      background: "#fff",
      boxShadow: "none",
      "& .MuiTabs-scrollable": {
        whiteSpace: "normal",
        "& .MuiTabs-flexContainer": {
          display: "block",
        },
      },
      "& .MuiButtonBase-root": {
        minWidth: "327px",
        padding: "24px 12px",
        "& span": {
          color: "#090F1B",
        },
      },
      "& .MuiTabs-indicator": {
        display: "none",
      },
      "& .Mui-selected": {
        "&:after": {
          content: "''",
          width: "327px",
          height: "2px",
          position: "absolute",
          backgroundColor: " #1DAF92",
          bottom: 0,
        },
      },
    },
  },
  buttonAdd: {
    color: "#364259",
    "& span": {
      marginRight: "15px",
    },
  },
  profileAvtar: {
    "& img": {
      width: "32px",
      height: "32px",
    },
  },
  arrowIcon: {
    color: "#5A6987",
  },

  menuBtn: {
    display: "none",
    [theme.breakpoints.down(991)]: {
      display: "block",
    },
    "& svg": {
      fill: "#6d7179",
    },
  },
  addProperty: {
    [theme.breakpoints.down(991)]: {
      justifyContent: "space-between",
      marginTop: "20px",
      marginBottom: "20px",
    },
  },
  tabAppbar: {
    "& .MuiAppBar-root": {
      background: "#fff",
      boxShadow: "none",
      [theme.breakpoints.down(991)]: {
        display: "none",
      },
      "& .MuiButtonBase-root": {
        minWidth: "131px",
        padding: "24px 12px",
        "& span": {
          color: "#090F1B",
        },
      },
    },
  },
  tabInbox: {
    "&:after": {
      content: "'5'",
      background: " #1DAF92",
      borderRadius: "12px",
      color: "#fff",
      fontSize: "12px",
      padding: "0px 13px",
      position: "absolute",
      right: 9,
    },
    // "& .MuiTab-wrapper": {
    //   alignItems: "initial",

    // },
  },
  tabBooking: {
    margin: "0px 10px",
    "&:after": {
      content: "'1'",
      right: 0,
    },
    // "& .MuiTab-wrapper": {
    //   alignItems: "initial",

    // },
  },
}));
