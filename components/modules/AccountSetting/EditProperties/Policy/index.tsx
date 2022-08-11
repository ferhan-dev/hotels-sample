import React from "react";
import { useStyles } from "./styles";
import {
  Box,
  Container,
  Avatar,
  Typography,
  Grid,
  NativeSelect,
  FormControl,
} from "@material-ui/core";
interface Props {
  setEditvalue?: any;
}
const Policy: React.FC<Props> = ({ setEditvalue }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event: any) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div>
      <Box className={classes.personalInfo} onClick={() => setEditvalue("")}>
        <Container className={classes.container}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            style={{ paddingBottom: "25px" }}
          >
            <Box display="flex" alignItems="center">
              <Avatar
                src={"/images/leftArrow.png"}
                className={classes.leftArrow}
              />
              <Typography variant="h6">Cancellation policy</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Grid className={classes.photosGalleryMain}>
          <Grid item xs={11} md={6} lg={5}>
            <Box>
              <Typography className={classes.policyTitle}>
                Cancellation policy type
              </Typography>
              <FormControl className={classes.formControl}>
                <NativeSelect
                  value={state.age}
                  onChange={handleChange}
                  name="age"
                  className={classes.selectEmpty}
                  inputProps={{ "aria-label": "age" }}
                >
                  <option value="">Flexible</option>
                  <option value={10}>notFlexible</option>
                </NativeSelect>
              </FormControl>
              <Typography className={classes.policyHead}>
                You will receive a full refund as long as you cancel at least 24
                hours prior to check-in. You will receive a full refund, less
                the first night, if you cancel within 24 hours of check-in.
              </Typography>
              <Typography className={classes.policyHead}>
                Any refund will be at the discretion of the host if you cancel
                after check-in.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Policy;
