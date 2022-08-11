import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box, Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import AppDivider from "src/components/elements/Divider";
import AppTextArea from "src/components/elements/TextArea";
import AppTextField from "src/components/elements/TextField";
import AppTypography from "src/components/elements/Typography";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import InputDescription from "src/components/modules/InputDescription";
import { TO_ADD_LISTING_PAGE } from "src/constants";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { ListingStepNavigate } from "src/types/listing";
import { optionalPropertyInformation } from "./data";
import { useAddListingContext } from "src/context";
import { updateProperties } from "src/services/api/listingForm";
import { useStyles } from "./styles";

const PropertyDescription: React.FC = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const classes = useStyles();
  const isSmallSizeDown = useScreenSizeDown("sm");

  const { form } = useAddListingContext();
  const { getValues, setValue } = form;
  const property = getValues();
  const [title, setTitle] = useState(property.name);
  const [description, setDescription] = useState(property.description);
  const [others, setOthers] = useState(property.others || Array.from({ length: 5 }))

  const disableGutters = isSmallSizeDown ? false : true;
  const maxWidth = "sm" as const;
  const { back, next }: ListingStepNavigate = {
    next: { section: "inbetween", step: "two" },
    back: { section: "property-photos", step: "two" },
  };

  const onNext = () => {
    setValue('name', title);
    setValue('description', description);
    setValue('others', others);

    setError(null);
    setLoading(true);
    updateProperties(property, property.id).then(() => {
      router.push(`${TO_ADD_LISTING_PAGE}/${next.step}/${next.section}`)
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
        className={classes.root}
        disableGutters={disableGutters}
        maxWidth={maxWidth}
      >
        <AppTypography
          component="h1"
          neutralColor={900}
          style={{ marginBottom: "48px" }}
          variant="displayMedium"
        >
          Description of property
        </AppTypography>
        <Box className={classes.flexWrapper}>
          <AppTextField
            name="title"
            label="Listing title"
            placeholder="You can type listing title here"
            description={
              <InputDescription
                highlightedText="Tip: "
                normalText="Engage travelers with an ad headline that highlights what makes your place unique."
              />
            }
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <AppTextArea
            name="description"
            label="Place description"
            placeholder="You can type here"
            description={
              <InputDescription
                highlightedText="Advice: "
                normalText="Write a quick summary of your accommodation. 
                You can highlight what makes your space unique, and your neighborhood."
              />
            }
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
        <AppDivider style={{ margin: "32px 0" }} />
        {error && (
          <Alert severity="error" style={{ marginBottom: "24px" }}>
            {error}
          </Alert>
        )}
        <AppTypography
          style={{ marginBottom: "32px" }}
          neutralColor={800}
          variant="heading"
        >
          Add more property information{" "}
          <AppTypography component="span" neutralColor={400} variant="heading">
            (Optional)
          </AppTypography>
        </AppTypography>
        <Box className={classes.flexWrapper}>
          {React.Children.toArray(
            optionalPropertyInformation.map(
              ({ description, ...inputProps }, index) => (
                <AppTextArea
                  {...inputProps}
                  description={<InputDescription {...description} />}
                  value={others[index]}
                  onChange={e => {
                    const value = e.target.value;
                    others.splice(index, 1, value);
                    setOthers([...others]);
                  }}
                />
              )
            )
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
          onClick: () =>
            router.push(`${TO_ADD_LISTING_PAGE}/${back.step}/${back.section}`),
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

export default PropertyDescription;
