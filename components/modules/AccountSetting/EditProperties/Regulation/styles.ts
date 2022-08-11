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
      marginLeft: "10px",
    },
  },
  photosGalleryMain: {
    paddingTop: "40px",
    display: "flex",
    justifyContent: "center",
  },
  expectationTitle: {
    fontSize: "18px",
    fontWeight: 600,
  },
  expectationHead: {
    fontSize: "14px",
    color: "#252E41",
    letterSpacing: "0.1px",
    "& span": {
      color: "#a0afcb",
      [theme.breakpoints.down(425)]: {
        display: "block",
      },
    },
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
  },
  formControl: {
    marginTop: "5px",
    minWidth: "100px",
  },
  selectEmpty: {
    "&:before": {
      borderBottom: "0",
    },
    "& .MuiNativeSelect-root": {
      border: "1px solid #EAEEF5",
      borderRadius: "6px",
      padding: "15px",
      color: "#252E41",
      fontSize: "14px",
      fontWeight: "normal",
    },
    "& svg": {
      right: "10px",
    },
  },
  expectation: {
    marginBottom: "20px",
  },
  checkWrap: {
    "& .MuiAvatar-root": {
      width: "24px",
      height: "24px",
      marginRight: "10px",
    },
  },
}));
