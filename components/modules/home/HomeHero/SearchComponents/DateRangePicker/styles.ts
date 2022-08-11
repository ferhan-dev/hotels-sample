import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  () => ({
    dateRangeWrapper: {
      padding: "24px 30px 24px 24px",
      "& .css-1f2kitb-MuiDateRangePickerDay-root": { backgroundColor: "transparent !important" },
      "& .MuiDateRangePickerDay-rangeIntervalDayHighlightStart, .MuiDateRangePickerDay-rangeIntervalDayHighlightEnd": {
        background: "transparent",
      },
      "& .Mui-selected": {
        backgroundColor: "#1DAF92 !important",
        borderRadius: "50%",
        "&:hover": {
          backgroundColor: "#1DAF92",
          opacity: 0.6,
        },
      },
      "& .MuiDateRangePickerDay-dayInsideRangeInterval": {
        backgroundColor: "#F0F9F6",
        color: "#1DAF92",
      },
      "& button": {
        fontWeight: 500,
        fontSize: "14px",
        fontFamily: "Inter, Arial, sans-serif",
      },
      "& .css-vql532": { border: "none !important" },
    },
  }),
  { index: 1 }
);
