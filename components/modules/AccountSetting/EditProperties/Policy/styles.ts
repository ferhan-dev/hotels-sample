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
  policyHead: {
    fontSize: "14px",
    color: "#364259",
    fontWeight: "normal",
    letterSpacing: "-0.01em",
    marginBottom: "16px",
    width: " 100%",
    maxWidth: "485px",
  },
  policyTitle: {
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "-0.02em",
  },
  formControl: {
    marginTop: "5px",
    minWidth: "100%",
    marginBottom: "24px",
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
}));
