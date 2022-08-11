import { Box, makeStyles, Step, Stepper } from "@material-ui/core";
import React from "react";
import clsx from "clsx";

import ArrowRightIcon from "src/components/elements/icons/ArrowRight";
import AppTypography from "src/components/elements/Typography";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { useRouter } from "next/router";
import { ListingStepIndexMap, ListingStepVariant } from "src/types/listing";
import CheckIcon from "src/components/elements/icons/Check";
import { palette } from "src/components/foundation/palette";

const steps = [
  "Start with the basics",
  "Set the tone",
  "Prepare to welcome travelers",
];

const useStyles = makeStyles(
  ({ palette, breakpoints }) => ({
    step: {
      alignItems: "center",
      display: "flex",
      gap: "12px",
      padding: 0,
    },
    stepItemCompleted: {
      background: `${palette.primary.main} !important`,
      border: "none !important",
      color: `${palette.common.white} !important`,
    },
    stepItem: {
      alignItems: "center",
      background: palette.common.white,
      border: `1px solid ${palette.divider}`,
      color: palette.text.primary,
      borderRadius: "50%",
      display: "flex",
      height: "32px",
      justifyContent: "center",
      width: "32px",
    },
    stepLabel: {
      [breakpoints.between(700, 900)]: {
        display: "none",
      },
    },
    stepper: {
      gap: "12.5px",
      padding: 0,
      [breakpoints.down("lg")]: {
        gap: "6.25px",
      },
    },
  }),
  { index: 1 }
);
const HeaderStepper = () => {
  const classes = useStyles();
  const router = useRouter();
  const isCustomSizeDown = useScreenSizeDown(1200);
  const isSmallerSizeDown = useScreenSizeDown("xs");

  const { step } = router.query as { step: ListingStepVariant };
  const stepIndexMap: ListingStepIndexMap = {
    one: 0,
    two: 1,
    three: 2,
  };

  return (
    <Box>
      <Stepper
        className={classes.stepper}
        connector={
          isSmallerSizeDown ? undefined : (
            <ArrowRightIcon
              style={{ fontSize: "17px", color: palette.grey?.[300] }}
            />
          )
        }
      >
        {steps.map((label, index) => {
          const isActiveStep = index === stepIndexMap[step];
          const isCompleted = index < stepIndexMap[step];
          const classNames =
            index <= stepIndexMap[step]
              ? [classes.stepItem, classes.stepItemCompleted]
              : [classes.stepItem];
          return (
            <Step className={classes.step} key={label}>
              <AppTypography className={clsx(...classNames)} variant="action">
                {isCompleted ? (
                  <CheckIcon color="inherit" style={{ fontSize: "17px" }} />
                ) : (
                  index + 1
                )}
              </AppTypography>
              {!isActiveStep && isCustomSizeDown ? null : (
                <AppTypography
                  className={classes.stepLabel}
                  neutralColor={900}
                  variant="body"
                >
                  {label}
                </AppTypography>
              )}
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};

export default HeaderStepper;
