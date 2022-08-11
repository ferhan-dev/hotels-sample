import React from "react";
import { Typography, Grid, Button, Box } from "@material-ui/core";
import CalenderIcon from "src/components/elements/icons/Calender";
import clsx from "clsx";
import moment from "moment";
import { useSmallSize } from "src/hooks";
import { makeStyles } from "@material-ui/core";
import { interFontFamily } from "src/components/foundation/typography";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedDateRange } from "src/store/selectors/propertySelectors";
import { setSelectedDate } from "src/store/actions/propertyActions";
import BasicDateRangePicker from "src/components/elements/DateRangePicker";
import { DateRange } from "@mui/lab/DateRangePicker";

interface Props {
    inTopBar: boolean;
    isSmallSize: boolean;
  }

type DateCompProps = {
  inMobileView: boolean;
  inTopBar: boolean;
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};


export const useSearchStyles = makeStyles(
    ({ palette, breakpoints }) => ({
      flexWrapper: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        "& input": {
          width: "100%",
          border: "none",
          fontSize: "14px",
          // "&::-webkit-input-placeholder": {
          //   color: "#252E41",
          //   fontWeight: 500,
          // },
          "&::placeholder": {
            color: "#252E41",
            fontWeight: 500,
            opacity: 1,
          },
          "&:focus": {
            border: "none",
            outline: "none",
          },
        },
        "& .MuiFormControl-marginNormal": {
          marginTop: 0,
          marginBottom: 0,
          "& .MuiInput-underline": {
            "&:before": {
              border: "none",
            },
          },
        },
        [breakpoints.down("sm")]: {
          width: "100%",
          justifyContent: "space-between",
          marginBottom: "8px",
        },
      },
      inputAutoComplete: ({ inTopBar }: Props) => ({
        width: "100%",
        height: "auto",
        display: "flex",
        padding: inTopBar ? "0px 16px" : "8px 16px",
        // padding: `${inTopBar ? 0 : "8px"} "16px"`,
        maxWidth: inTopBar ? "116px" : "27%",
        alignItems: "center",
        flexDirection: "row",
        flex: `0 0 ${inTopBar ? "116px" : "27%"} !important`,
        // width: "100%",
        "& div": {
          width: "100%",
        },
        "&::placeholder": {
          fontFamily: "Inter, Arial, sans-serif",
          fontWeight: 500,
          fontSize: "14px",
          color: "#364259",
        },
      }),
      locationIcon: {
        marginRight: "15px",
        [breakpoints.down("sm")]: {
          margin: "14px 15px 14px 0",
        },
      },
      root: {
        alignItems: "center",
        background: palette.background.paper,
        borderRadius: "12px",
        display: "flex",
        boxShadow: "0px 32px 96px -36px rgba(26, 34, 50, 0.08)",
        height: "96px",
        width: "100%",
        padding: "0 24px 0 39px",
        [breakpoints.down(870)]: {
          padding: "12px",
        },
        [breakpoints.down("sm")]: {
          alignItems: "flex-start",
          flexDirection: "column",
          minHeight: "256px",
        },
        paddingLeft: "40px",
        paddingRight: "25px",
      },
      searchPrimaryBtn: {
        marginLeft: "auto",
        padding: "12px 50px",
        [breakpoints.down(870)]: {
          padding: "12px 20px",
        },
        [breakpoints.down("sm")]: {
          width: "100%",
          marginTop: "16px",
        },
      },
      searchSecondaryBtn: {
        padding: "24px",
        "& .MuiButton-startIcon": {
          marginRight: "16px",
        },
        [breakpoints.down("lg")]: {
          padding: "12px",
        },
        [breakpoints.down("md")]: {
          padding: "6px",
        },
      },
      autoComplete: {},
      searchLocationInput: {
        border: "none",
        color: palette.action.active,
        fontFamily: interFontFamily,
        fontSize: "15px",
        letterSpacing: "-0.016em",
        lineHeight: "14px",
        outline: "none",
        minWidth: "240px",
        textAlign: "center",
      },
      buttonGroupContainer: {
        display: "flex",
        // flexDirection: "column",
        alignItems: "center",
        "& p": {
          margin: "0 25px",
        },
        "& > *": {
          // margin: theme.spacing(1),
        },
        "& .MuiButtonGroup-root": {
          borderRadius: "6px",
          border: "1px solid #EAEEF5",
          "& .MuiButton-outlined": {
            border: "none",
          },
        },
      },
  
      menuWrapper: {
        "& .MuiPaper-elevation0": {},
  
        "& .MuiPopover-paper": {
          minWidth: "384px",
          padding: "0 20px",
          background: "#FFFFFF",
          marginTop: "15px !important",
          boxShadow: "0px 48px 80px -48px rgba(49, 50, 94, 0.12), 0px 64px 132px -32px rgba(49, 50, 94, 0.08)",
          borderRadius: "16px",
          marginLeft: "-18px",
          "& ul": {
            paddingTop: 0,
            paddingBottom: 0,
          },
          "& li": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "18px 0",
            "& .MuiTypography-body1": { color: "#1A2232", fontSize: "14px" },
            "& .MuiTypography-body2": { color: "#5A6987", fontSize: "12px" },
          },
        },
  
        "& .MuiPaper-root": {
          maxHeight: "100%",
          overflowY: "inherit",
          marginTop: "25px",
          "& ul": {
            "& li": {
              "& span": {
                color: "#1A2232",
                textTransform: "capitalize",
              },
            },
          },
        },
      },
      centerMenuButton: {
        borderLeft: "none",
        borderRight: "none",
      },
      lastMenuButton: {
        borderLeft: "none",
      },
      button: {
        padding: "12px 61.5px",
        display: "block",
        width: "100%",
        color: "white",
        [breakpoints.down("xs")]: {
          width: "100%",
        },
  
        "& span": {
          color: "white !important",
        },
      },
      dateIcons: {
        height: "auto",
        width: "20px",
        margin: "0 10px 0 0",
      },
      paper: {
        // color: "#5A6987",
        padding: "5px 8px",
        textAlign: "center",
        margin: "0 4px",
        background: "transparent",
        boxShadow: "none",
        color: palette.text.secondary,
      },
      guestNumberText: {
        margin: "auto 0",
        textAlign: "center",
      },
      searchButtonContainer: ({ inTopBar }: Props) => ({
        width: "100% !important",
        height: "auto",
        margin: "0px 8px",
        display: "flex",
        padding: inTopBar ? "0px 0px" : "8px 16px",
        flexGrow: 0,
        // background: "#FFFFFF",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-start",
        textAlign: "left",
      }),
  
      searchMenuContainer: {
        maxWidth: "1128px",
        height: "80px",
        display: "flex",
        padding: "8px",
        position: "absolute",
        background: "#FFFFFF",
        boxShadow: "0px 32px 96px -36px rgba(26, 34, 50, 0.08)",
        alignItems: "center",
        borderRadius: "44px",
        flexDirection: "row",
        width: "100%",
      },
      searchButtonIcon: {
        width: "14px",
        height: "14px",
        marginRight: "21px",
        color: "#5A6987",
      },
      searchButtonStyle: ({ inTopBar }: Props) => ({
        width: !inTopBar ? "64px !important" : "auto",
        borderRadius: !inTopBar ? "50%" : 0,
        height: !inTopBar ? "64px" : "auto",
        padding: !inTopBar ? "24.5px" : 0,
        ...(inTopBar && { background: "transparent" }),
        // background: inTopBar ? "transparent" : "#FFF",
        "&:hover": {
          ...(inTopBar && { background: "transparent" }),
          // background: !inTopBar ? "transparent" : "#5A6987",
        },
      }),
      guestMenuContainer: {
        padding: "8px 0px",
        width: "384px",
        height: "304px",
        // right: "268px",
        // top: "520px",
        background: "#FFFFFF",
        boxShadow: "0px 48px 80px -48px rgba(49, 50, 94, 0.12), 0px 64px 132px -32px rgba(49, 50, 94, 0.08)",
        borderRadius: "16px",
      },
      dateMenuWrapper: ({ isSmallSize }: Props) => ({
        position: "relative",
        textAlign: "center",
        // minWidth: "630px",
        padding: "0 0",
        "& .DateInput": { display: "none" },
        "& .DateRangePickerInput_arrow": { display: "none" },
        "& .DayPicker__withBorder": { boxShadow: "none" },
        "& .CalendarDay__default": {
          border: "none",
          // height: "49px !important",
          // width: "49px !important",
          "&:hover": { border: "none" },
        },
        "& .CalendarDay__selected": {
          border: "none",
          borderRadius: "40px",
          background: "#1DAF92",
        },
        "& .CalendarDay__selected_span": {
          border: "none",
          background: "#F0F9F6",
          color: "#1D8671",
        },
        "& .DayPickerNavigation_button__default": {
          border: "none",
        },
        "& .DayPickerKeyboardShortcuts_buttonReset": {
          display: "none",
        },
        "& .DateRangePicker_picker": {
          top: "25px !important",
          ...(isSmallSize && { left: "50% !important" }),
          ...(!isSmallSize && { left: "-239px !important" }),
          overflow: "hidden",
          borderRadius: "16px",
          boxShadow: !isSmallSize ? "0px 48px 80px -48px rgba(49, 50, 94, 0.12), 0px 64px 132px -32px rgba(49, 50, 94, 0.08)" : "none",
          paddingBottom: "50px",
          ...(isSmallSize && { transform: "translateX(-50%)" }),
          ...(isSmallSize && { background: "transparent" }),
        },
        "& .DayPicker__horizontal": {
          ...(isSmallSize && { background: "transparent" }),
        },
        "& .CalendarMonth": { ...(isSmallSize && { background: "transparent" }) },
        "& td": { ...(isSmallSize && { background: "transparent" }), height: "45px", width: "45px" },
        "& .CalendarMonth_caption": {
          fontWeight: 500,
          fontSize: "14px",
        },
        "& .DayPickerNavigation": {
          display: "flex",
          justifyContent: "space-between",
          bottom: "-22px",
          padding: "0 18px",
        },
        "& .DayPickerNavigation_button": {
          "& svg": {
            width: "15px",
            color: "#5A6987",
          },
        },
        "& .CalendarMonthGrid": {
          background: "transparent",
        },
        "& .CalendarMonthGrid__horizontal": {
          left: "0px !important",
        },
        "& .CalendarDay__hovered_span": {
          background: "#F0F9F6",
          "&:hover": { background: "#F0F9F6" },
        },
      }),
      dateMenuContainer: {
        padding: "25px 25px 90px 25px !important",
        position: "absolute",
        background: "#FFFFFF",
        boxShadow: "0px 48px 80px -48px rgba(49, 50, 94, 0.12), 0px 64px 132px -32px rgba(49, 50, 94, 0.08)",
        borderRadius: "16px",
        "& .MuiPaper-elevation5": {
          boxShadow: "none",
        },
      },
      flexibleDateBtn: ({ isSmallSize, inTopBar }: Props) => ({
        // left: "-105px !important",
        width: "95%",
        border: "1px solid #EAEEF5",
        height: "40px",
        ...(!isSmallSize && { margin: "0 auto" }),
        zIndex: 2000,
        position: "absolute",
        minWidth: "550px",
        maxWidth: "550px",
        textAlign: "center",
        borderRadius: "24px",
        // left: "0",
        right: "0",
        display: "block",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "24px",
        color: "#364259",
        ...(!isSmallSize && !inTopBar && { top: "465px !important" }),
        ...(!isSmallSize && !inTopBar && { left: "-254px !important" }),
        ...(!isSmallSize && inTopBar && { left: "-172px !important", top: "425px !important" }),
  
        ...(isSmallSize && {
          top: "auto !important",
          left: "0px !important",
          position: "fixed",
          bottom: 0,
          margin: "auto auto 24px auto",
          border: "1px solid #EAEEF5",
          boxSizing: "border-box",
          borderRadius: "24px",
          maxWidth: "327px",
          minWidth: "327px",
          width: "100%",
        }),
      }),
      guestsOptionButtonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
        // position: "static",
        width: "104px",
        height: "32px",
        // left: "260px",
        // top: "20px",
        background: "#FFFFFF",
        borderRadius: "32px",
        flex: "none",
        order: 1,
        flexGrow: 0,
        margin: "0px 16px",
      },
      guestOptionButton: {
        width: "24px",
        height: "24px",
        // left: "4px",
        // top: "4px",
        background: "#FFFFFF",
        borderRadius: "4px",
        flex: "none",
        // order: 0,
        flexGrow: 0,
        margin: "0px 4px",
      },
      guestsOptionTextContainer: {
        position: "static",
        width: "224px",
        height: "24px",
        left: "0px",
        top: "0px",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "24px",
        letterSpacing: "-0.016em",
        color: "#1A2232",
        flex: "none",
        order: 0,
        alignSelf: "stretch",
        flexGrow: 0,
        margin: "8px 0px",
      },
      moreFilterContainer: {
        minWidth: "384px",
        minHeight: "384px",
        justifyContents: "space-between",
        "& .MuiGrid-container": {
          margin: "12px 20px",
          width: "100%",
          maxWidth: "361px",
          justifyContent: "space-between",
          "& .MuiGrid-container": {
            margin: 0,
            padding: 0,
            "& .MuiGrid-item": {
              "& .MuiTypography-body1": {
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "24px",
              },
              "& .MuiTypography-body2": {
                fontSize: "12px",
                lineHeight: "16px",
              },
            },
          },
          "& .MuiGrid-grid-xs-8": {
            justifyContent: "flex-start",
            maxWidth: "224px",
          },
          "& .MuiGrid-grid-xs-4": {
            justifyContent: "flex-end",
            maxWidth: "104px",
          },
        },
      },
      searchMenuButtonContainer: ({ inTopBar }: Props) => ({
        ...(inTopBar && { flex: "0 0 100px" }),
        ...(inTopBar && { maxWidth: "100px" }),
        width: "100%",
        // flex: `0 0 ${inTopBar ? "116x" : "20%"} !important`,
        // maxWidth: inTopBar ? "116px" : "20%",
        // width: "100%",
      }),
      amenitiesMenu: {
        "& .MuiPopover-paper": {
          maxWidth: "1130px",
          margin: "15px auto !important",
          left: "-15px !important",
          right: "0 !important",
          borderRadius: "16px",
          boxShadow: "0px 48px 80px -48px rgba(49, 50, 94, 0.12), 0px 64px 132px -32px rgba(49, 50, 94, 0.08)",
        },
        "& ul": {
          display: "flex",
          flexWrap: "wrap",
          margin: "0 15px",
          "& li": {
            flex: "0 0 33.33%",
            maxWidth: "33.33%",
            width: "100%",
            padding: "0 15px",
            "& p": {
              marginLeft: "20px",
              marginRight: 0,
            },
            "& .buttonGroupContainer": {
              width: "100%",
            },
          },
        },
      },
      amenityIcon: {
        color: "#5A6987",
        maxWidth: "30px",
        width: "100%",
        maxHeight: "30px",
      },
      amenitiesButton: {
        display: "flex",
        flex: " 0 0 100%",
        maxWidth: "100%",
        borderTop: "1px solid #EAEEF5",
        padding: "15px",
        justifyContent: "flex-end",
      },
      amenitiesButtonCancel: {
        padding: "8px 16px",
        width: "77px",
        height: "40px",
        border: "1px solid #EAEEF5",
        boxSizing: "border-box",
        borderRadius: "24px",
        marginRight: "10px",
      },
      amenitiesButtonApply: {
        padding: "8px 16px",
        width: "77px",
        height: "40px",
        background: "#1DAF92",
        borderRadius: "24px",
        "& span": { color: "white" },
      },
      headerSearchScroll: {
        position: "relative",
        // maxWidth: "500px",
        height: "auto",
        padding: "7px 0",
        border: "1px solid #EAEEF5",
        margin: "0 0 0 15px",
        flex: "0 0 550px",
        "& .searchMenuButtonContainer": {
          flex: "0 0 116px",
          maxWidth: "116px",
          width: "100%",
          "& .searchButtonContainer": {
            height: "auto",
          },
        },
      },
  
      headerSearchOptionText: {
        color: "#364259",
        fontSize: "14px",
      },
      amenityCheckBox: {
        marginRight: "20px",
        "& svg": {
          borderRadius: "4px",
          // color: "#D7DDEA",
        },
      },
    }),
    { index: 2 }
  );
  

