import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { Container } from "@material-ui/core";
import AppCheckBox from "src/components/elements/CheckBox";
import AppDivider from "src/components/elements/Divider";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import StepOneSection from "./StepOneSection";
import StepTwoSection from "./StepTwoSection";
import { useScreenSizeDown } from "src/hooks/screenSize";
import { ListingStepNavigate } from "src/types/listing";
import { buildListingPath } from "src/utils";
import { updateProperties } from "src/services/api";
import { useAddListingContext } from "src/context";
import { useStyles } from "./styles";

const { back, next }: ListingStepNavigate = {
  next: { section: "guest-reception", step: "three" },
  back: { section: "cancellation-policies", step: "three" },
};

const LocalLawsAndTaxes: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [isFinalStep, setIsFinalStep] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const classes = useStyles();
  const router = useRouter();
  const isSmallSizeDown = useScreenSizeDown("sm");

  const { form } = useAddListingContext();
  const { getValues } = form;

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    },
    []
  );

  const handleCancelAction = useCallback(() => {
    if (isFinalStep) {
      setIsFinalStep(false);
    } else {
      router.push(buildListingPath(back));
    }
  }, [isFinalStep]);

  const handleConfirmAction = useCallback(() => {
    if (isFinalStep) {
      checked
        ? onNext()
        : setError("Please check this box to accept local laws");
    } else {
      setIsFinalStep(true);
    }
  }, [isFinalStep, checked]);

  const onNext = () => {
    const property = getValues();
    setError("");
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

  const disableGutters = isSmallSizeDown ? false : true;
  const maxWidth = "sm" as const;

  return (
    <>
      <Container
        disableGutters={disableGutters}
        maxWidth={maxWidth}
        className={classes.root}
      >
        {isFinalStep ? (
          <StepTwoSection>
            <AppCheckBox
              checkBoxProps={{ onChange: handleChange, checked }}
              label="I accept local laws"
              error={Boolean(error)}
              message={error}
            />
          </StepTwoSection>
        ) : (
          <StepOneSection />
        )}
      </Container>
      <AppDivider />
      <ActionButtonGroup
        secondaryBtnProps={{
          onClick: handleCancelAction,
        }}
        primaryBtnProps={{
          disabled: loading,
          onClick: handleConfirmAction,
        }}
        containerProps={{
          maxWidth,
          disableGutters,
        }}
      />
    </>
  );
};

export default LocalLawsAndTaxes;
