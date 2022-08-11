import React from "react";
import {
  Box,
  Typography,
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

import { useStylesSteps } from "../styles";
interface Props {
  values?: string;
  handleChanges?: (values?: any) => void;
}
const StepTwo: React.FC<Props> = ({ handleChanges, values }) => {
  const classes = useStylesSteps();
  return (
    <Grid>
      <Grid
        item
        xs={10}
        md={8}
        lg={6}
        xl={4}
        style={{ margin: "40px auto 0px auto" }}
      >
        <Box>
          <Typography className={classes.stepTitle}>
            Enter your bank details
          </Typography>
          <Box>
            <Typography style={{ marginBottom: "10px" }}>
              Bank account types
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={values}
                onChange={handleChanges}
              >
                <FormControlLabel
                  value="Paypal in CAD"
                  control={<Radio />}
                  label="Checking"
                  className={classes.formListLabel}
                />
                <FormControlLabel
                  value="Savings"
                  control={<Radio />}
                  label="Savings"
                  className={classes.formListLabel}
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box className={classes.accountTitle}>
            <Typography>Name of the account holder</Typography>
            <input type="next" placeholder="Type card name here" />
          </Box>
          <Box className={classes.accountTitle}>
            <Typography>Name of the bank</Typography>
            <input type="next" placeholder="Name of the bank" />
          </Box>
          <Box className={classes.accountTitle}>
            <Typography>Bank code</Typography>
            <input type="next" placeholder="Bank code" />
          </Box>
          <Box className={classes.accountTitle}>
            <Typography>Bank institution code</Typography>
            <input type="next" placeholder="Bank institution code" />
          </Box>
          <Box className={classes.accountTitle}>
            <Typography>Account number</Typography>
            <input type="next" placeholder="Account number" />
          </Box>
          <Box className={classes.accountTitle}>
            <Typography>Confirm the account number</Typography>
            <input type="next" placeholder="Confirm the account number" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default StepTwo;
