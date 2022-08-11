import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    background: {
      background: palette.background.default,
      borderRadius: "16px",
      height: "396px",
      maxWidth: "1360px",
      margin: "auto",
    },
    container: {
      paddingTop: "80px",
      height: "336px",
      [breakpoints.down("lg")]: {
        paddingLeft: "1rem",
        paddingRight: "1rem",
      },
      [breakpoints.down(375)]: {
        paddingTop: "48px",
        height: "296px",
      },
    },
    image: {
      height: "264px",
      width: "264px !important",
      [breakpoints.down("sm")]: {
        height: "216px",
        width: "216px !important",
      },
    },
    slider: {
      marginTop: "-120px",
      marginLeft: "calc(50vw - 564px)",
      [breakpoints.down(1250)]: {
        marginLeft: "24px",
      },
      [breakpoints.up(1440)]: {
        width: "1290px",
      },
      [breakpoints.down(376)]: {
        marginLeft: "15px",
      },
    },
    sliderWrap: {
      paddingBottom: "160px",
    },
    subTitle: {
      margin: "8px 0 72px 0",
    },
    title: {},
    sliderphotos: {
      marginTop: "10px",
      "& h5": {
        display: "none",
      },
    },
    imagePhotos: {
      height: "210px",
      width: "310px !important",
      [breakpoints.down("lg")]: {
        height: "200px",
        width: "216px !important",
      },
      [breakpoints.down("sm")]: {
        height: "200px",
        width: "216px !important",
      },
    },
    sliderphotoWrap: {
      paddingBottom: "0px",
    },
    slideHeader: {
      display: "none",
    },
  }),
  { index: 2 }
);
