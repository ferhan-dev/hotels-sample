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
  Arrival: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down(426)]: {
      display: "flex",
      flexDirection: "column",
   },
  },
  MainTypography: {
    fontSize: "16px",
  },
  ArrivalInside: {
    width: "45%",
    [theme.breakpoints.down(426)]: {
      width: "100%",
    },
  },
  StayLength: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  spanclass: {
    marginLeft: "40px",
    [theme.breakpoints.down(780)]: {
      marginLeft: "10px",
    },
  },
  GrayColor: {
    color: "gray",
    width: "180px",
    [theme.breakpoints.down(780)]: {
      width: "70% !important",
      marginLeft: "10px",
      fontSize: "12px"
      },
  },
  GrayColorOnly: {
    color: "gray",
  },
  InsideButton: {
    padding: "8px 16px",
    borderRadius: "20px",
    width: "100%",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        marginTop: "6px",
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
    fontSize: "16px",
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

  SmartPricingMainDiv: {
      border: "1px solid #E5E5E5",
      borderRadius: "5px",
      width: "100%",

  },
  SmartPricingMainDiv2: {
    display: "flex", 
    flexDirection:"row",
    [theme.breakpoints.down(576)]: {
        flexDirection:"column",
        width: "100%"
      },
},
editIcon: {
    "& img": {
      width: "13px",
      height: "13px",
    },
  },

  editTitle: {
    color: "#364259",
    fontSize: "14px",
  },
}));
