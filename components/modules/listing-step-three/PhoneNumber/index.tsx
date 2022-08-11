import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';
import PhoneInput from "react-phone-input-2";
import { Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import "react-phone-input-2/lib/style.css";
import AppDivider from "src/components/elements/Divider";
import AppTypography from "src/components/elements/Typography";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import PhoneNumberField from "src/components/modules/PhoneNumberField";
import AppRadioGroup from "src/components/elements/Radio";
import PhoneNumberValidationDialog from "./ValidationDialog";
import { FormOption } from "src/types/form";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { ListingStepNavigate } from "src/types/listing";
import { buildListingPath } from "src/utils";
import { phonenumberUser, updatePhoneNumberApi } from "src/services/api";
import { userInfoSelector } from "src/store/selectors/userSelector";
import { useStyles } from "./styles";

const { back, next }: ListingStepNavigate = {
  next: { section: "inbetween", step: "three" },
  back: { section: "guest-reception", step: "three" },
};

const radioOptions: FormOption[] = [
  {
    label: "Yes, customers can use this number",
    value: "yes",
  },
  {
    label: "No, add another number for guests",
    value: "no",
  },
];

const PhoneNumber = () => {
  const userInfo = useSelector(userInfoSelector);
  const phoneNumbers = userInfo?.user_phone_numbers;
  const forGuestNumber = phoneNumbers ? phoneNumbers.filter((phoneNumber: any) => !!phoneNumber.is_for_guests && phoneNumber.verified) : null;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [canUseForGuest, setCanUseForGuest] = useState(true);
  const [primaryPhoneNumber, setPrimaryPhoneNumber] = useState("");
  const [primaryVerified, setPrimaryVerified] = useState(false);
  const [secondaryPhoneNumber, setSecondaryPhoneNumber] = useState("");
  const [secondaryVerified, setSecondaryVerified] = useState(false);
  const [openVerify, setOpenVerify] = useState(false);
  const [primaryPhoneNumberId, setPrimaryPhoneNumberId] = useState(0);
  
  const classes = useStyles();
  const router = useRouter();
  const isSmallSizeDown = useScreenSizeDown("sm");

  const disableGutters = isSmallSizeDown ? false : true;
  const maxWidth = "sm" as const;

  const handleClick = () => {
    if (primaryPhoneNumber && !primaryVerified) {
      setError(null);
      setLoading(true);
      phonenumberUser({
        phone_number: primaryPhoneNumber,
        is_primary: false,
        is_for_guests: false,
      })
      .then((result) => {
        setPrimaryPhoneNumberId(result.id);
        setOpenVerify(true);
      })
      .catch(ex => {
        const error = ex.response?.data;
        if (error) {
          if (ex.response.status === 422) {
            setOpenVerify(true);
          }
        } else {
          setError(ex.message);
        }
      })
      .finally(() => setLoading(false));
    } else if (canUseForGuest) {
      updatePhoneNumberApi({
        is_for_guests: true
      }, primaryPhoneNumberId)
      .then(() => {
        router.push(buildListingPath(next));
      })
      .catch(ex => {
        const error = ex.response?.data;
        if (error) {
          if (ex.response.status === 422) {
            setOpenVerify(true);
          }
        } else {
          setError(ex.message);
        }
      })
      .finally(() => setLoading(false));;
    } else if (secondaryPhoneNumber && !secondaryVerified) {
      setError(null);
      setLoading(true);
      phonenumberUser({
        phone_number: secondaryPhoneNumber,
        is_primary: false,
        is_for_guests: true,
      })
      .then(() => {
        setOpenVerify(true);
      })
      .catch(ex => {
        const error = ex.response?.data;
        if (error) {
          if (ex.response.status === 422) {
            setOpenVerify(true);
          }
        } else {
          setError(ex.message);
        }
      })
      .finally(() => setLoading(false));
    } else if (primaryVerified && secondaryVerified) {
      router.push(buildListingPath(next));
    }
  };

  const handleConfirm = () => {
    setOpenVerify(false);
    if (primaryVerified) {
      setSecondaryVerified(true);
    } else {
      setPrimaryVerified(true);
    }
  };

  useEffect(() => {
    if (forGuestNumber) {
      router.push(buildListingPath(next));
    }
  }, [forGuestNumber]);

  return (
    <>
      <PhoneNumberValidationDialog
        onConfirm={handleConfirm}
        open={openVerify}
        onClose={() => setOpenVerify(false)}
        phone_number={!primaryVerified ? primaryPhoneNumber : secondaryPhoneNumber}
      />
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
          Add your number of mobile
        </AppTypography>
        <AppTypography
          style={{ marginTop: "16px" }}
          neutralColor={500}
          variant="body"
        >
          We will send you reservation requests, reminders and other
          notifications. This number should be able to receive text messages or
          calls.
        </AppTypography>
        <PhoneInput
          country={"us"}
          value={primaryPhoneNumber}
          onChange={(phone: any) => setPrimaryPhoneNumber(phone)}
        />
        {
          primaryVerified && (
            <>
              <AppDivider style={{ margin: "24px 0" }} />
              <AppRadioGroup
                name="support"
                options={radioOptions}
                label="Can customers use this number to contact you?"
                value={canUseForGuest ? "yes" : "no"}
                onChange={(e: any) => {
                  if (e.target.value === "yes") {
                    setCanUseForGuest(true);
                  } else {
                    setCanUseForGuest(false);
                  }
                }}
              />
              {
                !canUseForGuest && (
                  <>
                    <AppDivider style={{ margin: "24px 0" }} />
                    <AppTypography neutralColor={800} variant="heading">
                      What number can guest use for support?
                    </AppTypography>
                    <PhoneNumberField
                      label="Phone Number"
                      optional
                      rootProps={{ style: { margin: "24px 0" } }}
                      verified={secondaryVerified}
                      onChangePhoneNumber={(value) => setSecondaryPhoneNumber(value)}
                    />
                  </>
                )
              }
            </>
          )
        }
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
          onClick: handleClick,
        }}
        containerProps={{
          maxWidth,
          disableGutters,
        }}
      />
    </>
  );
};

export default PhoneNumber;
