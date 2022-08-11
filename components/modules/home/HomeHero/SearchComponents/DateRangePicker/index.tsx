import * as React from "react";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { useStyles } from "./styles";
import { useSmallSize } from "src/hooks";
// import useOnclickOutside from "react-cool-onclickoutside";

export default function DateRangeCalender({ value, onChange, open }: any) {
  const isSmallSize = useSmallSize();
  const classes = useStyles();

  // const ref = useOnclickOutside(() => {
  //   setOpen && open && setOpen(false);
  //   console.log("outside");
  // });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box>
        <DateRangePicker
          startText="Start"
          endText="End"
          value={value}
          disablePast={true}
          onChange={onChange}
          open={open}
          disableHighlightToday={true}
          className={classes.dateRangeWrapper}
          calendars={isSmallSize ? 1 : 2}
          renderInput={() => <React.Fragment></React.Fragment>}
          // ref={ref}
        />
      </Box>
    </LocalizationProvider>
  );
}
