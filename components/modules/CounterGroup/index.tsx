import { Box, ButtonProps } from "@material-ui/core";
import React, { useState } from "react";
import AppButton from "src/components/elements/Button";
import AppTypography from "src/components/elements/Typography";
import CounterGroupDialog from "./Dialog";
import { useStyles } from "./styles";

interface Props {
  label: string;
  info?: string;
  btnProps?: ButtonProps;
  dialogTitle: string;
  id: number;
}

const CounterGroup: React.FC<Props> = ({
  btnProps,
  dialogTitle,
  label,
  info,
  id,
}) => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <CounterGroupDialog
        open={open}
        onClose={handleClose}
        title={dialogTitle}
        id={id}
        setBedCount={setCount}
      />
      <Box className={classes.flexWrapper}>
        <Box>
          <AppTypography neutralColor={900} variant="action">
            {label}
          </AppTypography>
          <AppTypography variant="caption" neutralColor={500}>
            {count}
            {info}
          </AppTypography>
        </Box>

        <AppButton
          {...btnProps}
          onClick={() => setOpen(true)}
          className={classes.btn}
        />
      </Box>
    </>
  );
};

export default CounterGroup;
