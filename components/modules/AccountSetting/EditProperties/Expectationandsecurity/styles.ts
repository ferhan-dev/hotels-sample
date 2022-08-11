import { makeStyles } from "@material-ui/core/styles";

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
      marginLeft: "0px",
      marginRight: "20px",
    },
  },
  photosGalleryMain: {
    paddingTop: "40px",
    display: "flex",
    justifyContent: "center",
  },
  expectation: {
    borderBottom: "1px solid #EAEEF5",
    paddingBottom: "24px",
    marginBottom: "24px",
  },
  expectationTitle: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "28px",
  },
  expectationHead: {
    fontSize: "14px",
    color: "#252E41",
    letterSpacing: "0.1px",
  },
  checkIcon: {
    fill: "#1DAF92",
    margin: "0px 5px",
    "&:focus": {
      background: "#1DAF92",
      fill: "#fff",
    },
  },
  closeIcon: {
    fill: "#F12237",
    margin: "0px 5px",
  },
  expectationContain: {
    marginBottom: "18px",
    "& .MuiBox-root": {
      [theme.breakpoints.down(576)]: {
        display: "flex",
      },
    },
  },
  checkWrap: {
    "& .MuiAvatar-root": {
      width: "24px",
      height: "24px",
      marginRight:"10px"
    },
  },
}));
