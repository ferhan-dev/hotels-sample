import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box, Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import AppDivider from "src/components/elements/Divider";
import AppSelect from "src/components/elements/Select";
import AppTypography from "src/components/elements/Typography";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { ListingStepNavigate } from "src/types/listing";
import { buildListingPath } from "src/utils";
import { useAddListingContext } from "src/context";
import { updateProperties } from "src/services/api";
import { useStyles } from "./styles";

const { back, next }: ListingStepNavigate = {
  next: { section: "laws-and-taxes", step: "three" },
  back: { section: "calendar", step: "three" },
};

const policyTypes = [
  {
    label: "Flexible",
    value: "flexible",
    content: [
      `You will receive a full refund as long as you cancel at least 24 hours prior 
      to check-in. You will receive a full refund, less the first night, if you cancel within 24 hours of check-in.`,
      `Any refund will be at the discretion of the host if you cancel after check-in.`,
    ],
  },
  {
    label: "Moderate",
    value: "moderate",
    content: [
      `You will receive a full refund as long as you cancel at least 7 days prior to check-in.
      You will receive a 50% refund if you cancel within 7 days of check-in.`,
      `Any refund will be at the discretion of the host if you cancel after check-in.`,
    ],
  },
  {
    label: "Fifteen",
    value: "fifteen",
    content: [
      `Cancellation is free up to 24 hours after confirmation of your reservation and at least 15 days before check-in.`,
      `You will receive a 50% refund, less our service charge, 
      if you cancel more than 24 hours after your booking is confirmed and at least 15 days prior to check-in.`,
      `The host does not offer a refund if you cancel within 15 days of check-in.`,
      `Any refund will be at the host's discretion (and will not include service charges) if you cancel after check-in.`,
    ],
  },
];

const CancellationPolicies: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const classes = useStyles();
  const router = useRouter();
  const isSmallSizeDown = useScreenSizeDown("sm");

  const disableGutters = isSmallSizeDown ? false : true;
  const maxWidth = "sm" as const;

  const { form } = useAddListingContext();
  const { getValues, setValue, watch } = form;

  const property = getValues();
  const value = getValues("cancellation_policy_type") || "Flexible";
  const policyType = policyTypes.find((type) => type.value === value);

  const disabled = !watch(["cancellation_policy_type"]).every(Boolean);

  const onNext = () => {
    setError(null);
    setLoading(true);
    updateProperties(property, property.id)
      .then(() => {
        router.push(buildListingPath(next));
      })
      .catch(ex => {
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
          Cancellation policies
        </AppTypography>

        {/* <Controller
          name="basic_pricing.currency"
          control={control}
          render={({ field: { value, ...others } }) => (
          )}/> */}
        <AppSelect
          name="type"
          label="Cancellation policy type"
          optional
          withLabel
          options={policyTypes}
          value={value}
          onChange={(event) => {
            setValue("cancellation_policy_type", event.target.value as string);
          }}
        />
        <Box className={classes.flexWrapper}>
          {policyType?.content.map((text, index) => (
            <AppTypography variant="body" key={index} neutralColor={600}>
              {text}
            </AppTypography>
          ))}
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
          disabled: disabled || loading,
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

export default CancellationPolicies;
