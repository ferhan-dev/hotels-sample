import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { Controller } from "react-hook-form";
import { Box, Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import AppButton from "src/components/elements/Button";
import AppDivider from "src/components/elements/Divider";
import UploadIcon from "src/components/elements/icons/Upload";
import AppSelect from "src/components/elements/Select";
import AppTextArea from "src/components/elements/TextArea";
import AppTextField from "src/components/elements/TextField";
import AppTypography from "src/components/elements/Typography";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import YesOrNoOption from "src/components/modules/YesOrNoOption";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { ListingStepNavigate } from "src/types/listing";
import { buildListingPath } from "src/utils";
import { useAddListingContext } from "src/context";
import { updateGuestReception, addGuestReception } from "src/services/api";
import { checkInOptions, internetTypeOptions } from "./data";
import { useStyles } from "./styles";

const { back, next }: ListingStepNavigate = {
  next: { section: "phone-number", step: "three" },
  back: { section: "laws-and-taxes", step: "three" },
};

const GuestReception: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [propertyGuide, setPropertyGuide] = useState<File | undefined>(undefined);
  const classes = useStyles();
  const router = useRouter();
  const isSmallSizeDown = useScreenSizeDown("sm");
  const inputFileRef = useRef(null);

  const disableGutters = isSmallSizeDown ? false : true;
  const maxWidth = "sm" as const;

  const { form } = useAddListingContext();
  const { control, watch, getValues, register, setValue } = form;

  // @ts-ignore
  const hasWifiAccess = watch("guest_reception.has_wifi_access");

  // @ts-ignore
  const onUploadFile = () => inputFileRef?.current?.click();
  const onFileChange = (e: any) => setPropertyGuide(e.target.files[0]);

  const onNext = () => {
    const propertyId = getValues("id");
    const guestReception = getValues("guest_reception");

    const formData = new FormData();
    // @ts-ignore
    formData.set("id", guestReception.id);
    formData.set("checkin_method", guestReception.checkin_method);
    formData.set("has_wifi_access", guestReception.has_wifi_access === 'true' ? "1" : "0");
    formData.set("internet_type", guestReception.internet_type);
    formData.set("tell_your_guest", guestReception.tell_your_guest || "");
    formData.set("wifi_name", guestReception.wifi_name);

    if (propertyGuide) {
      formData.set('property_guide', propertyGuide);
    }

    setLoading(true);
    setError(null);
    if (guestReception.id) {
      updateGuestReception(formData)
        .then(() => router.push(buildListingPath(next)))
        .catch(ex => {
          const error = ex.response?.data;
          if (error) {
            setError(error.message);
          } else {
            setError(ex.message);
          }
        })
        .finally(() => setLoading(false))
    } else {
      addGuestReception({guestReception: formData, propertyId})
        .then(result => {
          setValue("guest_reception", result.data);
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
          Guest's reception
        </AppTypography>
        <AppTypography neutralColor={800} variant="heading">
          Internet
        </AppTypography>
        <Controller
          name="guest_reception.internet_type"
          control={control}
          render={({ field: { value, ...others } }) => (
            <AppSelect
              label="What is your internet type?"
              placeholder="Choose one"
              withLabel
              options={internetTypeOptions}
              {...others}
              value={value}
            />
          )}
        />
        <Controller
          name="guest_reception.has_wifi_access"
          control={control}
          render={({ field: { value, ...others } }) => (
            <YesOrNoOption
              label="Do you have wifi access?"
              // @ts-ignore
              value={value}
              {...others}
            />
          )}
        />
        {
          hasWifiAccess && (
            <>
              <AppTextField
                label="Wi-Fi network name"
                name="guest_reception.wifi_name"
                optional
                placeholder="Type here"
                register={register}
              />
              <AppTextField
                label="Wi-Fi password"
                name="guest_reception.wifi_password"
                optional
                placeholder="Type here"
                register={register}
              />
            </>
          )
        }
        <AppDivider />
        <Box>
          <AppTypography neutralColor={800} variant="action">
            Property guide
          </AppTypography>
          <input
            type="file"
            ref={inputFileRef}
            onChange={onFileChange}
          />
          <AppButton
            fullWidth
            startIcon={<UploadIcon />}
            style={{ marginTop: "8px" }}
            variant="outlined"
            onClick={onUploadFile}
          >
            Upload
          </AppButton>
        </Box>
        <AppDivider />
        <Controller
          name="guest_reception.checkin_method"
          control={control}
          render={({ field: { value, ...others } }) => (
            <AppSelect
              label="Check-in method"
              placeholder="Choose a check-in method"
              withLabel
              options={checkInOptions}
              {...others}
              value={value}
            />
          )}
        />
        <Controller
          name="guest_reception.tell_your_guest"
          control={control}
          render={({ field: { value, ...others } }) => (
            <AppTextArea
              label="Tell your guest to use the self check-in option"
              placeholder="You can type here"
              {...others}
              value={value}
            />
          )}
        />
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

export default GuestReception;
