import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import clsx from "clsx";

import AppButton from "src/components/elements/Button";
import ArrowLeftIcon from "src/components/elements/icons/ArrowLeft";
import ArrowRightIcon from "src/components/elements/icons/ArrowRight";
import AppTypography from "src/components/elements/Typography";
import { PlatformVariant } from "src/types/platform";
import { useScreenSizeDown } from "src/hooks";
import AppImage from "src/components/elements/Image";

export const useStyles = makeStyles(
  ({ breakpoints, palette, shape }) => ({
    root: {
      background: palette.grey[100],
      borderRadius: shape.borderRadius,
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      padding: "16px",
    },
    btn: {
      padding: "4px 12px",
      width: "80px",
      [breakpoints.down("xs")]: {
        height: "44px",
        width: "100%",
      },
    },
    step: {
      background: palette.grey[200],
      borderRadius: "2px",
      height: "4px",
      width: "100%",
    },
    stepActive: {
      background: `${palette.primary.main} !important`,
    },
    stepImage: {
      borderRadius: 0,
      height: "300px",
      [breakpoints.down("xs")]: {
        height: "230px",
      },
      [breakpoints.down(380)]: {
        height: "160px",
      },
    },
    stepper: {
      alignItems: "center",
      display: "flex",
      gap: "16px",
    },
    flexWrapper: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      gap: "12px",
    },
  }),
  { index: 1 }
);

interface Props {
  steps: { instruction: string }[];
  platform: PlatformVariant;
}

const PlatformStepper: React.FC<Props> = ({ steps, platform }) => {
  const [activeStep, setActiveStep] = useState(0);

  const isSmallerSizeDown = useScreenSizeDown("xs");
  const classes = useStyles();

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const textElement = (
    <AppTypography
      style={{
        textAlign: "center",
        marginBottom: isSmallerSizeDown ? "-4px" : undefined,
      }}
      neutralColor={600}
      variant="body"
    >
      {steps[activeStep].instruction}
    </AppTypography>
  );
  return (
    <div className={classes.root}>
      <AppTypography neutralColor={600} variant="action">
        Follow the steps below to find and copy {platform}’s calendar address
        (URL)
      </AppTypography>
      <AppImage
        src={`/images/platform-steps/${platform}/Image=${activeStep + 1}.png`}
        className={classes.stepImage}
      />
      <div className={classes.stepper}>
        {steps.map((_, index) => (
          <div
            className={clsx(
              classes.step,
              index === activeStep ? classes.stepActive : ""
            )}
          />
        ))}
      </div>
      {isSmallerSizeDown ? textElement : null}
      <div className={classes.flexWrapper}>
        <AppButton
          className={classes.btn}
          disabled={!activeStep}
          startIcon={
            <ArrowLeftIcon color={activeStep ? "action" : "disabled"} />
          }
          variant="outlined"
          onClick={handleBack}
        >
          Back
        </AppButton>
        {isSmallerSizeDown ? null : textElement}
        <AppButton
          className={classes.btn}
          disabled={activeStep + 1 >= steps.length}
          endIcon={
            <ArrowRightIcon
              color={activeStep + 1 >= steps.length ? "action" : "disabled"}
            />
          }
          onClick={handleNext}
          variant="outlined"
        >
          Next
        </AppButton>
      </div>
    </div>
  );
};

export default PlatformStepper;
