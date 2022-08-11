import { createTheme } from "@material-ui/core/styles";

import { breakpoints } from "./breakpoints";
import { meadowColor, palette } from "./palette";
import { props } from "./props";
import { eudoxusSans, inter, typography } from "./typography";

export const theme = createTheme({
  breakpoints,
  palette,
  props,
  typography,
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [inter, eudoxusSans],
      },
    },
    MuiButton: {
      root: {
        padding: "12px 24px",
        "&$disabled": {
          background: `${palette.grey?.[100]} !important`,
          color: `${palette.grey?.[300]} !important`,
        },
      },
      outlined: {
        border: `1px solid ${palette.divider}`,
        padding: undefined,
      },
      sizeSmall: {
        padding: "4px 16px",
      },
    },
    MuiSvgIcon: {
      colorAction: {
        color: palette.text?.secondary,
      },
    },
    MuiChip: {
      root: {
        borderRadius: "48px",
        height: "24px",
      },
      outlinedPrimary: {
        border: "none",
        background: `${meadowColor.light} !important`,
        color: meadowColor.dark,
      },
    },
  },
  shape: {
    borderRadius: 6,
  },
});
