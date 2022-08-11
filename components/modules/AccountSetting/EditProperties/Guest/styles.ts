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
    justifyContent: "center",
    paddingTop: "20px",
  },
  listTitle: {
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "0.5px",
    "& span": {
      color: "#1DAF92",
      paddingLeft: "2px",
    },
  },
  fullAddress: {
    borderBottom: "1px solid #EAEEF5",
    padding: "24px 0px",
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
      borderRadius: "24px",
      padding: "15px",
      color: "#9AA7C1",
      fontSize: "14px",
      fontWeight: "normal",
    },
    "& svg": {
      right: "10px",
    },
  },
  countGuest: {
    borderBottom: "1px solid #EAEEF5",
    padding: "24px 0px",
    // "& p": {
    //   letterSpacing: "0.5px",
    //   color: "#090F1B !important",
    // },
  },
  editIcon: {
    "& img": {
      width: "13px",
      height: "13px",
    },
  },
  editTitle: {
    color: "#364259 !important",
    fontSize: "14px",
  },
  guestArea: {
    border: "1px solid #EAEEF5",
    borderRadius: "6px",
    padding: "16px",
    marginTop: "24px",
  },
  guestBed: {
    color: "#090F1B",
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "0.5px",
  },
  guestbedCount: {
    color: "#5A6987",
    fontSize: "12px",
    fontWeight: 500,
    letterSpacing: "0.5px",
  },
}));
