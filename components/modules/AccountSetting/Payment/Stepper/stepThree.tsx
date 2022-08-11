import React from "react";
import { Box, Avatar, Typography, Grid } from "@material-ui/core";

import { useStylesSteps } from "../styles";

const StepThree = () => {
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
            What address corresponds to this payment method?
          </Typography>
          <Typography className={classes.stepPara}>
            Provide the address of the bank or financial institution for this
            account. It may be different the address of your home or
            accommodation.
          </Typography>
          <Box className={classes.accountTitle}>
            <Typography>Street address</Typography>
            <input type="next" placeholder="Type street address here" />
          </Box>
          <Box className={classes.accountTitle}>
            <Typography>Apartment, suite, building (optional)</Typography>
            <input type="next" placeholder="Name of the bank" />
          </Box>
          <Box display="flex" alignItems="center" className={classes.cityInput}>
            <Box
              className={classes.accountTitle}
              style={{ paddingRight: "24px" }}
            >
              <Typography>City</Typography>
              <input type="next" placeholder="Quebec" />
            </Box>
            <Box className={classes.accountTitle}>
              <Typography>State / Province</Typography>
              <input type="next" placeholder="State / Province" />
            </Box>
          </Box>
          <Box className={classes.accountTitle}>
            <Typography>Postal code</Typography>
            <input type="next" placeholder="Postal code" />
          </Box>
          <Box className={`${classes.accountTitle} ${classes.regionInput}`}>
            <Typography>Country or region</Typography>
            <input type="next" placeholder="Canada" />
            <Avatar src={"/images/Lock.png"} className={classes.lockIcon} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default StepThree;
