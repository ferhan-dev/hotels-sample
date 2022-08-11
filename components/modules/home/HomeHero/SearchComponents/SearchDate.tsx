import React from "react";
import { useSearchStyles } from "../styles";
import { Typography, Grid, Button } from "@material-ui/core";
import CalenderIcon from "src/components/elements/icons/Calender";
import clsx from "clsx";
import moment from "moment";
import { useSmallSize } from "src/hooks";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedDateRange } from "src/store/selectors/propertySelectors";
import { setSelectedDate } from "src/store/actions/propertyActions";
import { DateRange } from "@mui/lab/DateRangePicker";
import DateRangeCalender from "./DateRangePicker/index";

type Props = {
  inTopBar: boolean;
};

type DateCompProps = {
  inMobileView: boolean;
  inTopBar: boolean;
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchDate: React.FC<Props> = ({ inTopBar }) => {
  const isSmallSize = useSmallSize();
  const classes = useSearchStyles({ inTopBar, isSmallSize });
  const dateRange = useSelector(getSelectedDateRange);

  const [open, setOpen] = React.useState<boolean>(false);

  const startDate = new Date(dateRange.startDate);
  const endDate = new Date(dateRange.endDate);

  React.useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      setOpen(false);
    }
  }, [dateRange]);

  return (
    <div>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        className={clsx(classes.flexWrapper, classes.searchButtonContainer)}
        style={{
          width: "256px",
          //bottom: "-13px"
        }}
        component={Button}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {!inTopBar && (
          <Grid item className={classes.searchButtonIcon}>
            <CalenderIcon />
          </Grid>
        )}
        <Grid item className={inTopBar ? classes.headerSearchOptionText : ""}>
          <Typography variant="body1">Dates</Typography>
          {!inTopBar && (
            <Typography variant="body2" id="tata-start-date">
              {!dateRange?.startDate && !dateRange?.endDate && "Enter Dates"}
              {dateRange?.startDate && !dateRange?.endDate && moment(dateRange?.startDate).format("MM/DD/YYYY")}
              {dateRange?.startDate && dateRange?.endDate && `${moment(startDate).format("MM/DD/YYYY")}-${moment(endDate).format("MM/DD/YYYY")}`}
            </Typography>
          )}
        </Grid>
      </Grid>
      <DateRangeComp inMobileView={false} inTopBar={inTopBar} open={open} setOpen={setOpen} />
    </div>
  );
};

export default SearchDate;

export const DateRangeComp: React.FC<DateCompProps> = ({ inMobileView, inTopBar, open, setOpen }) => {
  // const isSmallSize = useSmallSize();
  const classes = useSearchStyles({ inTopBar: inTopBar, isSmallSize: inMobileView });
  const dispatch = useDispatch();

  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  const handleChange = (newValue: any) => {
    const dateRange = { startDate: newValue[0], endDate: newValue[1] };
    dispatch(setSelectedDate(dateRange));
    setValue(newValue);
  };

  return (
    <>
      <div>
        <DateRangeCalender value={value} onChange={handleChange} open={open} setOpen={setOpen} />
        {open && <Button className={classes.flexibleDateBtn}>Flexible Dates</Button>}
      </div>
    </>
  );
};
