import { makeStyles, createStyles, Theme } from "@material-ui/core";

interface Props {
  isSmallSize: boolean;
}

export const useFilterStyles = makeStyles(() =>
  createStyles({
    drawerWrapper: {
      "& .MuiDrawer-paperAnchorLeft": {
        right: 0,
        width: "100%",
      },
    },
    priceFilterWrapper: {
      padding: "0 24px 24px 24px",
      display: "flex",
      flexDirection: "column",
      border: "none",
    },
    priceInput: {
      padding: "10px 16px",
      width: "156px",
      height: "44px",
      border: "1px solid #EAEEF5",
      borderRadius: "24px",
      margin: "4px 0px",
      "& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        margin: "0",
      },
      "&::placeholder": {},
    },
    root: {
      padding: "24px",
      display: "flex",
      justifyContent: "space-between",
      borderTop: "1px solid #EAEEF5",
      alignItems: "center",
    },
    divider: {
      padding: "8px 0px",
      border: "1px solid #EAEEF5",
    },
    filterAccordion: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      padding: "8px 12px 8px 16px",
      height: "40px",
      border: "1px solid #EAEEF5",
      borderRadius: "24px",
      "& p": { color: "#9AA7C1" },
    },
    moreFiltersMobile: {
      display: "flex",
      flexDirection: "column",
      paddingTop: "0px",
      "& li": {
        width: "100%",
        maxWidth: "100%",
      },
    },

    filterBtnApply: {
      padding: "10px 20px",
      maxWidth: "237px",
      width: "100%",
      background: "#1DAF92",
      borderRadius: "24px",
      color: "white",
    },
    filterBtnCancel: {
      padding: "10px 20px",
      width: "100%",
      maxWidth: "75px",
      height: "44px",
      background: "#FFFFFF",
      border: "1px solid #EAEEF5",
      boxSizing: "border-box",
      borderRadius: "24px",
      color: "#364259",
    },
    amenitiesDrawer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      "& li": {
        listStyleType: "none",
      },
    },
  })
);

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    resultsWrapper: {
      "& hr": {
        color: "#EAEEF5",
        opacity: 0.2,
        marginBottom: "0px",
      },
    },
    searchResultsWrapper: ({ isSmallSize }: Props) => ({
      width: "100%",
      display: "flex",
      padding: isSmallSize ? "0px 18px 24px 24px" : "24px 24px",
      background: "#FFFFFF",
      //boxShadow: "0px 1px 0px #EAEEF5",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      maxWidth: "1180px",
      margin: "0 auto",
      zIndex: 10000,
    }),
    searchResultsItemsWrapper: ({ isSmallSize }: Props) => ({
      width: "100%",
      maxWidth: "1180px",
      margin: "0 auto",
      minHeight: "550px",
      ...(!isSmallSize && { display: "flex", padding: "0 24px" }),
      flex: "0 0 70%",
      // display: "flex",
      background: "#FFFFFF",
      // boxShadow: "0px 1px 0px #EAEEF5",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      // maxWidth: "1330px",
    }),

    resultItemDataWrapper: ({ isSmallSize }: Props) => ({
      maxWidth: isSmallSize ? "100%" : "390px",
      flex: isSmallSize ? "0 0 100%" : "0 0 60%",
      width: "100%",
      padding: isSmallSize ? 0 : "0 30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }),

    propertySpecsWrapper: {
      display: "flex",
      flexWrap: "wrap",
      flex: "0 0 50%",
      justifyContent: "space-between",
      alignItems: "center",
      maxHeight: "80px",
      height: "100%",
      // margin: "24px 0",
      "& div": {
        display: "flex",
        flex: "0 0 50%",
        maxWidth: "50%",
        width: "100%",
        alignItems: "center",
        "& img": {
          marginRight: "8px",
        },
        "& p": {
          marginRight: "8px",
        },
      },
    },

    priceAndReviewWrapper: ({ isSmallSize }: Props) => ({
      display: "flex",
      alignContent: "center",
      justifyContent: "space-between",
      ...(isSmallSize && { marginTop: "12px", marginBottom: "24px" }),
      "& div": {
        display: "flex",
        alignItems: "center",
        "& svg, span": {
          marginRight: "4px",
        },
      },
    }),
    priceWrapper: {
      padding: "4px 12px",
      background: "#F8F9FC",
      borderRadius: "12px",
    },

    root: {
      flexGrow: 1,
      display: "flex",
    },
    menuButton: {
      marginRight: theme.spacing(2),
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
    typography: {
      padding: theme.spacing(2),
    },
    paper: {
      // color: "#5A6987",
      padding: "5px 8px",
      textAlign: "center",
      margin: "0 4px",
      background: "transparent",
      boxShadow: "none",
      color: theme.palette.text.secondary,
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 151,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    itemContainer: {
      //padding: "0 0 25px 0",
      //marginBottom: "25px",
      position: "relative",
    },
    imageContainer: ({ isSmallSize }: Props) => ({
      position: "relative",
      width: "100%",
      maxWidth: isSmallSize ? "100%" : "40%",
      flex: isSmallSize ? "0 0 100%" : "0 0 40%",
    }),
    iconContainer: {
      "& .MuiGrid-container": {
        width: "auto",
        padding: "0 8px 0 0",
      },
    },
    iconCircle: {
      // backgroundColor: theme.palette.primary,
      backgroundColor: "#00AE8D",
      color: "white",
      borderRadius: "100%",
      padding: "7px 0px",
      width: "34px",
      height: "34px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
    iconStyle: { height: "18px", width: "auto" },
    iconText: {
      fontFamily: "Montserrat, Arial, sans-serif",
      color: "#484848",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "8px",
      lineHeight: "10px",
      textAlign: "center",
      marginTop: "8px",
    },
    propertyPrice: {
      marginTop: "25px",
      "& .propertyNormal": {
        marginLeft: 0,
      },
    },
    pillDrop: {
      backgroundColor: "#FFFFFF",
      border: "0.5px solid #484848",
      boxSizing: "border-box",
      borderRadius: "100px",
      // borderRadius: "50px",
      padding: "0px 5px 0px 10px",
    },
    pillText: {
      fontFamily: "Montserrat, Arial, sans-serif",
      color: "#707070",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "20px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      padding: "6px 10px 6px 15px",
    },
    flexIt: {
      display: "inline-flex",
      alignItems: "center",
      marginLeft: "auto",
    },
    mr10: {
      marginRight: "10px",
    },
    mt15: {
      marginTop: "15px",
    },
    p15: {
      padding: "15px",
    },
    title: {
      fontFamily: "Montserrat, Arial, sans-serif",
      fontStyle: "normal",
      fontSize: "30px",
      fontWeight: 600,
      lineHeight: "37px",
      marginTop: "45px",
      marginBottom: "25px",
    },
    propertyBold: {
      fontFamily: "Montserrat, Arial, sans-serif",
      fontStyle: "normal",
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "15px",
      color: "#484848",
    },
    propertyBold2: {
      fontFamily: "Montserrat, Arial, sans-serif",
      fontStyle: "normal",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "20px",
      color: "#484848",
      margin: "15px 0 30px 0",
      position: "relative",
      "&:after": {
        position: "absolute",
        content: '""',
        height: "1px",
        bottom: "-10px",
        left: "0px",
        background: "#CCCBCB",
        width: "55px",
      },
    },

    propertyNormal: {
      fontFamily: "Montserrat, Arial, sans-serif",
      fontStyle: "normal",
      fontSize: "12px",
      fontWeight: 300,
      lineHeight: "15px",
      color: "#484848",
      marginLeft: "8px",
    },
    propertyTitleContainer: {
      display: "flex",
      alignItems: "center",
    },
    propertyImage: {
      width: "100%",
      height: "220.34px",
      borderRadius: "8px",
    },
    avatarIcon: {
      width: "90px",
      height: "90px",
      margin: "0 auto 25px auto",
    },
    ratingContainer: {
      alignItems: "center",
      "& .MuiSvgIcon-root": {
        width: "18px",
        height: "18px",
        fontSize: "1.0rem",
      },
    },
    footerBold: {
      fontFamily: "Montserrat, Arial, sans-serif",
      fontStyle: "normal",
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "25px",
      color: "#003E48",
      marginBottom: "20px",
    },
    footerBold2: {
      marginTop: "30px",
    },
    footerNormal: {
      fontFamily: "Montserrat, Arial, sans-serif",
      fontStyle: "normal",
      fontSize: "18px",
      fontWeight: 300,
      lineHeight: "35px",
      color: "#484848",
    },
    bannerBox: {
      position: "relative",
      backgroundImage: `url("/images/free-booking.png")`,
      height: "270px",
      borderRadius: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: "0 60px",
      width: "100%",
      overflow: "hidden",
    },
    bannerTitle: {
      fontFamily: "Montserrat, Arial, sans-serif",
      fontStyle: "normal",
      fontSize: "25px",
      fontWeight: "bold",
      lineHeight: "30px",
      color: "#FFFFFF",
      position: "relative",
      zIndex: 1,
    },
    bannerText: {
      fontFamily: "Montserrat, Arial, sans-serif",
      fontStyle: "normal",
      fontSize: "13px",
      fontWeight: "normal",
      lineHeight: "16px",
      color: "#FFFFFF",
      maxWidth: "260px",
      width: "100%",
      margin: "13px 0 27px 0",
      position: "relative",
      zIndex: 1,
    },
    bannerButton: {
      height: "27px",
      width: "127px",
      borderRadius: "100px",
      backgroundColor: "#FFFFFF",
      position: "relative",
      zIndex: 1,
    },
    bannerButtonText: {
      fontFamily: "Montserrat, Arial, sans-serif",
      fontStyle: "normal",
      fontSize: "10px",
      fontWeight: 600,
      lineHeight: "12.19px",
      color: "#00AE8D",
    },
    overlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%",
      height: "100%",
      background: "rgba(49, 49, 49, 0.65)",
      zIndex: 0,
    },
    footerContainer: {
      padding: "80px 0",
      borderTop: "1px solid #CCCBCB",
    },
    noMargin: {
      width: "100%",
      margin: 0,
    },
    testimonialWrap: {
      textAlign: "center",
      borderRight: "1px solid #CCCBCB",
      padding: "0 30px 0 10px",
      "& .MuiGrid-item": {
        "& .footerNormal": {
          textAlign: "center",
        },
      },
    },
    footerLinksContainer: {
      "& .MuiGrid-item": {
        flex: "0 0 25%",
        maxWidth: "25%",
        width: "100%",
      },
    },
    socialIcons: {
      display: "flex",
      alignItems: "center",

      "& a": {
        display: "inline-block",
        height: "35px",
        width: "35px",
        color: "#003E48",
        marginRight: "5px",
      },
    },
    regionLinkSection: {
      color: "#00AE8D",
      display: "flex",
      alignItems: "center",
      "& svg": {
        marginLeft: "7px",
      },
    },
    accordianWrap: {
      "& p": {
        background: "#EFEFEF",
        textTransform: "uppercase",
        padding: "35px 0 35px 50px",
        margin: 0,
        borderBottom: "0.5px solid #CCCBCB",
        "& svg": {
          position: "relative",
          bottom: "-3px",
        },
      },
    },
    copyright: {
      background: "#EFEFEF",
      "& p": {
        textAlign: "center",
        padding: "5px 0 20px 0",
      },
    },
    footerContainer2: {},
    scrollSegment: ({ isSmallSize }: Props) => ({
      // padding: "50px",
      //marginBottom: "50px",
      // marginTop: "24px",
      width: "100%",
      maxWidth: isSmallSize ? "100%" : "95%",
      ...(!isSmallSize && {
        height: "100%",
        overflow: "hidden",
        overflowY: "auto",
        scrollbarColor: "#F8F9FC #F8F9FC",
        scrollbarWidth: "thin",
        MsOverflowStyle: "none",
        "&::-webkit-scrollbar-track": {
          WebkitBoxShadow: "inset 0 0 0px rgba(0, 0, 0, 0)",
        },
        "&::-webkit-scrollbar": {
          width: "3px",
          backgroundColor: "#fff",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "40px",
          WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
          backgroundColor: "#F8F9FC",
        },
        "&::-webkit-scrollbar:horizontal": {
          border: "none",
        },
      }),
    }),
    moreFilterContainer: {
      minWidth: "384px",
      minHeight: "384px",
      justifyContents: "space-between",
      "& .MuiGrid-container": {
        margin: "12px 20px",
        width: "100%",
        maxWidth: "361px",
        justifyContent: "space-between",
        "& .MuiGrid-container": {
          margin: 0,
          padding: 0,
          "& .MuiGrid-item": {
            "& .MuiTypography-body1": {
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "24px",
            },
            "& .MuiTypography-body2": {
              fontSize: "12px",
              lineHeight: "16px",
            },
          },
        },
        "& .MuiGrid-grid-xs-8": {
          justifyContent: "flex-start",
          maxWidth: "224px",
        },
        "& .MuiGrid-grid-xs-4": {
          justifyContent: "flex-end",
          maxWidth: "104px",
        },
      },
    },
    filterButton: {
      display: "flex",
      justifyContent: "center",
      marginTop: "15px",
      "& button": {
        minWidth: "50%",
      },
    },
    menuClass: {
      "& .MuiPopover-paper": {
        top: "110px",
        left: "220px",
        boxShadow: "2px 2px 10px 10px #31325e2e",
        borderRadius: "16px",
      },
    },
    priceMenuForm: {
      width: "100%",
      padding: 0,
      "& .MuiFormControl-root": {
        border: "0",
        margin: "0",
        display: "block",
        padding: "0",
        position: "relative",
        minWidth: "0",
        flexDirection: "column",
        verticalAlign: "top",
        width: "100%",
      },
      // display: "flex",
      // flexGrow: 1,
      // flexWrap: "wrap",
      // maxWidth: "221px",
      // alignItems: "center",
      // justifyContent: "center",
      // padding: "4px 10px",
      // "& button": {
      //   minWidth: "50%",
      //   marginTop: "10px",
      // },
    },
    priceMenuContainer: {
      "& .MuiPaper-elevation0": {
        //  top: "300px",
        //  left: "40px",
        boxShadow: "2px 2px 10px 10px #31325e2e",
        borderRadius: "16px",
        width: "100%",
        maxWidth: "360px",
        padding: "20px",
        "& ul": {
          padding: "0px",
          margin: "0px",
        },
        "& p": { marginBottom: "5px", fontWeight: 500 },
        "& .MuiInput-underline": {
          "&:before": { display: "none" },
          "&:after": { display: "none" },
        },
        "& .MuiInputBase-formControl": { display: "block" },
        "& input": {
          width: "93% !important",
          maxWidth: "320px",
          background: "#FFFFFF",
          border: "1px solid #EAEEF5",
          borderRadius: "24px",
          padding: "12px",
          marginBottom: "20px",
        },
      },
    },
    priceBtnWrapper: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      "& button": {
        width: "70px",
        height: "40px",
        borderRadius: "24px",
        padding: "8px",
        "&:first-child": {
          color: "#364259",
          background: "transparent",
        },
      },
    },

    amenitiesMenu: {
      "& .MuiPopover-paper": {
        maxWidth: "1130px",
        margin: "15px auto !important",
        left: "-15px !important",
        right: "0 !important",
        borderRadius: "16px",
        boxShadow: "0px 48px 80px -48px rgba(49, 50, 94, 0.12), 0px 64px 132px -32px rgba(49, 50, 94, 0.08)",
      },
      "& ul": {
        display: "flex",
        flexWrap: "wrap",
        margin: "0 15px",
        "& li": {
          flex: "0 0 33.33%",
          maxWidth: "33.33%",
          width: "100%",
          padding: "0 15px",
          "& p": {
            marginLeft: "20px",
            marginRight: 0,
          },
          "& .buttonGroupContainer": {
            width: "100%",
          },
        },
      },
    },
    amenityIcon: {
      color: "#5A6987",
      maxWidth: "30px",
      width: "100%",
      maxHeight: "30px",
    },
    amenitiesButton: {
      display: "flex",
      flex: " 0 0 100%",
      maxWidth: "100%",
      borderTop: "1px solid #EAEEF5",
      padding: "15px",
      justifyContent: "flex-end",
    },
    amenitiesButtonCancel: {
      padding: "8px 16px",
      width: "77px",
      height: "40px",
      border: "1px solid #EAEEF5",
      boxSizing: "border-box",
      borderRadius: "24px",
      marginRight: "10px",
    },
    amenitiesButtonApply: {
      padding: "8px 16px",
      width: "77px",
      height: "40px",
      background: "#1DAF92",
      borderRadius: "24px",
      "& span": { color: "white" },
    },

    menuWrapper: {
      "& .MuiPaper-elevation0": {},

      "& .MuiPopover-paper": {
        minWidth: "384px",
        padding: "0 20px",
        background: "#FFFFFF",
        marginTop: "15px !important",
        boxShadow: "0px 48px 80px -48px rgba(49, 50, 94, 0.12), 0px 64px 132px -32px rgba(49, 50, 94, 0.08)",
        borderRadius: "16px",
        marginLeft: "-18px",
      },
      "& ul": {
        paddingTop: 0,
        paddingBottom: 0,
      },
      "& li": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "18px 0",
        "& .MuiTypography-body1": { color: "#1A2232", fontSize: "14px" },
        "& .MuiTypography-body2": { color: "#5A6987", fontSize: "12px" },
      },

      "& .MuiPaper-root": {
        maxHeight: "100%",
        overflowY: "inherit",
        marginTop: "25px",
        "& ul": {
          "& li": {
            "& span": {
              color: "#1A2232",
              textTransform: "capitalize",
            },
          },
        },
      },
    },

    buttonGroupContainer: {
      display: "flex",
      // flexDirection: "column",
      alignItems: "center",
      "& span": {
        margin: "0 25px",
      },
      "& > *": {
        // margin: theme.spacing(1),
      },
      "& .MuiButtonGroup-root": {
        borderRadius: "6px",
        border: "1px solid #EAEEF5",
        "& .MuiButton-outlined": {
          border: "none",
        },
      },
    },
    internetTypeWrapper: {
      maxWidth: "344px",
      width: "100%",
      border: "1px solid #EAEEF5",
      borderRadius: "40px !important",
      boxShadow: "none",
    },
    filterIconWrapper: {
      display: "flex",
      "& img": { marginRight: "16px" },
    },
    propertyResultsWrapper: ({ isSmallSize }: Props) => ({
      flex: isSmallSize ? "0  0 100%" : "0 0 75%",
      width: "100%",
      ...(!isSmallSize && {
        height: "550px",
      }),
      ...(isSmallSize && { padding: "0 24px" }),
      marginTop: "24px",
      marginBottom: "50px",
      maxWidth: isSmallSize ? "100%" : "75%",
    }),
    paginationWrapper: {
      maxWidth: "95%",
      "& ul": {
        margin: "50px 0",
        display: "flex",
        padding: "0",
        flexWrap: "wrap",
        listStyle: "none",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      },
      "& li": {
        height: "40px",
        width: "40px",
        "&:first-child": {
          left: "0",
          position: "absolute",
          border: "1px solid #EAEEF5",
          borderRadius: "50%",
          // height: "32px",
          // width: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        "&:last-child": {
          position: "absolute",
          border: "1px solid #EAEEF5",
          borderRadius: "50%",
          //  height: "32px",
          //  width: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          right: 0,
        },
      },
    },
    stickySearchTopBar: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      paddingTop: "24px",
    },
  })
);
