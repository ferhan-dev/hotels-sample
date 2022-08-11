import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints2= createBreakpoints({})

const theme2 = createTheme({
  typography: {
    h6: {
      [breakpoints2.down(426)]: {
        width:"170px",
        overflow: "hidden !important",
        textOverflow: "ellipsis !important",
        fontWeight: "500 !important",
        marginTop: "10px",
        height: "30px",
        fontSize: "13px"
      },
      [breakpoints2.down(320)]: {
        width:"130px",
        overflow: "hidden !important",
        textOverflow: "ellipsis !important",
        fontWeight: "500 !important",
        marginTop: "10px",
        height: "30px",
        fontSize: "13px"
      },
    },
    h5: {
      fontSize: "16px",
      marginTop: "12px !important",
      [breakpoints2.down(1445)]: {
        fontWeight: "700 !important",
      },
      [breakpoints2.down(321)]: {
        width:"130px",
        fontWeight: "700 !important",
        marginTop: "10px",
        marginLeft: "5px !important",
        height: "30px",
        fontSize: "13px"
      },
    }
  },
})
export default theme2

export const useStyles = makeStyles((theme) => ({
  hide: {
    display: "none",
  },
  container: {
    maxWidth: "1600px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
    },
  },
  personalInfo: {
    boxShadow: "0px 1px 0px #eaeef5",
    paddingTop: "24px",
    "& h6": {
      fontSize: "18px",
      color: "#090F1B",
    },
  },
  PricingBoxHeading: {
    width:"1024",
    marginLeft:"56px",
    marginRight:"50px",
    [theme.breakpoints.down(780)]: {
      marginLeft: "-7px",
      width: "100%"
    },
  },
  CalendarButton: {
    padding: "8px 16px",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        marginTop: "16px",
      },
  },
  ProCalendarButton: {
    display: "flex", 
    flexDirection: "row",
    [theme.breakpoints.down(430)]: {
    display: "flex", 
    flexDirection: "column",
    },
  },
  ExternaliCalsMain: {
    width: "100%", 
    backgroundColor: "#F8F9FC", 
    borderRadius: "8px", 
    display: "flex", 
    flexDirection: "row", 
    height: "50px",
    [theme.breakpoints.down(430)]: {
      width: "100%"
      },
  },
  ExternaliCalsImg: {
    marginTop: "5px", 
    height: "32px", 
    width: "32px"
  },
  logoDivTypoGraphy: {
    marginRight:"10px",
    marginLeft: "10px", 
    marginTop: "5px "
  },
  logoDivTypoGraphy2: {
    marginRight:"10px",
    marginLeft: "10px", 
    marginTop: "5px !important"
  },
  linkDiv: {
    marginTop: "0px", 
    display:"flex", 
    justifyContent:"space-between",
    width:"100%",
    [theme.breakpoints.down(321)]: {
      width: "65%"
      },
    
  },
  linkTypography: {
    marginLeft: "10px", 
    marginTop: "10px", 
    fontSize: "18px",

    "& .MuiTypography-root.MuiTypography-h6": {
      border: "2px solid",

    },
    
    // [theme.breakpoints.down(376) && theme.breakpoints.up(430)]: {
    //   width: "170px",
    //   marginTop: "0px",
    //   "& h6": {
    //     overflow: "hidden !important",
    //     textOverflow: "ellipsis !important",
    //     fontWeight: "500 !important",
    //     marginTop: "10px",
    //     height: "30px",
    //     fontSize: "13px"
    //   },
    //   },
      // [theme.breakpoints.down(375) && theme.breakpoints.up(321)]: {
      //   width: "150px",
      //   marginTop: "0px",
      //   "& h6": {
      //     overflow: "hidden !important",
      //     textOverflow: "ellipsis !important",
      //     fontWeight: "500 !important",
      //     marginTop: "10px",
      //     height: "30px",
      //     fontSize: "13px"
      //   },
      //   },

      //   [theme.breakpoints.down(320) && theme.breakpoints.up(0)]: {
      //     width: "100px",
      //     marginTop: "0px",
      //     "& h6": {
      //       overflow: "hidden !important",
      //       textOverflow: "ellipsis !important",
      //       fontWeight: "500 !important",
      //       marginTop: "10px",
      //       height: "30px",
      //       fontSize: "13px"
      //     },
      //     },
  },
  logoDiv: {
    backgroundColor: "#FFFFFF", 
    borderRadius: "4px", 
    display: "flex", 
    flexDirection: "row", 
    height: "90%",
    [theme.breakpoints.down(321)]: {
      width: "45%"
      },
  },
  ProCalendarButton2: {
    display: "flex", 
    flexDirection: "row",
  },
  spanclass: {
    marginLeft: "40px",
    [theme.breakpoints.down(780)]: {
      marginLeft: "10px",
    },
  },
  mobileBlock2: {
    display: "block",
    [theme.breakpoints.down(780)]: {
      display: "none",
    },
  },
  mobileBlock:{
    display: "block",
    [theme.breakpoints.down(1025)]: {
      display: "none",
    },
  },
  InsideButton: {
    padding: "8px 16px",
    borderRadius: "20px",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        marginTop: "16px",
      },
  },
  GuestReceptionHeading: {
    width:"1024",
    marginLeft:"56px",
    marginRight:"50px",
    [theme.breakpoints.down(780)]: {
      marginLeft: "4px",
      width: "100%"
    },
  },
  root: {
    flexGrow: 1,
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
  tabAppbar: {
    boxShadow: "none",
    background: "transparent",
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color: "#1A2232",
    },
    "& .MuiButtonBase-root": {
      [theme.breakpoints.down(425)]: {
        width: "50%",
      },
    },
  },
  photos: {
    borderBottom: "1px solid #EAEEF5",
    padding: "40px 0px",
  },
  pricing: {
    padding: "40px 0px",
    // border: "2px solid",
    height: "50px"
  },
  "& .MuiTypography-h6": {
    border: "2px solid"
  },
  ReservationRequest:{
    border: "1px solid #EAEEF5",
    borderRadius: "5px",
    height:"130px",
    marginBottom: "5px",
    [theme.breakpoints.down(780)]: {
      width: "100%",
      height:"auto",
    },
  },
  GuestReceptionDiv: {
    border: "1px solid #EAEEF5",
    borderRadius: "5px",
    marginBottom: "5px",
    [theme.breakpoints.down(780)]: {
      width: "100%",
      height:"auto",
    },
  },
  ReservationRequest2:{
    border: "1px solid #EAEEF5",
    borderRadius: "5px",
    height:"120px",
    marginBottom: "5px",
    [theme.breakpoints.down(780)]: {
      width: "100%",
      height:"auto",
    },
  },
  ReservationRequest3:{
    border: "1px solid #EAEEF5",
    borderRadius: "5px",
    height:"53px",
    marginBottom: "5px",
    [theme.breakpoints.down(780)]: {
      height:"100px",
    },
  },
  BookingPreference: {
    color: "gray",
    marginLeft: "10px",
    width: "180px",
    [theme.breakpoints.down(780)]: {
      width: "70%",
      height:"auto",
    },
  },
  WifiRow: {
    color: "#9AA7C1",
    marginLeft: "10px",
    width: "180px",
    [theme.breakpoints.down(780)]: {
      width: "70%",
      height:"auto",
    },
  },
  BookingPreference3: {
    color: "gray",
    marginLeft: "10px",
    width: "100px",
    [theme.breakpoints.down(780)]: {
      width: "50%",
      display: "inline-block"
    },
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    marginLeft: "30px",
    borderBottom: "1px solid #EAEEF5",
    height: "70px",
    width:" 800px",
    [theme.breakpoints.down(780)]: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    marginLeft: "10px",
    },
  },
  flexRowWithoutMarginBottom: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    marginLeft: "30px",
    width:" 800px",
    [theme.breakpoints.down(780)]: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    marginLeft: "10px",
    },
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    marginLeft: "30px",
    width:" 800px",
    [theme.breakpoints.down(780)]: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    marginLeft: "10px",
    },
  },
  ArrivingTime: {
    borderRight: "2px solid #EAEEF5",
    height: "30px",
    width: "170px",
    [theme.breakpoints.down(780)]: {
      width: "80%",
      borderRight: "none"
      },
  },
  flexRow3: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    marginLeft: "30px",
    borderBottom: "1px solid #EAEEF5",
    height: "50px",
    width:" 800px",
    [theme.breakpoints.down(780)]: {
      marginLeft: "10px",
      width: "90%"
      },
  },
  stayLength: {
    marginTop: "10px",
    marginLeft: "30px",
    borderBottom: "1px solid #EAEEF5",
    height: "70px",
    width:" 800px",
    [theme.breakpoints.down(780)]: {
      width: "90%",
      marginLeft: "10px",
      },
  },
  stayLength2: {
    marginTop: "10px",
    marginLeft: "30px",
    height: "70px",
    width:" 800px",
    [theme.breakpoints.down(780)]: {
      width: "90%",
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
  guestWifi: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    marginLeft: "30px",
    width:" 800px",
    [theme.breakpoints.down(780)]: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      height: "auto",
      marginLeft: "10px",
      },
  },
  flexRow2: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    marginLeft: "30px",
    height: "70px",
    width:" 800px",
    [theme.breakpoints.down(780)]: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      height: "auto",
      marginLeft: "10px",
      },
  },
  BasicFee: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    marginLeft: "30px",
    height: "40px",
    width:" 800px",
    [theme.breakpoints.down(780)]: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      height: "auto",
      marginLeft: "10px",
      },
  },
  cleaningfee: {
    borderRight: "2px solid #EAEEF5", 
    height: "30px", 
    width: "180px",
    [theme.breakpoints.down(780)]: {
      borderRight: "none",
      },
  },
  BookingPreference2: {
    marginLeft: "10px",
    width: "580px",
    [theme.breakpoints.down(780)]: {
    width: "100%",
    marginLeft: "10px",
    },
  },
  Rates1: {
    borderRight: "2px solid #EAEEF5", 
    height: "30px", 
    width: "180px",
    [theme.breakpoints.down(780)]: {
      borderRight: "none", 
      },
  },
  photosTitle: {
    fontWeight: 600,
    fontSize: "18px",
  },
  editTitle: {
    color: "#364259",
    fontSize: "14px",
  },
  editIcon: {
    "& img": {
      width: "13px",
      height: "13px",
    },
  },
  addressDetail: {
    "& p": {
      fontSize: "14px",
      fontWeight: "normal",
      color: "#5A6987",
      letterSpacing: "-0.01em",
      margin: "20px 0px 16px 0px",
    },
  },
  addressContents: {
    color: "#364259",
    fontSize: "14px",
    fontWeight: "normal",
    letterSpacing: "-0.01em",
  },
  infoIcon: {
    width: "15px",
    height: "15px",
    marginRight: "10px",
  },
  propDesc: {
    display: "flex",
    margin: "15px 0px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  guestDesc: {
    display: "flex",
    margin: "15px 0px",
    [theme.breakpoints.down("md")]: {
      flexFlow: "wrap",
    },
  },
  addTitle: {
    color: " #9AA7C1",
    fontSize: "12px",
    textTransform: "uppercase",
    fontWeight: 500,
  },
  seeAll: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  arrowDownIcon: {
    "& img": {
      width: "10px",
      height: "5px",
      marginLeft: "15px",
      transform: "rotate(180deg)",
    },
  },
  arrowUpIcon:{
    "& img":{

    width: "10px",
    height: "5px",
    marginLeft: "15px",
    transform: "rotate(0)",
    },
  },
  guestTitle: {
    fontSize: "14px",
    fontWeight: "normal",
    color: "#5A6987",
    letterSpacing: "-0.01em",
  },
  guestArea: {
    border: "1px solid #EAEEF5",
    borderRadius: "6px",
    padding: "11px 20px",
    margin: "10px 20px 10px 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0px 10px 0px",
    },
  },
  outdoorFeature: { 
    display: "flex",
    alignItems: "center",
    flexFlow: "wrap",
    paddingLeft: "20px"
  },
  outdoor: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0px",
  },
  outdoorTitle: {
    fontSize: "14px",
    letterSpacing: "-0.02em",
  },
  outdoorIcon: {
    overflow: "initial",
    "& img": {
      width: "30px",
      height: "40px",
      marginRight: "12px",
      objectFit: "contain",
    },
  },
  pitIcon: {
    "& img": {
      width: "15px",
      height: "23px",
      marginRight: "12px",
      objectFit: "contain",
    },
  },
  propertyType: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
    "& p": {
      margin: "10px 40px 0px 10px",
      position: "relative",
      "&:before": {
        content: "''",
        width: "4px",
        height: "4px",
        background: "#1DAF92",
        position: "absolute",
        top: "11px",
        left: " -12px",
        borderRadius: "30px",
      },
    },
  },
  expectation: {
    display: "flex",
    alignItems: "center",
    flexFlow: "wrap",
  },
  customList: {
    border: "1px solid #EAEEF5",
    borderRadius: "6px",
    padding: "3px 10px 3px 15px",
    margin: "10px 20px 10px 0px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0px 10px 0px",
    },
  },
  yesIcon: {
    "& img": {
      width: "24px",
      height: "24px",
    },
  },
  flexible: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#252E41",
    letterSpacing: "-0.02em",
  },
  policyDetail: {
    color: "#364259",
    fontSize: "14px",
    fontWeight: "normal",
    letterSpacing: "-0.01em",
    width: "100%",
    maxWidth: "515px",
  },
  policy: {
    padding: "40px 0px",
  },
  addressTip: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "baseline",
    },
  },
}));
