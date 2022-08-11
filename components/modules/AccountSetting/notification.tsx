import React from "react";
import { useNotificationStyles } from "./styles";
import {
  Box,
  Container,
  Avatar,
  Typography,
  Grid,
  Switch,
} from "@material-ui/core";
import InnerHeader from "./Header";

interface Props {
  back: string;
  setValues?: any;
}
const Notification: React.FC<Props> = ({ back, setValues }) => {
  const classes = useNotificationStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <InnerHeader
        head="Notifications"
        button=""
        back={back}
        setValues={setValues}
      />
      {/* <Box className={classes.personalInfo}>
        <Container className={classes.container}>
          <Box>
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
                <Typography variant="h6">Notifications</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box> */}
      <Box>
        <Container className={classes.container}>
          <Grid>
            <Grid item sm={12} md={10} lg={8} xl={7}>
              <Box className={classes.platformWrap}>
                <Typography variant="h6" className={classes.platformTitle}>
                  Platform notifications
                </Typography>
                <Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.activeNotification}
                  >
                    <Box>
                      <Typography variant="h6">Active notifications</Typography>
                      <Typography>
                        For all activities (reservations, messages, comments,
                        etc.)
                      </Typography>
                    </Box>
                    <Box>
                      <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.activeNotification}
                  >
                    <Box>
                      <Typography variant="h6">Send text send</Typography>
                      <Typography>Send an email</Typography>
                    </Box>
                    <Box>
                      <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.activeNotification}
                  >
                    <Box>
                      <Typography variant="h6">Send an email</Typography>
                      <Typography>
                        For all activities (reservations, messages, comments,
                        etc.)
                      </Typography>
                    </Box>
                    <Box>
                      <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    </Box>
                  </Box>
                  <Box className={classes.changeMail} display="flex">
                    <Typography variant="h6">Send to e-mail address</Typography>
                    <input type="email" placeholder="erkantecim@gmail.com" />
                    <Typography variant="button">Change Mail</Typography>
                    <Avatar
                      src={"/images/edit.png"}
                      className={classes.editIcon}
                    />
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    className={classes.platformTitle}
                    style={{ marginBottom: "5px", marginTop: "32px" }}
                  >
                    Marketing notifications
                  </Typography>
                  <Typography className={classes.marketTitle}>
                    As a reminder of holidays etc.
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.activeNotification}
                  >
                    <Box>
                      <Typography variant="h6">
                        Active notifications and emails
                      </Typography>
                      <Typography>
                        For all activities (reservations, messages, comments,
                        etc.)
                      </Typography>
                    </Box>
                    <Box>
                      <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
export default Notification;
