import React from "react";

import { Typography, Grid, Box } from "@material-ui/core";

import { useStylesSteps } from "../styles";

const StepFour = () => {
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
        <Box className={classes.confirmAccount}>
          <Typography className={classes.stepTitle}>
            Confirm your account details
          </Typography>
          <Box className={classes.accountTitle}>
            <Typography>Payment method</Typography>
            <input type="next" placeholder="Bank transfer in CAD" />
          </Box>
          <Box className={classes.accountTitle}>
            <Typography>Bank account type</Typography>
            <input type="next" placeholder="Verification" />
          </Box>
          <Box className={classes.accountTitle}>
            <Typography>Name of the account holder</Typography>
            <input type="next" placeholder="Erkan Tecim" />
          </Box>
          <Box className={classes.accountTitle}>
            <Typography>Name of the bank</Typography>
            <input type="next" placeholder="National Bank" />
          </Box>
          <Box className={classes.accountTitle}>
            <Typography>Transit number</Typography>
            <input type="next" placeholder="123" />
          </Box>
          <Box className={classes.accountTitle}>
            <Typography>Financial Institution number</Typography>
            <input type="next" placeholder="123" />
          </Box>
          <Box className={classes.accountTitle}>
            <Typography>Account number</Typography>
            <input type="next" placeholder="3248239823" />
          </Box>
          <Box className={classes.accountTitle}>
            <Typography>Account address</Typography>
            <input
              type="next"
              placeholder="170 Chemin de Blue Hills, Morin-Heights, Québec, J0R 1H0"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default StepFour;
