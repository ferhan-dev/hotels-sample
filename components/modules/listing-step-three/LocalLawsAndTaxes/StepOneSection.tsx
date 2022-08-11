import { Box } from "@material-ui/core";
import React, { useState } from "react";
import AppButton from "src/components/elements/Button";
import AppDivider from "src/components/elements/Divider";
import AddIcon from "src/components/elements/icons/Add";
import AppTextField from "src/components/elements/TextField";
import AppTypography from "src/components/elements/Typography";
import { useStyles } from "./styles";

import { useAddListingContext } from "src/context";

const StepOneSection = () => {
  const { form } = useAddListingContext();
  const { register, getValues } = form;
  const taxes = getValues("taxes");
  const [noOfTaxes, setNoOfTaxes] = useState(taxes?.length ?? 0);

  const classes = useStyles();
  return (
    <>
      <AppTypography component="h2" neutralColor={900} variant="displayMedium">
        Local laws and taxes
      </AppTypography>

      <AppTextField
        name="tax_registration_number"
        register={register}
        label="Registration number"
        placeholder="Type here"
        optional
        description={
          <AppTypography
            style={{ marginTop: "16px" }}
            neutralColor={600}
            variant="body"
          >
            If you need to display a license number on your list to operate
            in your territory, be sure to put it here.
          </AppTypography>
        }
      />
      <AppDivider />
      <Box>
        <AppTypography
          neutralColor={900}
          style={{ marginBottom: "8px" }}
          variant="heading"
        >
          Taxes
        </AppTypography>
        <AppTypography neutralColor={500} variant="body">
          Indicate the taxes you wish to add to your base price if you have not
          already included them in your base price. Ex.: GST, QST, etc.
        </AppTypography>
      </Box>
      {React.Children.toArray(
        Array.from({ length: noOfTaxes }).map((_, index) => (
          <Box className={classes.flexWrapper}>
            <AppTextField
              label="Tax name"
              placeholder="Type here"
              optional
              register={register}
              name={`taxes.${index}.name`}
            />
            <AppTextField
              name={`taxes.${index}.value`}
              register={register}
              label="Tax value"
              placeholder="%"
              optional
              style={{ maxWidth: "30.44%" }}
            />
          </Box>
        ))
      )}
      <AppButton
        fullWidth
        startIcon={<AddIcon style={{ fontSize: "13.7px" }} />}
        variant="outlined"
        onClick={() => setNoOfTaxes((prevNo: number) => prevNo + 1)}
      >
        Add Tax
      </AppButton>
    </>
  );
};

export default StepOneSection;
