import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import InnerHeader from "./Header";
import { updateUser } from "src/services/api/auth";
import {
  Avatar,
  Box,
  Container,
  Grid,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from "@material-ui/core";
import { GetphonenumberUser } from "src/services/api/auth";
import { usePersonalStyles } from "./styles";
import { getMeAction } from "src/store/actions/userAction";
interface Props {
  back: string;
  setValues?: any;
  getMeData: any;
}
const PersonalInfo: React.FC<Props> = ({ back, setValues, getMeData }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeAction());
  }, []);

  const initialTutorialState: any = {
    name: getMeData.name,
    birthdate: getMeData.birthdate,
    picture: getMeData.picture,
    language: "English",
  };
  
  const [value, setValue] = React.useState("female");
  const [preview, setPreview]: any = useState(null);
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
    
  const handleInputChange: any = useCallback((event: any, type: any) => {
    if (type == "file") {
      setPreview(URL.createObjectURL(event.target.files[0]));
      setCurrentTutorial({
        ...currentTutorial,
        picture: {
          name: event.target.files[0].name,
          url: `http://localhost:3000/storage/chaletretreat/user/${event.target.files[0].name}`,
        },
      });
    } else {
      const { name, value } = event.target;
      setCurrentTutorial({ ...currentTutorial, [name]: value });
    }
  }, []);

  const handleUpdateUser = async () => {
    await updateUser(currentTutorial)
      .then(() => {
        GetphonenumberUser();
        dispatch(getMeAction());
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const classes = usePersonalStyles();

  return (
    <>
      <InnerHeader
        head="Personal information"
        button="Save"
        back={back}
        setValues={setValues}
        handleUpdateUser={handleUpdateUser}
      />
      <Box>
        <Container className={classes.container}>
          <Grid>
            <Grid item xs={12} lg={7}>
              <Box
                className={classes.profileMain}
                display="flex"
                alignItems="center"
              >
                <Avatar src={preview} className={classes.uploadProfile} />
                <Box className={classes.uploadImage}>
                  <span>Upload New Photo</span>
                  <input
                    type="file"
                    name="picture"
                    // value={getMeData.picture}
                    onChange={(e) => handleInputChange(e, "file")}
                    accept=".jpeg , .png , .jpg"
                  />
                </Box>
                <Button
                  className={classes.buttonDelete}
                  onClick={() => {
                    setPreview("");
                  }}
                >
                  <Avatar
                    src={"/images/redClose.png"}
                    className={classes.closeIcon}
                  />
                  Delete Photo
                </Button>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                className={classes.profileNames}
              >
                <Box
                  className={classes.inputName}
                  sx={{ paddingRight: "24px" }}
                >
                  <label>First name</label>
                  <input
                    type="name"
                    placeholder="Elon"
                    value={getMeData?.name?.split(" ")[0]}
                    onChange={(e) => e.target.value}
                  />
                </Box>
                <Box className={classes.inputName}>
                  <label>Last name</label>
                  <input
                    type="name"
                    placeholder="Musk"
                    value={getMeData?.name?.split(" ")[1]}
                    onChange={(e) => e.target.value}
                  />
                </Box>
              </Box>
              <Box
                className={classes.inputRadio}
                display="flex"
                alignItems="center"
              >
                <FormControl component="fieldset">
                  <FormLabel component="legend" className={classes.legend}>
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={handleChange}
                    className={classes.radioGroup}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box className={classes.inputbirthday}>
                <Box className={classes.birthdayData}>
                  <label className={classes.legend}>Birthday</label>
                  <TextField
                    id="date"
                    type="date"
                    // defaultValue="2017-05-24"
                    name="birthdate"
                    className={classes.textField}
                    value={getMeData.birthdate}
                    onChange={handleInputChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />{" "}
                </Box>
              </Box>
              <Box marginTop="32px">
                <label className={classes.contact}>Contact</label>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{ marginTop: "24px" }}
                  className={classes.profileNames}
                >
                  <Box
                    className={classes.inputName}
                    sx={{ paddingRight: "24px" }}
                  >
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="elonmusk@gmail.com"
                      value={getMeData?.email}
                    />
                  </Box>
                  <Box
                    className={classes.inputName}
                    sx={{ position: "relative" }}
                  >
                    <label>Phone Number</label>
                    <input
                      className={classes.inputNumber}
                      type="number"
                      placeholder="(552) 580 / 1552"
                    />
                    <Avatar
                      src={"/images/arrowDown.png"}
                      className={classes.arrowIcons}
                    />
                  </Box>
                </Box>
              </Box>
              {/* <Box>
                <AppButton className={classes.btnSaves}>Save</AppButton>
              </Box> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PersonalInfo;
