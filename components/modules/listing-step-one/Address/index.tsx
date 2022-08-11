import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box, Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Controller } from "react-hook-form";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { ListingStepNavigate } from "src/types/listing";
import AppDivider from "src/components/elements/Divider";
import AppTextField from "src/components/elements/TextField";
import AppTypography from "src/components/elements/Typography";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import AppSelect from "src/components/elements/Select";
import { buildListingPath } from "src/utils";
import { useAddListingContext } from "src/context";
import { updateProperties } from "src/services/api/listingForm";
import AddressMap from "./Map";
import { cities, countries, states } from "./data";
import { useStyles } from "./styles";

const commonSelectProps = {
  select: true,
  withLabel: true,
};

const { back, next }: ListingStepNavigate = {
  next: { section: "guests", step: "one" },
  back: { section: "property-type", step: "one" },
};

const Address = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { form } = useAddListingContext();

  const {
    control,
    formState: { errors },
    register,
    getValues,
  } = form;

  const classes = useStyles();
  const router = useRouter();
  const isSmallSizeDown = useScreenSizeDown("sm");
  const disableGutters = isSmallSizeDown ? false : true;
  const maxWidth = "sm" as const;

  const handleSubmit = () => {
    const property = getValues();
    setError(null);
    setLoading(true);
    updateProperties(property, property.id)
      .then(() => {
        router.push({
          pathname: buildListingPath(next),
        });
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
          variant="displayMedium"
        >
          Address
        </AppTypography>
        <AppTypography neutralColor={500} variant="body">
          Only travelers with confirmed reservations will be able to see this
          marker corresponding to your address.
        </AppTypography>
        <AppTextField
          label="Full Address"
          name="full_address"
          placeholder="714 Bowman Street. North Miami Beach, FL 33160."
          register={register}
          error={Boolean(errors.full_address)}
          message={errors.full_address?.message}
        />
        <Box className={classes.flexWrapper}>
          <Controller
            name="country"
            control={control}
            render={({ field: { ref, ...others }, fieldState: { error } }) => (
              <AppSelect
                label="Country"
                options={countries}
                placeholder="United States"
                {...commonSelectProps}
                {...others}
                inputRef={ref}
                error={Boolean(error)}
                message={error?.message}
              />
            )}
          />
          <Controller
            name="state"
            control={control}
            render={({ field: { ref, ...others }, fieldState: { error } }) => (
              <AppSelect
                label="Province / State"
                options={states}
                placeholder="Florida"
                {...commonSelectProps}
                {...others}
                inputRef={ref}
                error={Boolean(error)}
                message={error?.message}
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            render={({ field: { ref, ...others }, fieldState: { error } }) => (
              <AppSelect
                label="City"
                options={cities}
                placeholder="Miami"
                {...commonSelectProps}
                {...others}
                inputRef={ref}
                error={Boolean(error)}
                message={error?.message}
              />
            )}
          />
          <AppTextField
            label="Postal Code"
            name="postal_code"
            placeholder="33160"
            register={register}
            error={Boolean(errors.postal_code)}
            message={errors.postal_code?.message}
          />
        </Box>
        <AddressMap />
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
          disabled: loading,
          onClick: () => {
            handleSubmit();
          },
        }}
        containerProps={{
          maxWidth,
          disableGutters,
        }}
      />
    </>
  );
};

export default Address;