import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { Alert } from "@material-ui/lab";
import { Container } from "@material-ui/core";
import AppDivider from "src/components/elements/Divider";
import AppRadioGroup from "src/components/elements/Radio";
import AppTypography from "src/components/elements/Typography";
import { useAddListingContext } from "src/context";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { FormOption } from "src/types/form";
import { ListingStepNavigate } from "src/types/listing";
import { buildListingPath } from "src/utils";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import AppForm from "src/components/elements/Form";
import { postProperties, updateProperties } from "src/services/api/listingForm";
import { useStyles } from "./styles";

const accessOptions: FormOption[] = [
  {
    info: "Travelers have accommodation in its entirety. The entire accommodation includes usually one bedroom, one bathroom and a kitchen.",
    label: "Entire accommodation",

    value: "entire",
  },
  {
    info: "Travelers have their own private room to sleep. The other rooms can be shared.",
    label: "Private room",
    value: "private",
  },
  {
    info: "Travelers sleep in a room or a common space that they can share with others.",
    label: "Shared room",
    value: "shared",
  },
];

const propertyOptions: FormOption[] = [
  {
    label: "Personal property",
    value: "personal",
  },
  {
    label: "Property dedicated to rental",
    value: "rental",
  },
];

const { next }: ListingStepNavigate = {
  next: { section: "address", step: "one" },
  back: { section: "guests", step: "one" },
};

const PropertyType: React.FC = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { form } = useAddListingContext();
  const router = useRouter();
  const { control, watch, getValues } = form;
  const classes = useStyles();
  const isSmallSizeDown = useScreenSizeDown("sm");

  const handleHost = async () => {
    const propertyId = getValues('id');
    const property = getValues();

    setError(null);
    setLoading(true);
    if (propertyId) {
      updateProperties(property, propertyId)
        .then(() => {
          router.push({
            pathname: buildListingPath({...next})
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
    } else {
      postProperties(property)
        .then((data) => {
          const keys = Object.keys(data);
          // @ts-ignore
          keys.map((key) => form.setValue(key, data[key]));
    
          router.push({
            pathname: buildListingPath({...next})
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
    }
  };
  
  const disableGutters = isSmallSizeDown ? false : true;
  const maxWidth = "sm" as const;
  const disabled = !watch(["property_type1", "property_type2"]).every(Boolean) || loading;

  return (
    <AppForm>
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
          Type of Property
        </AppTypography>
        <Controller
          name="property_type1"
          control={control}
          render={({ field: { value, ...others } }) => (
            <AppRadioGroup
              label="Is it personal property or dedicated only to rental?"
              options={propertyOptions}
              value={value ? value : ""}
              {...others}
            />
          )}
        />
        <AppDivider />
        <Controller
          name="property_type2"
          control={control}
          render={({ field: { value, ...others } }) => (
            <AppRadioGroup
              label="What will travelers have access to?"
              options={accessOptions}
              value={value ? value : ""}
              {...others}
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
          style: { display: "none" },
        }}
        primaryBtnProps={{
          disabled,
          onClick: handleHost,
        }}
        containerProps={{
          maxWidth,
          disableGutters,
        }}
      />
    </AppForm>
  );
};

export default PropertyType;
