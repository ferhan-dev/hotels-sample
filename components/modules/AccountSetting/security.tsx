import React, { useState } from "react";
import {
  Grid,
  Typography,
  Container,
  Box,
  Avatar,
  Button,
} from "@material-ui/core";
import { useSecurityStyles } from "./styles";
import InnerHeader from "./Header";
import { UpdateCurrentPassword } from "src/services/api/auth";

interface Props {
  back: string;
  setValues?: any;
}
const Security: React.FC<Props> = ({ back, setValues }) => {
  const classes = useSecurityStyles();
  const [error, setError] = useState("");
  const [Success, setSuccess]: number | any = useState("");
  const initialPasswordDataState = {
    current_password: "",
    password: "",
    password_confirmation: "",
  };
  const [PasswordData, setPasswordData]: any = useState(
    initialPasswordDataState
  );

  const handleInputChange = (event: any) => {
    setError("");
    const { name, value } = event.target;
    setPasswordData({ ...PasswordData, [name]: value });
  };
  const handlePasswordSave = () => {
    UpdateCurrentPassword(PasswordData)
      .then((d) => {
        setSuccess(d.data);
        setError("");
      })
      .catch((Err) => {
        console.log(Err);
      });
  };
  console.log(error);
  return (
    <>
      <InnerHeader
        head="Security and connections"
        button="Save changes"
        back={back}
        setValues={setValues}
        handlePasswordSave={handlePasswordSave}
        type="password"
      />
      <Box>
        <Container className={classes.container}>
          <Grid>
            <Grid item xs={12} md={8} lg={6}>
              <Box className={classes.securityMain}>
                <Typography variant="h6" className={classes.securityTitle}>
                  Change Password
                </Typography>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {Success == 1 && <p>Password successfully changed</p>}
                <Box className={classes.securityPassword}>
                  <label>Current Password</label>
                  <input
                    type="password"
                    value={PasswordData.current_password}
                    onChange={handleInputChange}
                    name="current_password"
                    placeholder="Current password you are using"
                  />
                </Box>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Box className={classes.securityPassword}>
                  <label>New Password</label>
                  <input
                    type="password"
                    placeholder="New password"
                    value={PasswordData.password}
                    onChange={handleInputChange}
                    name="password"
                  />
                </Box>

                {error && <p style={{ color: "red" }}>{error}</p>}
                <Box className={classes.securityPassword}>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    value={PasswordData.password_confirmation}
                    onChange={handleInputChange}
                    name="password_confirmation"
                    placeholder="Confirm the new password"
                  />
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" className={classes.securityTitle}>
                  Social Networks
                </Typography>
                <Box
                  className={classes.googlePassword}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    className={classes.googleMain}
                  >
                    <Avatar src={"/images/google.png"} />
                    <label>Google</label>
                    <Typography>Connect your Google profile</Typography>
                  </Box>
                  <Box className={classes.addPin}>
                    <span>+</span>
                  </Box>
                </Box>
                <Box
                  className={classes.googlePassword}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    marginTop: "16px",
                    // background: "#FFFFFF",
                    border: "1px solid #EAEEF5",
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    className={classes.googleMain}
                  >
                    <Avatar src={"/images/facebook.png"} />
                    <label>Facebook</label>
                    <Typography>Connect your Facebook profile</Typography>
                  </Box>
                  <Box className={classes.addPin}>
                    <span>+</span>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Button className={classes.btnSaves}>Save Changes</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Security;
