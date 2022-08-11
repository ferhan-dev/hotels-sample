import { Box, Container } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { useAddListingContext } from "src/context";
import AppButton from "src/components/elements/Button";
import CheckIcon from "src/components/elements/icons/Check";
import AppImage from "src/components/elements/Image";
import AppTypography from "src/components/elements/Typography";
import { useScreenSizeDown } from "src/hooks/screenSize";
import {
  ListingSectionVariant,
  ListingStepIndexMap,
  ListingStepVariant,
} from "src/types/listing";
import { buildListingPath } from "src/utils";
import { stepItems } from "./data";
import InbetweenStep from "./Step";
import InbetweenStepContent from "./StepContent";
import { useStyles } from "./styles";

interface Props {}

const ListingInbetween: React.FC<Props> = () => {
  const router = useRouter();
  const classes = useStyles();
  const isLargeSizeDown = useScreenSizeDown("lg");

  const { form } = useAddListingContext();
  const { getValues, unregister, setValue } = form;

  const { step } = router.query as { step: ListingStepVariant };

  const cleanStepOneData = () => {
    const amenities = getValues("amenities")?.filter((item: any) => item);
    const securities = getValues("securities")?.filter((item: any) => item);
    const customer_expectations = getValues("customer_expectations")?.filter(
      (item: any) => item
    );
    unregister("amenities");
    unregister("securities");
    unregister("customer_expectations");
    setValue("amenities", amenities);
    setValue("securities", securities);
    setValue("customer_expectations", customer_expectations);
  };

  const cleanStepThreeData = () => {
    unregister("rules");
    unregister("rental_parameters");
  };

  const handleNavigateToNextStep = useCallback(() => {
    const nextSectionStepMap: Record<
      ListingStepVariant,
      { step: ListingStepVariant; section: ListingSectionVariant }
    > = {
      one: { step: "two", section: "profile-photo" },
      two: { step: "three", section: "rules" },
      three: { step: "two", section: "profile-photo" },
    };

    if (step === "one") {
      cleanStepOneData();
    } else if (step === "three") {
      cleanStepThreeData();
      router.push("/");
    }

    if (step === 'one' || step === 'two') {
      const next = nextSectionStepMap[step];
      router.push(buildListingPath(next));
    }
  }, [step]);

  const stepIndexMap: ListingStepIndexMap = {
    one: 0,
    two: 1,
    three: 2,
  };

  return (
    <Container
      className={classes.root}
      disableGutters={isLargeSizeDown ? false : true}
    >
      <Box className={classes.stepperWrapper}>
        <AppTypography variant="displayMedium" style={{ marginBottom: "24px" }}>
          You’re almost there!
        </AppTypography>

        <Box className={classes.flexWrapper} marginBottom="16px">
          {React.Children.toArray(
            stepItems.map((item, index) => (
              <Box className={classes.flexWrapper}>
                <InbetweenStep
                  completed={stepIndexMap[item.id] <= stepIndexMap[step]}
                  title={item.title}
                  subTitle={item.subTitle}
                  label={
                    stepIndexMap[item.id] <= stepIndexMap[step] ? (
                      <CheckIcon color="inherit" style={{ fontSize: "17px" }} />
                    ) : (
                      index + 1
                    )
                  }
                />
                {stepIndexMap[item.id] === stepIndexMap[step] ? (
                  <>
                    {React.Children.toArray(
                      item.contents.map(({ label, section }) => (
                        <InbetweenStepContent
                          label={label}
                          onEditSection={() =>
                            router.push(buildListingPath({ section, step }))
                          }
                        />
                      ))
                    )}
                  </>
                ) : null}
              </Box>
            ))
          )}
        </Box>

        <AppButton
          onClick={handleNavigateToNextStep}
          color="primary"
          variant="contained"
          fullWidth
        >
          {step === "three"
            ? "Send registration form"
            : "Continue With Next Step"}
        </AppButton>
      </Box>
      <AppImage
        className={classes.image}
        src={`/images/step-${step}-inbetween.png`}
      />
    </Container>
  );
};

export default ListingInbetween;
