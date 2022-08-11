import { Box, BoxProps, InputBaseProps, makeStyles } from "@material-ui/core";
import React from "react";
import EnhancedInput from "src/components/elements/TextField/Input";

const useStyles = makeStyles(
  () => ({
    flexWrapper: {
      display: "flex",
      gap: "16px",
    },
    input: {
      "& input": {
        padding: 0,
        height: "46px",
        textAlign: "center",
      },
    },
  }),
  { index: 1 }
);

interface Props {
  rootProps?: BoxProps;
  noOfInputs: number;
  inputProps?: InputBaseProps;
}

const VerificationCodeField: React.FC<Props> = ({
  inputProps,
  rootProps,
  noOfInputs,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.flexWrapper} {...rootProps}>
      {React.Children.toArray(
        Array.from({ length: noOfInputs }).map(() => (
          <EnhancedInput
            className={classes.input}
            placeholder="_"
            {...inputProps}
          />
        ))
      )}
    </Box>
  );
};

export default VerificationCodeField;
