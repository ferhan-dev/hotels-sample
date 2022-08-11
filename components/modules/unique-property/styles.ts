import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints }) => ({
    rootColor: {
      background: "#fff"
    },
    root: {
      background: '#fff',
      padding: "75px 24px",
      [breakpoints.up("xl")]: {
        padding: "208px 0",
      },
      [breakpoints.down("md")]: {
        padding: "88px 24px",
      },
    },
    flexWrapper: {
      marginTop: '40px',
      // alignItems: "center",
      display: "flex",
      gap: "24px",
      justifyContent: "space-between",
      [breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },

    FixedPosition: {
      position: "fixed",
    },

    DisplayNone: {
      display: "none",
      [breakpoints.down(769)]: {
        display: "block",
      },
    },

    MobileSlider: {
      [breakpoints.down(769)]: {
        marginTop: "70px",
        width: "100%", 
        marginBottom: "-60px"
    },
    },

    MobileDisplayNone: {

      [breakpoints.down(769)]: {
        display: "none",
      },
    },

    mobileHandle: {
      [breakpoints.down(426)]: {
        display: "flex",
        flexDirection: "column",
      },
    },

    hrLine: {
      border: "0.5px solid #EAEEF5"
    },

    facilities: {
      display: "flex",
      justifyContent: "space-between",
      padding: '20px 0',
      [breakpoints.down(426)]: {
        display: "flex",
        flexDirection: "column",
      },
    },

    mainCard: {
      display: "flex",
      justifyContent: "space-between",
      gap: "14px",
      marginTop: "21px"
    },

    cardItem: {
      flexBasis: "56%",
      alignItems: "flex-end",
      alignSelf: "end",
      borderRadius: "6px",
      padding: "12px",
      border: "1px solid #EAEEF5",
      [breakpoints.down(426)]: {
        width: "100%"
      },
    },

    dFlex: {
      display: 'flex',
    },
    nightText: {
      alignSelf: "flex-end"
    },
    reviewMargin: {
      margin: "18px 0"
    },
    cardMainHeading: {
      marginLeft: "12px",
      fontWaight: "bold",
      color: "#000"
    },
    cardSubHeading: {
      margin: "0", color: "#5A6987", fontWeight: "normal"
    },
    imgMarginBottom: {
      marginBottom: "15px"
    },

    CardDescription: {
      color:" #5A6987",
      overflowWrap: "break-word",
      width: "320px",
      overflowX: "hidden"
    },
    
    reviewsBtn: {
      background: "#ffff",
      borderRadius: "24px",
      padding: "12px",
      margin: "46px 0",
      border: "1px solid #EAEEF5",
      cursor: "pointer",
      height: "40px",
      [breakpoints.down(426)]: {
       width: "100%",
      },
    },
    ulWrap: {
      listStyle: "none",
      padding: "0"
    },
    checkImg: {
      marginRight: "12px"
    },
    ruleWrap: {
      flexBasis: "30%"
    },
    msgBtn: {
      background: "#ffff",
      borderRadius: "24px",
      padding: "12px",
      border: "1px solid #ccc",
      display: "flex", 
      height: "40px",
      [breakpoints.down(426)]: {
        width: "100%"
      },
    },
    roomSec: {
      display: "flex",
      gap: "25px",
      [breakpoints.down(426)]: {
        flexDirection: "column",
      },
    },
    roomCard: {
      background: "#fff",
      border: "1px solid #ccc",
      borderRadius: "12px",
      width: "345px",
      padding: "0 22px",
      marginTop: "30px",
      [breakpoints.down(426)]: {
        width: "100%"
      },
    },
    spaceArro: {
      marginLeft: "12px",
    },
    calenderSpace: {
      marginTop: "30px",
      [breakpoints.down(426)]: {
        overflowX: "hidden",
      },
    },

    amenitiesWrap: {
      display: "flex",
      flexBasis: "53%"
    },
    amenitiesWrapSec: {
      display: "flex",
      justifyContent: "space-between",
      [breakpoints.down(426)]: {
        flexDirection: "column",
      },
    },

    discription: {
      margin: "15px 0"
    },
    RecommendationsWrapper: {
      display: "flex",
      gap: "20px",
      marginTop: "15px"
    },
    recommendationImg: {
      width: "363px !important",
      height: "192px",
      objectFit: "cover",
      borderRadius: "12px",
    },
    "& .carousel .thumbs-wrapper": {
      display: "none"
    },
    subHeading: {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: "20px"
    },
    subHeadingInner: {
      display: "flex",
    },
    borderSpan: {
      borderRight: "3px solid #EAEEF5",
      transform: "rotate(\n90deg\n)",
      marginRight: "5px"
    },
    mainHeadingIcon: {
      margin: "12px"
    },
    bookingBtn: {
      background: "#1DAF92",
      width: "100%",
      borderRadius: "30px",
      color: "#ffff",
      padding: "6px 0",
      margin: "20px 0"
    },
    selectWrap: {
      borderRadius: "24px",
      padding: "15px",
      border: "1px solid #EAEEF5",
      margin: "14px 0px",
      width: "100%",
      background: "url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #FFFFFF",
      WebkitAppearance: "none",
      backgroundPositionX: "327px"
    },
    optionImg: {
      backgroundImage: "url('/images/cal.png')"
    },
    bottomText: {
      textAlign: "center", color: "#9AA7C1", margin: "20px 0"
    }


  }),
  { index: 1 }
);

export const useImageSectionStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    root: {
      padding: "75px 24px",
      [breakpoints.up("xl")]: {
        padding: "208px 0",
      },
      [breakpoints.down("md")]: {
        padding: "88px 24px",
      },
    },
    avatar: {
      width: "48px",
      height: "48px",
    },
    chip: {
      background: palette.primary.main,
      border: `2px solid ${palette.common.white}`,
      borderRadius: "12px",
      gap: "5.33px",
      height: "24px",
      width: "54px",
    },
    chipIcon: {
      color: palette.common.white,
      margin: "0",
      fontSize: "13px",
    },
    chipLabel: {
      color: palette.common.white,
      fontSize: "12px",
      fontWeight: 500,
      letterSpacing: "-0.016em",
      lineHeight: "24px",
      padding: 0,
    },
    flexWrapper: {
      // alignItems: "center",
      display: "flex",
      gap: "24px",
      justifyContent: "space-between",
      [breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    image: {
      background: "url(/images/photoFrame.png)",
      borderRadius: "12px",
      height: "368px",
      position: "relative",
      [breakpoints.up("md")]: {
        maxWidth: "552px",
      },
      width: "100%",
      [breakpoints.only("md")]: {
        flexBasis: "50%",
      },
      [breakpoints.only("sm")]: {
        height: "400px",
      },
      [breakpoints.down("xs")]: {
        height: "216px",
      },
    },
    reviewWrapper: {
      background: palette.background.paper,
      position: "absolute",
      borderRadius: "12px",
      padding: "24px",
      height: "180px",
      right: "48px",
      bottom: "-128px",
      width: "264px",
      [breakpoints.down("sm")]: {
        left: 0,
        right: 0,
        margin: "auto",
      },
    },
    subTitle: {
      color: palette.common.white,
      margin: "14px 0 44px 0",
    },
    title: {
      color: palette.common.white,
      maxWidth: "652px",
    },
  }),
  { index: 1 }
);
