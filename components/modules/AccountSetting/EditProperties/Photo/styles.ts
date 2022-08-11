import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1600px",
  },
  personalInfo: {
    boxShadow: "0px 1px 0px #eaeef5",
    paddingTop:"24px",
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
  photosGallery: {
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
  photosGalleryTitle: {
    fontSize: "14px",
    letterSpacing: "-0.02em",
    marginBottom: "10px",
    fontWeight: 500,
  },
  photoFrame: {
    width: "100%",
    borderRadius: "6px",
    height: "288px",
  },
  photoMove: {
    width: "32px",
    margin: "12px 0px 0px 8px",
    height: "32px",
    borderRadius: "6px",
    border: "1px solid #EAEEF5",
    "& .MuiAvatar-root": {
      width: "15px",
      height: "15px",
    },
  },
  secondaryPhoto: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  secondaryDetail: {
    padding: "24px 0px 0px 24px",
    [theme.breakpoints.down("xs")]: {
      padding: "24px 0px 0px 0px",
    },
  },
  photoFrames: {
    width: "100%",
    borderRadius: "6px",
    height: "144px",
  },
  secondaryTitle: {
    fontSize: "18px",
    letterSpacing: "-0.02em",
    marginTop: "24px",
    fontWeight: 600,
  },
  uploadPhoto: {
    position: "relative",
    width: "100%",
    background: "#F8F9FC",
    borderRadius: "6px",
    height: "144px",
    "& input": {
      "-webkitAppearance": "none",
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 0,
      width: "100%",
      height: "100%",
    },
  },
  uploadIcon: {
    width: "30px",
    height: "26px",
    borderRadius: "0px",
  },
  newImage: {
    border: "1px solid #EAEEF5",
    borderRadius: "6px",
    padding: " 9px 0px",
    margin: "24px 0px",
  },
  uploadnewIcon: {
    width: "19px",
    height: "16px",
    borderRadius: "0px",
    marginRight: "10px",
  },
  newTitle: {
    fontSize: "14px",
    color: "#364259",
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
  photosTipDetail: {
    "& h6": {
      fontSize: "14px",
      color: "#090F1B",
      fontWeight: 500,
      letterSpacing: "-0.02em",
      margin: "24px 0px 10px 0px",
    },
    "& p": {
      fontSize: "14px",
      color: "#5A6987",
      fontWeight: "normal",
      letterSpacing: "-0.01em",
      width: "100%",
      maxWidth: "420px",
    },
  },
}));
