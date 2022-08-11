import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1600px",
  },
  personalInfo: {
    boxShadow: "0px 1px 0px #eaeef5",
    paddingTop: "24px",
    "& h6": {
      fontSize: "18px",
      color: "#090F1B",
    },
  },
  leftArrow: {
    width: "12px",
    height: "12px",
    marginRight: "30px",
    marginLeft: "40px",
    [theme.breakpoints.down(576)]: {
      marginLeft: "10px",
    },
  },
  photosGalleryMain: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  address: {
    padding: "40px 120px 0px 20px",
    [theme.breakpoints.down("lg")]: {
      padding: "40px 80px 0px 20px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "40px 40px 0px 0px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "40px 0px 0px 0px",
    },
  },
  fullAddress: {
    "& h6": {
      fontSize: "14px",
      fontWeight: 500,
      "& span": {
        color: "#1DAF92",
        paddingLeft: "2px",
      },
    },
    "& input": {
      width: "100%",
      border: "1px solid #EAEEF5",
      borderRadius: "6px",
      padding: "15px",
      fontSize: "14px",
      fontWeight: "normal",
      margin: "5px 0px 24px 0px",
      "&::placeholder": {
        color: "#9AA7C1",
      },
    },
  },
  formControl: {
    marginTop: "5px",
    minWidth: "100%",
  },
  selectEmpty: {
    marginBottom: "24px",
    "&:before": {
      borderBottom: "0",
    },
    "& .MuiNativeSelect-root": {
      border: "1px solid #EAEEF5",
      borderRadius: "6px",
      padding: "15px",
      color: "#9AA7C1",
      fontSize: "14px",
      fontWeight: "normal",
    },
    "& svg": {
      right: "10px",
    },
  },
  positionTitle: {
    color: "#090F1B",
    fontWeight: 500,
    letterSpacing: "-0.02em",
  },
  positionDetail: {
    color: "#5A6987",
    fontSize: "14px",
    fontWeight: "normal",
    letterSpacing: "-0.01em",
  },
  area: {
    boxShadow: "0px 0px 6px #14b5a2",
    margin: "120px 0px 110px 0px",
  },
  setLocation: {
    border: "1px solid #EAEEF5",
    borderRadius: "6px",
    textAlign: "center",
    padding: "7px 0px",
    marginBottom: "24px",
    "& h6": {
      color: "#364259",
      fontWeight: 500,
      fontSize: "14px",
      letterSpacing: "-0.02em",
    },
  },
  photosTipMain: {
    boxShadow: " -1px 0px 0px #eaeef5",
    padding: "40px 0px 0px 40px",
    [theme.breakpoints.down("sm")]: {
      boxShadow: "none",
      padding: "40px 0px 0px 0px",
    },
  },
  tipsTitle: {
    fontSize: "18px",
    letterSpacing: "-0.02em",
    fontWeight: 600,
  },
  photoTip: {
    width: "20px",
    height: "20px",
    marginRight: "20px",
  },
  addressPara: {
    color: "#5A6987",
    fontSize: "14px",
    fontWeight: "normal",
    letterSpacing: "-0.01em",
    width: "100%",
    maxWidth: "420px",
    marginTop: "24px",
  },
  galleryGrid: {
    marginLeft: "24px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
  },
}));
