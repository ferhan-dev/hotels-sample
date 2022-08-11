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
      marginLeft: "0px",
      marginRight: "10px",
    },
  },
  photosGalleryMain: {
    display: "flex",
    justifyContent: "center",
    padding: "40px 0px",
  },
  fullAddress: {
    "& input": {
      width: "100%",
      border: "1px solid #EAEEF5",
      borderRadius: "6px",
      padding: "15px",
      fontSize: "14px",
      fontWeight: "normal",
      margin: "5px 0px 12px 0px",
      "&::placeholder": {
        color: "#252E41",
      },
    },
  },
  listTitle: {
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "0.5px",
    paddingTop: "24px",
    "& span": {
      color: "#1DAF92",
      paddingLeft: "2px",
    },
  },
  listHead: {
    paddingTop: "0px",
  },
  listTip: {
    fontSize: "12px",
    fontWeight: "normal",
    letterSpacing: "0.5px",
    color: "#5A6987",
    "& span": {
      color: "#1DAF92",
      fontWeight: 500,
    },
  },
  infoIcon: {
    width: "12px",
    height: "12px",
    marginRight: "10px",
  },
  listInfo: {
    marginTop: "12px",
    borderBottom: "1px solid #EAEEF5",
    paddingBottom: "32px",
  },
  accomodation: {
    fontSize: "16px",
    fontWeight: 500,
    letterSpacing: "0.5px",
    marginTop: "32px",
    "& span": {
      color: "#9AA5C4",
      fontWeight: 500,
    },
  },
  adviseInfo: {
    marginTop: "12px",
  },
}));
