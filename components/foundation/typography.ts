import Inter from "./fonts/Inter-Regular.ttf";
import EudoxusSans from "./fonts/EudoxusSans.ttf";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

const commonFontFace = {
  fontStyle: "normal",
  fontDisplay: "swap" as const,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};
export const inter = {
  ...commonFontFace,
  fontFamily: "Inter",
  fontWeight: 600,
  src: `
    local('Inter'),
    local('Inter'),
    url(${Inter}) format('ttf')
  `,
};

export const eudoxusSans = {
  ...commonFontFace,
  fontFamily: "Inter",
  fontWeight: 600,
  src: `
    local('EudoxusSans'),
    local('EudoxusSans'),
    url(${EudoxusSans}) format('ttf')
  `,
};

export const eudoxusSansFontFamily = "EudoxusSans, Arial, sans-serif";
export const interFontFamily = "Inter, Arial, sans-serif";

const size14Style: CSSProperties = {
  fontFamily: interFontFamily,
  fontSize: "14px",
  lineHeight: "24px",
  textTransform: "none",
  letterSpacing: "-0.016em",
};

const size12Style: CSSProperties = {
  fontFamily: interFontFamily,
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "16px",
  textTransform: "none",
  letterSpacing: "-0.016em",
};

export const typography: TypographyOptions = {
  h1: {
    fontFamily: eudoxusSansFontFamily,
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "48px",
    letterSpacing: "-0.028em",
  },
  h2: {
    fontFamily: eudoxusSansFontFamily,
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "40px",
    letterSpacing: "-0.028em",
  },
  h3: {
    fontFamily: eudoxusSansFontFamily,
    fontSize: "28px",
    fontWeight: 700,
    lineHeight: "40px",
    letterSpacing: "-0.028em",
  },
  h4: {
    fontFamily: eudoxusSansFontFamily,
  },
  h5: {
    fontFamily: eudoxusSansFontFamily,
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "32px",
    letterSpacing: "-0.02em",
  },
  h6: {
    fontFamily: eudoxusSansFontFamily,
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.028em",
  },
  body1: {
    // Body 16
    fontFamily: interFontFamily,
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "28px",
    letterSpacing: "-0.016em",
  },
  body2: {
    // Body 14
    ...size14Style,
    fontWeight: 400,
  },
  button: {
    // Additional / SubHeading 14
    ...size14Style,
    fontWeight: 500,
  },
  caption: {
    // Additional 12
    ...size12Style,
    fontWeight: 500,
  },
  subtitle1: {
    // Additional 16
    fontFamily: eudoxusSansFontFamily,
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.016em",
  },
  subtitle2: {},
};
