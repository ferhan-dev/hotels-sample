import { Box, IconButton, makeStyles } from "@material-ui/core";
import React from "react";

import CheckIcon from "src/components/elements/icons/Check";
import CloseIcon from "src/components/elements/icons/Close";
import AppTypography from "src/components/elements/Typography";

const useStyles = makeStyles(
  ({ palette }) => ({
    flexWrapper: {
      alignItems: "center",
      display: "flex",
      gap: "16px",
      justifyContent: "space-between",
      minHeight: "32px",
    },
    btnGroup: {
      display: "flex",
      gap: "16px",
      alignItems: "center",
      padding: "4px",
      marginRight: "12px",
    },
    noBtn: ({ value }: { value?: boolean }) => ({
      color: value === false ? palette.common.white : palette.error.main,
      background: value === false ? palette.error.main : undefined,
      border: value === false ? "none" : `1px solid ${palette.error.main}`,
      height: "24px",
      width: "24px",
      "&:hover": {
        background: value === false ? palette.error.dark : undefined,
      },
    }),
    yesBtn: ({ value }: { value?: boolean }) => ({
      color: value === true ? palette.common.white : palette.primary.main,
      background: value === true ? palette.primary.main : undefined,
      border: value === true ? "none" : `1px solid ${palette.primary.main}`,
      height: "24px",
      width: "24px",
      "&:hover": {
        background: value === true ? palette.primary.dark : undefined,
      },
    }),
  }),
  { index: 1 }
);

interface Props {
  label: string;
  info?: string;
  defaultValue?: any;
  value?: boolean;
  onChange?: (value: boolean) => void;
  onBlur?: () => void;
}

const YesOrNoOption: React.FC<Props> = ({
  label,
  info,
  value,
  onBlur,
  onChange,
}) => {
  const classes = useStyles({ value });

  return (
    <Box className={classes.flexWrapper}>
      <AppTypography neutralColor={700} variant="action">
        {label}{" "}
        {info ? (
          <AppTypography component="span" neutralColor={400} variant="action">
            {info}
          </AppTypography>
        ) : null}
      </AppTypography>
      <Box className={classes.btnGroup}>
        <IconButton
          onBlur={onBlur}
          onClick={onChange && (() => onChange(true))}
          className={classes.yesBtn}
        >
          <CheckIcon color="inherit" style={{ fontSize: "15.25px" }} />
        </IconButton>
        <IconButton
          onBlur={onBlur}
          onClick={onChange && (() => onChange(false))}
          className={classes.noBtn}
        >
          <CloseIcon color="inherit" style={{ fontSize: "14.55px" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default YesOrNoOption;
