import { makeStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    navBtnWrapper: {
      display: "flex",
      justifyContent: "space-between",
      padding: "24px 35px",
      borderTop: "1px solid #EAEEF5",
      borderBottom: "1px solid #EAEEF5",
    },
    navBtnPrev: {
      fontFamily: "Inter Arial, sans-serif",
      fontStyle: "bold",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "32px",
      color: "#1A2232",
      "& svg": {
        width: "10px",
        height: "10px",
        color: "#5A6987",
      },
    },
    navBtnNext: {
      fontFamily: "Inter Arial, sans-serif",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "24px",
      textAlign: "center",
      // color: "#D7DDEA",
      justifyContent: "center",
      alignItems: "center",
      padding: "8px 8px 8px 16px",
      width: "102px",
      height: "40px",
      borderRadius: "24px",
      "& svg": {
        width: "10px",
        height: "10px",
        // color: "#D7DDEA",
      },
    },
    mobileDateWrapper: {},
    mobileGuestsWrapper: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      padding: "24px",
      "& li": {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "24px",
        // "&::marker": {
        //   display: "none",
        // },
        "& .MuiTypography-body1": {
          fontSize: "14px",
        },
        "& .MuiTypography-body2": {
          fontSize: "12px",
        },
        "& svg": {
          width: "16px",
          height: "16px",
        },
      },
    },
    mobileAmenitiesWrapper: {
      padding: "24px",
      "& li": { listStyleType: "none" },
      "& p": {
        fontSize: "14px",
        lineHeight: "24px",
        color: "#1A2232",
      },
    },
  })
);
