import { makeStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core";
export const useStylesSteps = makeStyles((theme: Theme) => ({
  container: {
    maxWidth: "1600px",
  },
  root: {
    flexGrow: 1,
    width: "100%",
  },
  personalInfo: {
    boxShadow: "0px 1px 0px #eaeef5",
    margin: "0px -24px 0px -24px",
    "& h6": {
      fontSize: "18px",
      color: "#090F1B",
    },
  },
  connectionSect: {
    paddingBottom: "25px",
    [theme.breakpoints.down(660)]: {
      display: "block",
    },
  },
  buttonSave: {
    background: "#1DAF92",
    borderRadius: "6px",
    color: "#fff",
    padding: "8px",
  },
  leftArrow: {
    width: "12px",
    height: "12px",
    marginRight: "30px",
    marginLeft: "40px",
    [theme.breakpoints.down(425)]: {
      marginLeft: "10px",
    },
  },
  tabContain: {
    display: "flex",
    marginTop: "-24px",
    height: "80vh",
    [theme.breakpoints.down(767)]: {
      display: "block",
    },
  },
  tabs: {
    margin: "25px 0px 0px 30px",
    "& button": {
      minWidth: "125px",
    },
  },
  addPayment: {
    border: "1px solid #EAEEF5",
    borderRadius: "12px",
    width: "264px",
    padding: "38px 0px 32px 0px",
    textAlign: "center",
    [theme.breakpoints.down(992)]: {
      marginTop: "20px",
    },
    [theme.breakpoints.down(425)]: {
      width: "initial",
    },
    "& h6": {
      fontSize: "16px !important",
    },
  },
  containMobile: {
    [theme.breakpoints.down(425)]: {
      padding: "0",
    },
  },
  addCard: {
    background: "#090F1B",
    borderRadius: "12px",
    color: "#fff",
    position: "relative",
    width: "264px",
    marginRight: "24px",
    [theme.breakpoints.down(425)]: {
      width: "initial",
      marginRight: "0px",
    },
  },
  addCardMain: {
    [theme.breakpoints.down(992)]: {
      display: "block",
    },
  },
  tabMobile: {
    [theme.breakpoints.down(767)]: {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
  masterCard: {
    "& img": {
      width: "24px",
      height: "14px",
    },
  },
  cardContain: {
    padding: "20px",
    "& h6": {
      fontWeight: 500,
      fontSize: "14px",
    },
  },
  cardBg: {
    position: "absolute",
    right: "0px",
    bottom: "0px",
    width: "85px",
    height: "108px",
    overflow: "inherit",
  },
  addIcon: {
    margin: "0px auto 30px auto",
    width: "20px",
    height: "20px",
  },
  taboneDetail: {
    marginTop: "35px",
    marginRight: "10px",
  },
  taboneTitle: {
    fontWeight: 600,
    fontSize: "18px",
    marginBottom: "10px",
  },
  tabonePara: {
    color: "#5A6987",
    fontSize: "14px",
    fontWeight: "normal",
    width: "100%",
    maxWidth: "350px",
    marginBottom: "24px",
  },
  tabTwoDetail: {
    boxShadow: "-1px 0px 0px #eaeef5",
    padding: "0px 0px 0px 40px",
    [theme.breakpoints.down(767)]: {
      boxShadow: "none",
      padding: "0px",
    },
  },
  paymentIcon: {
    margin: "35px 0px 20px 0px",
    "& img": {
      width: "18px",
      height: "22px",
    },
  },
  addModal: {
    position: "absolute",
    width: 552,
    backgroundColor: " #fff",
    borderRadius: "12px",
    boxShadow: theme.shadows[5],
    padding: "25px",
    top: " 50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down(600)]: {
      width: "90%",
      padding: "20px 15px",
    },
    "&:focus": {
      border: "0",
      outline: "none",
      boxShadow: "0",
    },
  },
  cardIcons: {
    position: "absolute",
    left: "0px",
    top: "17px",
    zIndex: 2,
    "& img": {
      width: "15px",
      height: "13px",
    },
  },
  btnCancle: {
    border: " 1px solid #EAEEF5",
    borderRadius: "6px",
    width: "50%",
    color: "#364259",
    padding: "8px",
    margin: "20px 16px 0px 0px",
  },
  btnSave: {
    background: " #1DAF92",
    borderRadius: "6px",
    width: "50%",
    padding: "8px",
    color: "#fff",
    marginTop: "20px",
    "&:hover": {
      background: " #1DAF92",
      color: "#fff",
    },
  },
  modalHead: {
    borderBottom: "1px solid #EAEEF5",
    paddingBottom: "20px",
    "& h6": {
      fontWeight: 600,
      fontSize: "18px",
      color: "#090F1B",
    },
    "& img": {
      height: "10px",
      width: "10px",
    },
  },
  method: {
    fontWeight: 600,
    fontSize: "14px",
    marginTop: "25px",
    "& h6": {
      fontWeight: 600,
      fontSize: "14px",
      margin: " 25px 0px 5px 0px",
    },
  },
  methodInput: {
    border: "1px solid #EAEEF5",
    borderRadius: "6px",
    width: "100%",
    padding: "12px 10px",
    marginTop: "16px",
    "&::placeholder": {
      color: "#9AA7C1",
      fontSize: "14px",
    },
  },
  formDate: {
    position: "relative",
    "& p": {
      fontSize: "14px",
      color: "#9AA7C1",
    },
  },
  titleDate: {
    position: "absolute",
    right: "55px",
    top: "23px",
  },
  titleCvv: {
    position: "absolute",
    right: "15px",
    top: "23px",
  },
  inputCard: {
    "&::placeholder": {
      color: "#252E41",
    },
  },
  paymentPara: {
    color: "#5A6987",
    fontSize: "14px",
    width: "100%",
    maxWidth: "550px",
    fontWeight: "normal",
  },
  paymentTitles: {
    "& h6": {
      fontSize: "16px",
      marginTop: "24px",
      fontWeight: 500,
      letterSpacing: "0.5px",
    },
  },
  btnaddPayment: {
    background: " #1DAF92",
    borderRadius: "6px",
    color: "#fff",
    width: "264px",
    padding: "8px",
    marginTop: "24px",
    "&:hover": {
      background: " #1DAF92",
      color: "#fff",
    },
  },
  faqIcon: {
    "& img": {
      height: "20px",
      width: "20px",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionData: {
    "& .MuiAccordion-root": {
      boxShadow: "none",
      background: "transparent",
    },
    "& .MuiAccordionSummary-content": {
      "& p": {
        fontSize: "14px",
      },
    },
    "& .MuiAccordionDetails-root": {
      "& p": {
        fontSize: "14px",
        color: "#5A6987",
        fontWeight: "normal",
      },
    },
    "& .MuiAccordionSummary-expandIcon": {
      color: "#1DAF92",
    },
  },
  textField: {
    marginBottom: "24px",
    "& .MuiTextField-root": {
      width: "100%",
      border: "1px solid #EAEEF5",
      borderRadius: "6px",
      padding: "5px 15px 5px 35px",
      "& .MuiInput-underline": {
        color: " #252E41",
        fontSize: "14px",
        fontWeight: "normal",
        "&:before": {
          borderBottom: "none",
        },
      },
    },
  },
  listForm: {
    paddingLeft: "45px",
    "& .MuiListItemText-root": {
      margin: "0px",
      "&:before": {
        content: "''",
        width: "6px",
        height: "6px",
        background: "#5B6885",
        position: "absolute",
        borderRadius: "30px",
        top: "11px",
        left: "0",
      },
      "& span": {
        fontSize: "14px",
        color: " #5A6987",
        fontWeight: "normal",
      },
    },
    "& .MuiListItem-root": {
      padding: "0px 16px",
    },
  },
  formListLabel: {
    "& span": {
      fontSize: "14px",
    },
  },
  btnBack: {
    border: "1px solid #EAEEF5",
    borderRadius: "6px",
    color: " #364259",
    height: "40px",
    marginRight: "16px",
    [theme.breakpoints.down(660)]: {
      width: "30%",
      marginTop: "20px",
    },
  },
  btnNext: {
    background: " #1DAF92",
    borderRadius: "6px",
    color: "#fff",
    padding: "8px 48px",
    [theme.breakpoints.down(660)]: {
      width: "60%",
      marginTop: "20px",
    },
    "&:hover": {
      background: " #1DAF92",
      color: "#fff",
    },
  },
  stepTitle: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "24px",
  },
  accountTitle: {
    "& p": {
      fontSize: "14px",
      marginTop: "16px",
    },
    "& input": {
      border: "1px solid #EAEEF5",
      borderRadius: "6px",
      fontSize: "14px",
      width: "100%",
      padding: "11px 8px",
      "&::placeholder": {
        color: " #9AA7C1",
      },
    },
  },
  stepPara: {
    fontSize: "14px",
    color: " #5A6987",
    fontWeight: 400,
    width: "100%",
    maxWidth: "540px",
    marginTop: "-15px",
  },
  cityInput: {
    "& .MuiBox-root": {
      width: "50%",
      [theme.breakpoints.down(576)]: {
        paddingRight: "15px !important",
      },
    },
  },
  regionInput: {
    position: "relative",
    "& input": {
      paddingLeft: "40px",
    },
  },
  lockIcon: {
    position: "absolute",
    top: "26px",
    left: "5px",
    "& img": {
      width: "15px",
      height: "18px",
    },
  },
  confirmAccount: {
    "& input": {
      border: 0,
      boxShadow: "0px 1px 0px #eaeef5",
      padding: "0 0 16px 0",
      background: "#fafafa",
      textOverflow: "ellipsis",
      "&::placeholder": {
        color: "#5A6987",
        fontSize: "14px",
      },
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
}));
