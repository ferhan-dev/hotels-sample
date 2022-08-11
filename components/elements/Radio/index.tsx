import {
  RadioGroup,
  FormControlLabel,
  Radio,
  makeStyles,
  Box,
  RadioGroupProps,
} from "@material-ui/core";
import React from "react";

import { useSmallerSize } from "src/hooks/screenSize";
import { FormOption } from "src/types/form";
import RadioCheckIcon from "../icons/RadioCheck";
import AppTypography from "../Typography";

const useStyles = makeStyles(
  () => ({
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    formControlLabel: {
      margin: 0,
    },
    radio: {
      padding: 0,
      marginRight: "12px",
    },
    title: {
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "32px",
      letterSpacing: "-0.02em",
    },
  }),
  { index: 1 }
);

interface Props extends RadioGroupProps {
  label: string;
  options: FormOption[];
}

const AppRadioGroup = React.forwardRef<any, Props>(
  ({ options, label, className, style, ...props }, ref) => {
    const classes = useStyles();
    const isSmallerSize = useSmallerSize();
    
    return (
      <div className={className} style={style}>
        <AppTypography
          component="h3"
          neutralColor={800}
          variant={isSmallerSize ? "heading" : "displaySmall"}
          style={{ marginBottom: "16px" }}
        >
          {label}
        </AppTypography>
        <RadioGroup
          style={{ gap: "16px" }}
          aria-label={label}
          {...props}
          ref={ref}
        >
          {React.Children.toArray(
            options?.map(({ value, label, info }) => (
              <Box>
                <FormControlLabel
                  control={
                    <Radio
                      className={classes.radio}
                      icon={<RadioCheckIcon />}
                      checkedIcon={<RadioCheckIcon checked />}
                    />
                  }
                  className={classes.formControlLabel}
                  label={
                    <AppTypography
                      component="div"
                      neutralColor={700}
                      variant="action"
                    >
                      {label}
                    </AppTypography>
                  }
                  value={value}
                />
                {info && (
                  <AppTypography
                    component="div"
                    style={{ margin: "4px 0 0 36px" }}
                    variant="body"
                    neutralColor={500}
                  >
                    {info}
                  </AppTypography>
                )}
              </Box>
            ))
          )}
        </RadioGroup>
      </div>
    );
  }
);

export default AppRadioGroup;
