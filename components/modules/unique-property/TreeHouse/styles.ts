import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      padding: "75px 24px",
      [breakpoints.up("xl")]: {
        padding: "208px 0",
      },
      [breakpoints.down("md")]: {
        padding: "88px 24px",
      },
    },
    flexWrapper: {
      alignItems: "center",
      display: "flex",
      gap: "24px",
      justifyContent: "space-between",
      [breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
  }),
  { index: 1 }
);

export const useImageSectionStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    root: {
      padding: "208px 24px",
      [breakpoints.up("xl")]: {
        padding: "208px 0",
      },
      [breakpoints.down("md")]: {
        padding: "88px 24px",
      },
    },
    avatar: {
      width: "48px",
      height: "48px",
    },
    chip: {
      background: palette.primary.main,
      border: `2px solid ${palette.common.white}`,
      borderRadius: "12px",
      gap: "5.33px",
      height: "24px",
      width: "54px",
    },
    chipIcon: {
      color: palette.common.white,
      margin: "0",
      fontSize: "13px",
    },
    chipLabel: {
      color: palette.common.white,
      fontSize: "12px",
      fontWeight: 500,
      letterSpacing: "-0.016em",
      lineHeight: "24px",
      padding: 0,
    },
    flexWrapper: {
      alignItems: "center",
      display: "flex",
      gap: "24px",
      justifyContent: "space-between",
      [breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    image: {
      background: "url(/images/photoFrame.png)",
      borderRadius: "12px",
      height: "362px",
      width: "100%",
      position: "relative",
      [breakpoints.up("md")]: {
        maxWidth: "552px",
      },
      [breakpoints.down(1025)]: {
        maxWidth: "420px",
      },
      [breakpoints.between(768,1023)]: {
        maxWidth: "100%",
        marginBottom: "-150px"
      },
      
    },
    reviewWrapper: {
      background: palette.background.paper,
      position: "absolute",
      borderRadius: "12px",
      padding: "24px",
      height: "180px",
      right: "48px",
      bottom: "-128px",
      width: "264px",
      [breakpoints.down("sm")]: {
        left: 0,
        right: 0,
        margin: "auto",
      },
    },
    subTitle: {
      color: palette.common.white,
      margin: "14px 0 44px 0",
    },
    title: {
      color: palette.common.white,
      maxWidth: "652px",
    },
  }),
  { index: 1 }
);

export const useHeadingSectionStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      padding: "208px 24px",
      [breakpoints.up("xl")]: {
        padding: "208px 0",
      },
      [breakpoints.down("md")]: {
        padding: "88px 24px",
      },
    },
    avatar: {
      width: "48px",
      height: "48px",
    },
    subHeading: {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: "20px"
    },
    subHeadingInner: {
      display: "flex",
    },
    borderSpan: {
      borderRight: "3px solid #EAEEF5",
      transform: "rotate(\n90deg\n)",
      marginRight: "5px"
    },
    mainHeadingIcon: {
      margin: "12px"
    }
  }),
  { index: 1 }
);
