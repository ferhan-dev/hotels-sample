import { makeStyles, Theme } from "@material-ui/core";
import { interFontFamily } from "src/components/foundation/typography";
import { AppTypographyVariant } from "src/types/typography";

export const useStyles = makeStyles<Theme, {}, AppTypographyVariant>(
  () => ({
    action: {
      fontFamily: interFontFamily,
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "-0.02em",
    },
    body: {
      fontFamily: interFontFamily,
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "-0.01em",
    },
    body14: {
      fontFamily: interFontFamily,
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "-0.016em",
    },
    caption: {
      fontFamily: interFontFamily,
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "normal",
    },
    displayMedium: {
      fontFamily: interFontFamily,
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "-0.03em",
    },
    displaySmall: {
      fontFamily: interFontFamily,
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "32px",
      letterSpacing: "-0.02em",
    },
    displayLarge: {
      fontFamily: interFontFamily,
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "40px",
      letterSpacing: "-0.03em",
    },
    displayXLarge: {
      fontFamily: interFontFamily,
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: "48px",
      letterSpacing: "-0.04em",
    },
    heading: {
      fontFamily: interFontFamily,
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "-0.02em",
    },
    subHeading: {
      fontFamily: interFontFamily,
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.04em",
    },
    smallCaption: {
      fontFamily: interFontFamily,
      fontWeight: 500,
      fontSize: "10px",
      lineHeight: "16px",
      letterSpacing: "-0.04em",
    },
  }),
  { index: 1 }
);