const SearchDate: React.FC<Props> = ({ inTopBar }) => {
  const isSmallSize = useSmallSize();
  const classes = useSearchStyles({ inTopBar, isSmallSize });
  const dateRange = useSelector(getSelectedDateRange);

  const [open, setOpen] = React.useState<boolean>(false);

  const startDate = new Date(dateRange.startDate);
  const endDate = new Date(dateRange.endDate);

  React.useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      // setFocusedInput(null);
    }
  }, [dateRange]);

  return (
    <div>
    <Typography variant="body1"><strong>Date</strong></Typography>
    <Box style={{border: "1px solid #EAEEF5", borderRadius: "24px", width: "100%"}}>
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
          {!inTopBar && (
            <Typography variant="body2" id="tata-start-date">
              {!dateRange?.startDate && !dateRange?.endDate && "Enter Dates"}
              {dateRange?.startDate && !dateRange?.endDate && moment(dateRange?.startDate).format("MM/DD/YYYY")}
              {dateRange?.startDate && dateRange?.endDate && `${moment(startDate).format("MM/DD/YYYY")}-${moment(endDate).format("MM/DD/YYYY")}`}
            </Typography>
          )}
        </Grid>
      </Grid>
      </Box>
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
        <BasicDateRangePicker value={value} onChange={handleChange} open={open} setOpen={setOpen} />
        {open && <Button className={classes.flexibleDateBtn}>Flexible Dates</Button>}
      </div>
    </>
  );
};
