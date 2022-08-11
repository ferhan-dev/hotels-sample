import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useStylesSteps } from "../styles";
interface Props {
  values?: string;
  handleChanges?: (values?: any) => void;
}
const StepOne: React.FC<Props> = ({ handleChanges, values }) => {
  const classes = useStylesSteps();

  return (
    <Grid
      item
      xs={11}
      md={8}
      lg={6}
      xl={4}
      style={{ margin: "40px auto 0px auto" }}
    >
      <Box className={classes.textField}>
        <TextField id="select" value="20" select>
          <MenuItem value="10">UK</MenuItem>
          <MenuItem value="20">Canada</MenuItem>
        </TextField>
      </Box>
      <Box>
        <Typography
          variant="h6"
          style={{ fontSize: "18px", marginBottom: "15px" }}
        >
          Payment methods for Canada
        </Typography>
        <Box>
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
                label="Paypal in CAD"
                className={classes.formListLabel}
              />
              <Box>
                <List className={classes.listForm}>
                  <ListItem>
                    <ListItemText primary=" Receive your payment in 3 to 4 hours " />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Connect your PayPal account" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="May include fees" />
                  </ListItem>
                </List>
              </Box>
              <FormControlLabel
                value="Bank transfer in CAD"
                control={<Radio />}
                label="Bank transfer in CAD"
                className={classes.formListLabel}
              />
              <Box>
                <List className={classes.listForm}>
                  <ListItem>
                    <ListItemText primary="Receive your payment in 5-7 business days" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Weekends and holidays may extend the processing time" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="  No fees" />
                  </ListItem>
                </List>
              </Box>
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Grid>
  );
};
export default StepOne;
