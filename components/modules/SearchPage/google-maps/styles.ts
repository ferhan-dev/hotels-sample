import { makeStyles } from "@material-ui/core";

interface Props {
  inTopBar: boolean;
  isSmallSize: boolean;
}

export const useStyles = makeStyles(
  () => ({
    locationResultsWrapper: ({ inTopBar }: Props) => ({
      width: "100%",
      marginLeft: inTopBar ? "-17px" : "-46px",
      marginTop: "25px",
      maxWidth: "324px",
      borderRadius: "10px",
      minWidth: "324px",
      ...(inTopBar && { zIndex: 2000 }),
      border: "none",
      Shadow: "0px 48px 80px -32px rgba(49, 50, 94, 0.12), 0px 64px 132px -20px rgba(49, 50, 94, 0.08)",
    }),
    locationResultsWrapperMobile: {
      width: "100%",
      // left: "36px !important",
      // top: "385px !important",
      maxWidth: "324px",
      // borderRadius: "10px",
      minWidth: "324px",
      border: "none",
      boxShadow: "none",
      background: "none",
      zIndex: 20000,
    },
    locationResultsList: {
      padding: "15px 0",
    },
    locationResultsItem: ({ isSmallSize }: Props) => ({
      display: "flex",
      alignItems: "start",
      cursor: "pointer",
      padding: "5px 15px",
      "& li": {
        // padding: "13px 0",
        "& span": {
          fontWeight: 500,
          fontSize: isSmallSize ? "13px" : "14px",
          lineHeight: isSmallSize ? "18px" : "24px",
        },
      },
      // "&:hover": {
      //   background: "#F8F9FC",
      //   "& .locationResultsIcon": { display: "none" },
      //   "& .locationResultsIconHover": { display: "inline-block" },

      //   //   background: "red",
      // },
    }),
    locationIconWrapper: ({ isSmallSize }: Props) => ({
      flex: "0 0 20px",
      maxWidth: isSmallSize ? "14px" : "20px",
      marginRight: "15px",
      marginTop: isSmallSize ? "9px" : "7px",
      ...(isSmallSize && { maxHeight: "17px" }),
    }),
    locationResultsIcon: { display: "inline-block", width: "100%", margin: "0 10px 0 0" },
    locationResultsIconHover: {
      // display: "none",
      width: "100%",
      margin: "0 10px 0 0",
      color: "#5A6987",
    },
    infoWindowWrapper: {
      width: "100%",
      height: "100%",
      maxWidth: "272px",
      maxHeight: "272px",
      background: "#FFFFFF",
      borderRadius: "24px",
      // padding: "16px",
    },
    locationResultText: {
      "&:hover": {
        background: "transparent",
      },
    },
    headerSearchOptionText: {
      paddingLeft: "10px",
      "&::placeholder": {
        fontFamily: "Inter, Arial, sans-serif",
        fontWeight: 500,
        fontSize: "14px",
        color: "#364259",
      },
    },
    locationMobileInput: {
      margin: "24px",
      padding: "10px 16px",
      width: "100%",
      maxWidth: "327px",
      height: "44px",
      background: "#FFFFFF",
      border: "1.5px solid #1DAF92",
      borderRadius: "24px",
      outline: "none",
    },
    locationResultsWrapperSM: {
      border: "none",
      background: "none",
      top: "auto",
      left: "auto",
      // "& .makeStyles-locationIconWrapper": {
      //   maxWidth: "14px !important",
      //   height: "17px !important",
      // },
    },
    LocationIconMobile: {
      maxWidth: "14px",
      maxHeight: "17px",
    },
    googleMapWrapper: ({ isSmallSize }: Props) => ({
      height: isSmallSize ? "300px" : "550px",
      width: "100%",
      ...(!isSmallSize && {
        maxWidth: "36%",
        position: "absolute",
        right: 0,
        top: 0,
        zIndex: 9,
      }),
      "& .gm-style-iw-t": {
        bottom: "63px !important",
      },
      "& .gm-style-iw-c": {
        borderRadius: "24px",
        padding: "16px !important",
        "& button": { display: "none !important" },
        "& .gm-style-iw-d": {
          padding: "0px !important",
          overflow: "hidden !important",
        },
      },
      "& .gm-bundled-control": {
        top: "18px !important",
        "& .gmnoprint": {
          "& div": {
            width: "32px !important",
            height: "76px !important",
            borderRadius: "24px !important",
            "& div": { display: "none" },
            "& button": { width: "100% !important", "& img": { width: "8px !important", height: "8px !important" } },
          },
        },
      },
    }),
  }),

  { index: 1 }
);
