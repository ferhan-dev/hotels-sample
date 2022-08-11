import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { useRouter } from "next/router";
import { Alert } from "@material-ui/lab";
import AppDivider from "src/components/elements/Divider";
import AppTypography from "src/components/elements/Typography";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { ListingStepNavigate } from "src/types/listing";
import { buildListingPath } from "src/utils";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import AmenitiesCollapsible from "./Collapsible";
import { sections } from "./data";
import { useAddListingContext } from "src/context";
import { updateProperties } from "src/services/api/listingForm";
import { useStyles } from "./styles";

const { back, next }: ListingStepNavigate = {
  next: { section: "inbetween", step: "one" },
  back: { section: "customer-expectations-and-security", step: "one" },
};

const Amenitites: React.FC = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { form } = useAddListingContext();
  const { getValues } = form;
  const classes = useStyles();
  const router = useRouter();
  const isLargeSizeDown = useScreenSizeDown("lg");

  const disableGutters = isLargeSizeDown ? false : true;
  const maxWidth = "lg" as const;

  const onNext = () => {
    const property = getValues();
    setError(null);
    setLoading(true);
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
          variant="displayMedium"
        >
          Amenities
        </AppTypography>
        {React.Children.toArray(
          sections.map((section, index, type) => (
            <AmenitiesCollapsible
              initialValue={index === 0}
              section={section}
              type={type}
            />
          ))
        )}
        <AppDivider style={{ margin: "24px 0" }} />
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

export default Amenitites;
