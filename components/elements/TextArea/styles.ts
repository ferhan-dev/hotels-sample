import { makeStyles } from "@material-ui/core";
import { interFontFamily } from "src/components/foundation/typography";

export const useStyles = makeStyles(
  ({ palette, shape }) => ({
    count: {
      bottom: "12px",
      position: "absolute",
      right: "20px",
    },
    flexWrapper: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
    },
    textarea: {
      border: `1px solid ${palette.divider}`,
      borderRadius: shape.borderRadius,
      fontSize: "14px",
      fontFamily: interFontFamily,
      marginTop: "4px",
      minHeight: "132px",
      padding: "12px 20px",
      outline: "none",
      resize: "none",
      "&:focus": {
        borderWidth: `1.5px`,
      },
      '&[aria-invalid="true"]': {
        borderColor: `${palette.error.main}`,
      },
      '&:focus[aria-invalid="false"]': {
        borderColor: `${palette.primary.main}`,
      },
      "&::placeholder": {
        color: palette.grey[400],
      },
    },
  }),
  { index: 1 }
);
