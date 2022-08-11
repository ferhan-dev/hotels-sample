import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box, Collapse, Container, Grid } from "@material-ui/core";
import { Controller } from "react-hook-form";
import { Alert } from "@material-ui/lab";
import AppCheckBox from "src/components/elements/CheckBox";
import AppDivider from "src/components/elements/Divider";
import ArrowDownIcon from "src/components/elements/icons/ArrowDown";
import ArrowUpIcon from "src/components/elements/icons/ArrowUp";
import AppRadioGroup from "src/components/elements/Radio";
import AppSelect from "src/components/elements/Select";
import AppTooltip from "src/components/elements/Tooltip";
import AppTypography from "src/components/elements/Typography";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { ListingStepNavigate } from "src/types/listing";
import { useAddListingContext } from "src/context";
import { buildListingPath, getValueFromLabel } from "src/utils";
import { addRentalParameter, updateRentalParameter } from "src/services/api";
import Counter from "src/components/modules/Counter";
import { counters, days, nights, radioOptions, times } from "./data";
import { useStyles } from "./styles";

const { back, next }: ListingStepNavigate = {
  next: { section: "basic-pricing", step: "three" },
  back: { section: "rules", step: "three" },
};

const RentalParameters: React.FC = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { form } = useAddListingContext();
  const { control, watch, getValues, setValue } = form;

  const classes = useStyles();
  const router = useRouter();
  const isSmallSizeDown = useScreenSizeDown("sm");

  const disableGutters = isSmallSizeDown ? false : true;
  const maxWidth = "sm" as const;

  const disabled = !watch([
    "rental_parameters",
    "rental_parameters.advanced_booking_options",
    "rental_parameters.advanced_booking_options.max_length_of_stays",
    "rental_parameters.advanced_booking_options.arrival_departure_days",
  ]).every(Boolean) || loading;

  const onNext = () => {
    setError(null);
    setLoading(true);
    const property = getValues();
    const rentalParameter = getValues('rental_parameters');
    if (rentalParameter?.id) {
      updateRentalParameter(rentalParameter).then((result) => {
        setValue('rental_parameters', result.data);
        router.push(buildListingPath(next));
      })
      .catch ((ex) => {
        const error = ex.response?.data;
        if (error) {
          setError(error.message);
        } else {
          setError(ex.message);
        }
      })
      .finally(() => setLoading(false));
    } else {
      addRentalParameter({rentalParameter, propertyId: property.id}).then((result) => {
        setValue('rental_parameters', result.data);
        router.push(buildListingPath(next));
      })
      .catch ((ex) => {
        const error = ex.response?.data;
        if (error) {
          setError(error.message);
        } else {
          setError(ex.message);
        }
      })
      .finally(() => setLoading(false));
    }
  };

  return (
    <>
      <Container
        disableGutters={disableGutters}
        maxWidth={maxWidth}
        className={classes.root}
      >
        <AppTypography
          component="h2"
          neutralColor={900}
          style={{ marginBottom: "24px" }}
          variant="displayMedium"
        >
          Rental parameters
        </AppTypography>
        <Controller
          name="rental_parameters.booking_preferences"
          control={control}
          render={({ field: { value, ...others } }) => (
            <AppRadioGroup
              label="Booking preferences"
              options={radioOptions}
              value={value ? value : ""}
              {...others}
            />
          )}
        />

        <AppDivider style={{ margin: "24px 0" }} />

        <AppTypography
          component="h2"
          neutralColor={900}
          style={{ marginBottom: "24px" }}
          variant="displaySmall"
        >
          Arrivals and Departures
        </AppTypography>

        <Box className={classes.horizontalFlexWrapper}>
          {React.Children.toArray(
            times.map(({ label, ...time }) => {
              return (
                <Controller
                  // @ts-ignore
                  name={`rental_parameters.${getValueFromLabel(label)}`}
                  control={control}
                  render={({ field: { ...others } }) => (
                    <AppSelect
                      label={label}
                      {...time}
                      {...others}
                      withLabel
                      optional
                      className={classes.verticalSelect}
                    />
                  )}
                />
              );
            })
          )}
        </Box>

        <AppDivider style={{ margin: "24px 0" }} />

        <AppTypography
          component="h2"
          neutralColor={900}
          style={{ marginBottom: "24px" }}
          variant="displaySmall"
        >
          Stay length
        </AppTypography>
        <Box className={classes.verticalFlexWrapper}>
          {React.Children.toArray(
            nights.map(({ label, name, ...night }) => (
              <Controller
                name={`rental_parameters.${name}`}
                control={control}
                render={({ field: { ...others }, fieldState: { error } }) => (
                  <AppSelect
                    label={label}
                    {...night}
                    {...others}
                    withLabel
                    optional
                    error={Boolean(error)}
                  />
                )}
              />
            ))
          )}
        </Box>

        <AppDivider style={{ margin: "24px 0" }} />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginBottom="24px"
        >
          <AppTypography
            component="h2"
            neutralColor={900}
            variant="displaySmall"
          >
            Advanced booking options
          </AppTypography>
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
          <AppTypography neutralColor={800} variant="heading">
            Minimum length of stay depending the day
            <span style={{ marginLeft: "10px" }}>
              <AppTooltip
                title={
                  <AppTypography
                    style={{ textAlign: "center" }}
                    variant="caption"
                    color="inherit"
                  >
                    Minimum number of nights to book depending on the day of the
                    start of the stay.
                  </AppTypography>
                }
              />
            </span>
          </AppTypography>
          <Grid style={{ margin: "16px -12px" }} container spacing={4}>
            {React.Children.toArray(
              days.map(({ label, labelShort, options }) => (
                <Controller
                  name={`rental_parameters.advanced_booking_options.max_length_of_stays.${labelShort}`}
                  control={control}
                  render={({ field: { ...others } }) => (
                    <Grid xs={6} sm={4} item style={{ padding: "8px 12px" }}>
                      <AppSelect
                        label={label}
                        options={options}
                        {...others}
                        optional
                        withLabel
                      />
                    </Grid>
                  )}
                />
              ))
            )}
          </Grid>

          <AppTypography neutralColor={800} variant="heading">
            Arrival-departure days
            <span style={{ marginLeft: "10px" }}>
              <AppTooltip
                title={
                  <AppTypography
                    style={{ textAlign: "center" }}
                    variant="caption"
                    color="inherit"
                  >
                    Check the days when it will be possible for a client to
                    arrive or end their stay. If the day is unchecked, it will
                    indicate that a customer cannot arrive or finish at this
                    precise day.
                  </AppTypography>
                }
              />
            </span>
          </AppTypography>
          <Box
            style={{ margin: "24px 0 52px 0" }}
            className={classes.horizontalFlexWrapper}
          >
            {React.Children.toArray(
              days.map(({ labelShort }, index) => (
                <Controller
                  name={`rental_parameters.advanced_booking_options.arrival_departure_days.${index}`}
                  control={control}
                  render={({ field: { value, onChange, onBlur, name } }) => (
                    <Grid xs={6} sm={4} item style={{ padding: "8px 12px" }}>
                      <AppCheckBox
                        checkBoxProps={{
                          checked: Boolean(value),
                          name,
                          onBlur,
                          onChange: (e) => {
                            e.target.checked
                              ? onChange(labelShort)
                              : onChange("");
                          },
                        }}
                        className={classes.checkbox}
                        label={labelShort}
                        value={labelShort}
                      />
                    </Grid>
                  )}
                />
              ))
            )}
          </Box>
          <Box className={classes.verticalFlexWrapper}>
            {React.Children.toArray(
              counters.map(({ label, name }) => (
                <Controller
                  name={`rental_parameters.advanced_booking_options.${name}`}
                  control={control}
                  render={({ field: { value, onBlur, onChange } }) => (
                    <Counter
                      label={
                        <AppTypography neutralColor={800} variant="heading">
                          {label}
                          <span style={{ marginLeft: "10px" }}>
                            <AppTooltip
                              title={
                                <AppTypography
                                  style={{ textAlign: "center" }}
                                  variant="caption"
                                  color="inherit"
                                >
                                  Check the days when it will be possible for a
                                  client to arrive or end their stay. If the day
                                  is unchecked, it will indicate that a customer
                                  cannot arrive or finish at this precise day.
                                </AppTypography>
                              }
                            />
                          </span>
                        </AppTypography>
                      }
                      value={value || 0}
                      optional
                      onBlur={onBlur}
                      onChange={onChange}
                    />
                  )}
                />
              ))
            )}
          </Box>
        </Collapse>
      </Container>
      <AppDivider />
      {error && (
        <Alert severity="error" style={{ marginBottom: "24px" }}>
          {error}
        </Alert>
      )}
      <ActionButtonGroup
        secondaryBtnProps={{
          onClick: () => router.push(buildListingPath(back)),
        }}
        primaryBtnProps={{
          disabled,
          onClick: onNext,
        }}
        containerProps={{
          maxWidth,
          disableGutters,
        }}
      />
    </>
  );
};

export default RentalParameters;
