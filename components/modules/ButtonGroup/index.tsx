import { Container, ButtonProps, ContainerProps } from "@material-ui/core";
import React from "react";
import clsx from "clsx";

import AppButton from "src/components/elements/Button";
import ArrowLeftIcon from "src/components/elements/icons/ArrowLeft";
import { useStyles } from "./styles";

interface Props {
  containerProps?: Omit<ContainerProps, "children">;
  primaryBtnProps?: ButtonProps;
  secondaryBtnProps?: ButtonProps;
}

const ActionButtonGroup: React.FC<Props> = ({
  primaryBtnProps,
  secondaryBtnProps,
  containerProps,
}) => {
  const classes = useStyles();
  return (
    <Container
      {...containerProps}
      className={clsx(containerProps?.className, classes.root)}
    >
      <AppButton
        children="Back"
        startIcon={<ArrowLeftIcon />}
        variant="outlined"
        {...secondaryBtnProps}
        className={clsx(classes.secondaryBtn, secondaryBtnProps?.className)}
      />
      <AppButton
        children="Next"
        color="primary"
        variant="contained"
        {...primaryBtnProps}
        className={clsx(classes.primaryBtn, primaryBtnProps?.className)}
      />
    </Container>
  );
};

export default ActionButtonGroup;
