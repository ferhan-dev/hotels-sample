import React, { useState } from "react";
import { useRouter } from "next/router";
import { Controller } from "react-hook-form";
import { Box, Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import AppDivider from "src/components/elements/Divider";
import AppTypography from "src/components/elements/Typography";
import { useAddListingContext } from "src/context";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { ListingStepNavigate } from "src/types/listing";
import { buildListingPath, getValueFromLabel } from "src/utils";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import YesOrNoOption from "../../YesOrNoOption";
import { useStyles } from "./styles";
import { updateProperties } from "src/services/api/listingForm";

const expectations = [
  "Nearby noise potential",
  "Cell phone reception is poor near this property",
  "Access with a four-wheel drive vehicle is preferable in winter",
  "Water is not drinkable",
  "Must climb stairs",
].map((label, index) => ({
  label,
  formValue: getValueFromLabel(label),
  index,
}));

const securityMeasures = [
  "Smoke detector",
  "Carbon monoxide detector",
  "First aid kit",
  "Fire extinguisher",
  "Chamber door lock",
].map((label, index) => ({
  label,
  formValue: getValueFromLabel(label),
  index,
}));

const { back, next }: ListingStepNavigate = {
  next: { section: "amenities", step: "one" },
  back: { section: "guests", step: "one" },
};

const CustomerExpectationsAndSecurity: React.FC = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { form } = useAddListingContext();
  const { control, getValues } = form;
  const classes = useStyles();
  const router = useRouter();
  const isSmallSizeDown = useScreenSizeDown("sm");

  const disableGutters = isSmallSizeDown ? false : true;
  const maxWidth = "sm" as const;

  const onNext = () => {
    setError(null);
    setLoading(true);
    const property = getValues();
    updateProperties(property, property.id).then(() => {
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
          style={{ marginBottom: "24px" }}
          variant="displayMedium"
        >
          Customer expectations and security
        </AppTypography>
        <AppTypography
          style={{ marginBottom: "28px" }}
          neutralColor={800}
          variant="displaySmall"
        >
          Customer expectation
        </AppTypography>
        <Box className={classes.flexWrapper}>
          {React.Children.toArray(
            expectations.map(({ label, formValue, index }) => {
              const name: string = `customer_expectations.${index}`;
              return (
                <Controller
                  control={control}
                  // @ts-ignore
                  name={name}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <YesOrNoOption
                      label={label}
                      value={value ? true : value === "" ? false : undefined}
                      onBlur={onBlur}
                      onChange={(newValue) => {
                        onChange(newValue ? formValue : "");
                      }}
                    />
                  )}
                />
              );
            })
          )}
        </Box>
        <AppDivider style={{ marginBottom: "24px" }} />
        <AppTypography
          style={{ marginBottom: "28px" }}
          neutralColor={800}
          variant="displaySmall"
        >
          Security
        </AppTypography>
        <Box className={classes.flexWrapper}>
          {React.Children.toArray(
            securityMeasures.map(({ label, formValue, index }) => (
              <Controller
                control={control}
                // @ts-ignore
                name={`securities.${index}`}
                render={({ field: { onChange, onBlur, value } }) => (
                  <YesOrNoOption
                    label={label}
                    value={value ? true : value === "" ? false : undefined}
                    onBlur={onBlur}
                    onChange={(newValue) => {
                      onChange(newValue ? formValue : "");
                    }}
                  />
                )}
              />
            ))
          )}
        </Box>
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

export default CustomerExpectationsAndSecurity;
