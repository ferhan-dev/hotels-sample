import { PaletteOptions } from "@material-ui/core/styles/createPalette";

export const neutralColor = {
  "0": "#FFFFFF",
  "100": "#F8F9FC",
  "200": "#EAEEF5",
  "300": "#D7DDEA",
  "400": "#9AA7C1",
  "500": "#5A6987",
  "600": "#364259",
  "700": "#252E41",
  "800": "#1A2232",
  "900": "#090F1B",
};

export const meadowColor = {
  main: "#1DAF92",
  dark: "#1D8671",
  light: "#F0F9F6",
  "900": "#186253", // Darker
  "100": "#F0F9F6", // Lighter
  contrastText: neutralColor[0],
};

export const palette: PaletteOptions = {
  action: {
    active: neutralColor[500],
  },
  common: {
    white: neutralColor[0],
  },
  divider: neutralColor[200],
  error: {
    // Red Color
    main: "#F12237",
    dark: "#DD0E23",
    light: "#FAD1D5",
    "900": "#B60C1D", // Darker
    "100": "#FDEDEF", // Lighter
  },
  grey: neutralColor,
  info: {
    // Blue Color
    main: "#4789EB",
    dark: "#2C73DD",
    light: "#D3E2F8",
    "900": "#2461BC", // Darker
    "100": "#EEF3FC", // Lighter
  },
  primary: meadowColor,
  secondary: {
    main: "#19857b",
    contrastText: neutralColor[0],
  },
  text: {
    primary: "#1A2232",
    secondary: "#5A6987",
    disabled: "#9AA7C1",
    hint: "#9AA7C1",
  },
  warning: {
    // Orange Color
    main: "#F29D2D",
    dark: "#DC8718",
    light: "#FAE8D1",
    "900": "#B47018", // Darker
    "100": "#FDF6ED", // Lighter
  },
};
