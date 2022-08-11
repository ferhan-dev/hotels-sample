import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import ForbidIcon from "src/components/elements/icons/Forbid";
import AppTypography from "src/components/elements/Typography";
import { useScreenSizeDown } from "src/hooks";

const useStyles = makeStyles(
  ({ breakpoints, palette }) => ({
    root: {
      background: palette.background.paper,
      border: `1px solid ${palette.divider}`,
      cursor: "pointer",
      padding: "16px",
      position: "relative",
      height: "141px",
      maxWidth: "161px",
      width: "100%",
      "&:hover": {
        background: palette.grey[100],
      },
      "&:active": {
        background: palette.grey[200],
      },
      [breakpoints.down("sm")]: {
        padding: "12px",
      },
      [breakpoints.down("xs")]: {
        padding: "6px",
        height: "110px",
      },
    },
    activeLabel: {
      background: palette.primary.main,
      borderRadius: "50%",
      height: "8px",
      left: "12px",
      position: "absolute",
      top: "12px",
      width: "8px",
      [breakpoints.down("xs")]: {
        height: "6px",
        width: "6px",
      },
    },
    icon: {
      fontSize: "17.5px",
      left: "13px",
      position: "absolute",
      top: "13px",
      [breakpoints.down("xs")]: {
        left: "9.3px",
        top: "9.3px",
        fontSize: "12px",
      },
    },
    text: {
      textAlign: "right",
    },
  }),
  { index: 1 }
);

const CalendarBody: React.FC = () => {
  return (
    <>
      <Box display="flex" alignItems="center">
        <CalendarDay status="disabled" />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
      </Box>
      <Box display="flex" alignItems="center">
        <CalendarDay />
        <CalendarDay status="disabled" />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
      </Box>
      <Box display="flex" alignItems="center">
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
      </Box>
      <Box display="flex" alignItems="center">
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
      </Box>
      <Box display="flex" alignItems="center">
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
        <CalendarDay />
      </Box>
    </>
  );
};
interface Props {
  status?: "active" | "forbid" | "disabled";
}

const CalendarDay: React.FC<Props> = ({ status }) => {
  const classes = useStyles();
  const isCustomSizeDown = useScreenSizeDown("xs");

  return (
    <Box className={classes.root}>
      {status === "forbid" ? (
        <ForbidIcon className={classes.icon} color="error" />
      ) : status === "active" ? (
        <ActiveLabel />
      ) : null}
      <AppTypography
        className={classes.text}
        neutralColor={status === "disabled" ? 300 : 400}
        variant={isCustomSizeDown ? "smallCaption" : "subHeading"}
      >
        4
      </AppTypography>
      <AppTypography
        className={classes.text}
        neutralColor={status === "disabled" ? 300 : 700}
        variant={isCustomSizeDown ? "smallCaption" : "body"}
      >
        128C$
      </AppTypography>
    </Box>
  );
};

const ActiveLabel = () => {
  const classes = useStyles();
  return <Box className={classes.activeLabel} />;
};

export default CalendarBody;
