import { Box, Collapse, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import AppCheckBox from "src/components/elements/CheckBox";
import AppDivider from "src/components/elements/Divider";
import ArrowDownIcon from "src/components/elements/icons/ArrowDown";
import ArrowUpIcon from "src/components/elements/icons/ArrowUp";
import AppTypography from "src/components/elements/Typography";
import { AmenitySection } from "src/types/amenities";
import { getValueFromLabel } from "src/utils";

const useStyles = makeStyles(
  () => ({
    gridItem: {
      height: "48px",
      padding: "8px 12px !important",
    },
    checbox: {
      padding: "0 12px 0 16px",
      width: "100%",
    },
    amen: {
      padding: "20px 0px",
    },
  }),
  { index: 1 }
);
interface Props {
  initialValue?: boolean;
  section: AmenitySection;
  type: any;
}

const AmenitiesCollapsible: React.FC<Props> = ({
  initialValue,
  section,
  type,
}) => {
  const { control } = useForm();
  // const { control } = form;
  const [open, setOpen] = useState(Boolean(initialValue));
  const classes = useStyles();

  return (
    <>
      <AppDivider />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        className={type == "amen" ? `${classes.amen}` : ""}
      >
        <AppTypography variant="displaySmall">{section.title}</AppTypography>
        {open ? (
          <ArrowUpIcon
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(false)}
          />
        ) : (
          <ArrowDownIcon
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />
        )}
      </Box>
      <Collapse in={open} unmountOnExit>
        <Grid container spacing={3}>
          {React.Children.toArray(
            section.features.map((feature: any, index) => (
              <Grid className={classes.gridItem} item xs={12} sm={6} md={4}>
                <Controller
                  //@ts-ignore
                  name={`amenities.${index}`}
                  control={control}
                  render={({ field: { value, onChange, onBlur, name } }) => (
                    <AppCheckBox
                      checkBoxProps={{
                        checked: Boolean(value),
                        name,
                        onBlur,
                        onChange: (e) => {
                          e.target.checked
                            ? onChange(getValueFromLabel(feature.label))
                            : onChange("");
                        },
                      }}
                      className={classes.checbox}
                      label={
                        <Box display="flex" alignItems="center">
                          <Box width="44px" display="flex" alignItems="center">
                            {feature.icon}
                          </Box>
                          <AppTypography
                            component="span"
                            neutralColor={800}
                            variant="action"
                          >
                            {feature.label}
                          </AppTypography>
                        </Box>
                      }
                    />
                  )}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Collapse>
    </>
  );
};

export default AmenitiesCollapsible;
