import React, { useState } from "react";
import { useRouter } from "next/router";
import { Controller } from "react-hook-form";
import { Box, Collapse, Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import AppButton from "src/components/elements/Button";
import AppDivider from "src/components/elements/Divider";
import AddIcon from "src/components/elements/icons/Add";
import ArrowDownIcon from "src/components/elements/icons/ArrowDown";
import ArrowUpIcon from "src/components/elements/icons/ArrowUp";
import AppSelect from "src/components/elements/Select";
import AppTextField from "src/components/elements/TextField";
import AppCheckBox from "src/components/elements/CheckBox";
import AppTooltip from "src/components/elements/Tooltip";
import AppTypography from "src/components/elements/Typography";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import { useAddListingContext } from "src/context";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { ListingStepNavigate } from "src/types/listing";
import { buildListingPath } from "src/utils";
import { addBasicFee, updateBasicFee } from "src/services/api";
import { noOfGuestOptions } from "./data";
import { useStyles } from "./styles";

const { back, next }: ListingStepNavigate = {
  next: { section: "calendar", step: "three" },
  back: { section: "basic-pricing", step: "three" },
};

const BasicFee: React.FC = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const router = useRouter();
  const isSmallSizeDown = useScreenSizeDown("sm");

  const disableGutters = isSmallSizeDown ? false : true;
  const maxWidth = "sm" as const;

  const { form } = useAddListingContext();
  const { control, watch, getValues, setValue, register } = form;

  const disabled = !watch(["basic_fee"]).every(Boolean) || loading;

  const onNext = () => {
    const property = getValues();
    const basicFee = getValues("basic_fee");
    setError(null);
    setLoading(true);
    if (basicFee.id) {
      updateBasicFee(basicFee).then(() => {
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
      addBasicFee({basicFee, propertyId: property.id}).then(result => {
        setValue('basic_fee', result.data);
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
          variant="displayMedium"
        >
          Basic fees
        </AppTypography>

        <AppTextField
          name="basic_fee.cleaning_fee"
          register={register}
          label={
            <>
              Cleaning fee
              <span style={{ marginLeft: "10px" }}>
                <AppTooltip
                  title={
                    <AppTypography
                      style={{ textAlign: "center" }}
                      color="inherit"
                      variant="caption"
                    >
                      Costs related to the maintenance of the property will
                      be added to the total of each reservation.
                    </AppTypography>
                  }
                />
              </span>
            </>
          }
          placeholder="CAD (C$)"
          optional
        />


        <AppTextField
          name="basic_fee.security_deposit"
          register={register}
          label={
            <>
              Security deposit
              <span style={{ marginLeft: "10px" }}>
                <AppTooltip
                  title={
                    <AppTypography
                      style={{ textAlign: "center" }}
                      color="inherit"
                      variant="caption"
                    >
                      In case of damage, your guests will be responsible up
                      to this amount.
                    </AppTypography>
                  }
                />
              </span>
            </>
          }
          placeholder="CAD (C$)"
          optional
        />

        <AppDivider />

        <Box className={classes.optionalFieldsWrapper}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <AppTypography neutralColor={800} variant="displaySmall">
              Additional guest fees
              <AppTypography
                component="span"
                neutralColor={400}
                style={{ marginLeft: "10px" }}
                variant="caption"
              >
                (Optional)
              </AppTypography>
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
            <Controller
              name="basic_fee.above_number_of_guests"
              control={control}
              render={({ field: { value, ...others } }) => (
                <AppSelect
                  {...others}
                  label="Above this number of guest"
                  placeholder="choose one"
                  optional
                  withLabel
                  value={value || 0}
                  options={noOfGuestOptions}
                  style={{ marginBottom: "24px" }}
                />
              )}
            />

            <AppTextField
              name="basic_fee.fee_per_additional_guest"
              register={register}
              label="Fee per additional guest"
              placeholder="CAD (C$)"
              optional
            />
          </Collapse>
        </Box>

        <AppDivider />

        <Box>
          <AppTypography
            neutralColor={800}
            style={{ marginBottom: "4px" }}
            variant="heading"
          >
            Other charges
          </AppTypography>
          <AppTypography neutralColor={500} variant="body">
            Indicate other charges that are specific to your property (ex. pet,
            breakfast and etc.)
          </AppTypography>
        </Box>

        <Controller
          name="basic_fee.other_charges.0.service_name"
          control={control}
          render={({ field: { value, ...others } }) => (
            <AppTextField
              {...others}
              label="Service name"
              placeholder="Service name"
              optional
            />
          )}
        />
        <AppTextField
          register={register}
          name="basic_fee.other_charges.0.service_price"
          label="Service price"
          placeholder="CAD (C$)"
          optional
        />
        <AppTextField
          register={register}
          name="basic_fee.other_charges.0.how_is_it_charged"
          label="How is it charged?"
          optional
          defaultValue="By night"
          options={[{ label: "By night", value: "By night" }]}
          withLabel
        />
        <Controller
          name="basic_fee.other_charges.0.optional"
          control={control}
          render={({ field: { value, ...others } }) => (
            <AppCheckBox
              {...others}
              label="Optional?"
              value={value === undefined ? false : value}
            />
          )}
        />
        <AppButton
          style={{ padding: "8px 16px" }}
          startIcon={<AddIcon style={{ fontSize: "13.7px" }} />}
          variant="outlined"
        >
          Add Charges
        </AppButton>
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

export default BasicFee;
