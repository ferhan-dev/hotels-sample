import { InputBase, withStyles } from "@material-ui/core";
import { interFontFamily } from "src/components/foundation/typography";

const EnhancedInput = withStyles(({ palette, shape }) => ({
  root: {
    "label + &": {
      marginTop: 4,
    },
  },
  input: {
    borderRadius: shape.borderRadius,
    backgroundColor: palette.common.white,
    border: `1px solid ${palette.divider}`,
    fontSize: "14px",
    padding: "12px 20px",
    fontFamily: interFontFamily,
    "&:focus": {
      borderWidth: "1.5px",
    },
    '&[aria-invalid="true"]': {
      borderColor: `${palette.error.main}`,
    },
    '&:focus[aria-invalid="false"]': {
      borderColor: `${palette.primary.main}`,
    },
  },
}))(InputBase);

export default EnhancedInput;
