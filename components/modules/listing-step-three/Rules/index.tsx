import React, { useState } from "react";
import { Box, Container } from "@material-ui/core";
import { useRouter } from "next/router";
import { Controller } from "react-hook-form";
import { Alert } from "@material-ui/lab";
import AppDivider from "src/components/elements/Divider";
import AppTypography from "src/components/elements/Typography";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { useAddListingContext } from "src/context";
import { ListingStepNavigate } from "src/types/listing";
import { buildListingPath, getValueFromLabel } from "src/utils";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import YesOrNoOption from "../../YesOrNoOption";
import { useStyles } from "./styles";
import { updateProperties } from "src/services/api";

const { back, next }: ListingStepNavigate = {
  next: { section: "rental-parameters", step: "three" },
  back: { section: "inbetween", step: "two" },
};

const yesOrNoOptions = [
  "Suitable for children ",
  "Suitable for babies ",
  "Pets allowed",
  "Smoking allowed inside",
  "Possible events or parties",
  "Events allowed",
  "Open fires allowed",
].map((label, index) => ({
  label,
  formValue: getValueFromLabel(label),
  index,
}));

const rules = yesOrNoOptions.map(({ label, info }: any, index: any) => ({
  label,
  formValue: getValueFromLabel(label),
  info,
  index,
}));

const Rules: React.FC = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const router = useRouter();
  const { form } = useAddListingContext();
  const {
    control,
    getValues,
  } = form;

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
          Rules
        </AppTypography>
        <Box className={classes.flexWrapper}>
          {React.Children.toArray(
            rules.map(({ label, formValue, index }) => (
              <Controller
                control={control}
                name={`rules.${index}`}
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

export default Rules;
