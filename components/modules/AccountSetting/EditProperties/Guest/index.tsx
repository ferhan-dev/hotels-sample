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
import Counter from "src/components/modules/Counter";
interface Props {
  setEditvalue?: any;
}
const Guest: React.FC<Props> = ({ setEditvalue }) => {
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
              <Typography variant="h6">Guests area</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Grid className={classes.photosGalleryMain}>
          <Grid item xs={11} md={7} lg={7} xl={5}>
            <Box className={classes.fullAddress}>
              <Typography variant="h6" className={classes.listTitle}>
                Maximum number of guests<span>*</span>
              </Typography>
              <FormControl className={classes.formControl}>
                <NativeSelect
                  value={state.age}
                  onChange={handleChange}
                  name="age"
                  className={classes.selectEmpty}
                  inputProps={{ "aria-label": "age" }}
                >
                  <option value="">Choose max. number of guests</option>
                  <option value={10}>4</option>
                  <option value={20}>7</option>
                </NativeSelect>
              </FormControl>
            </Box>
            <Box className={classes.countGuest}>
              <Counter
                optional
                label="Queen size"
                value={0}
                onChange={() => console.log()}
              />
            </Box>
            <Box className={classes.countGuest}>
              <Counter
                optional
                label="Queen size"
                value={0}
                onChange={() => console.log()}
              />
              <Box
                className={classes.guestArea}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography className={classes.guestBed}>
                    Common area
                  </Typography>
                  <Typography className={classes.guestbedCount}>
                    7 beds
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={"/images/edit.png"}
                    className={classes.editIcon}
                  />
                  <Typography className={classes.editTitle}>Edit</Typography>
                </Box>
              </Box>
              <Box
                className={classes.guestArea}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography className={classes.guestBed}>
                    Small room
                  </Typography>
                  <Typography className={classes.guestbedCount}>
                    2 beds
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={"/images/edit.png"}
                    className={classes.editIcon}
                  />
                  <Typography className={classes.editTitle}>Edit</Typography>
                </Box>
              </Box>
              <Box
                className={classes.guestArea}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography className={classes.guestBed}>
                    Parents bedroom
                  </Typography>
                  <Typography className={classes.guestbedCount}>
                    1 beds
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={"/images/edit.png"}
                    className={classes.editIcon}
                  />
                  <Typography className={classes.editTitle}>Edit</Typography>
                </Box>
              </Box>
              <Box
                className={classes.guestArea}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography className={classes.guestBed}>Salon</Typography>
                  <Typography className={classes.guestbedCount}>
                    1 beds
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={"/images/edit.png"}
                    className={classes.editIcon}
                  />
                  <Typography className={classes.editTitle}>Edit</Typography>
                </Box>
              </Box>
            </Box>
            <Box className={classes.countGuest} style={{ borderBottom: "0" }}>
              <Counter
                optional
                label="Queen size"
                value={0}
                onChange={() => console.log()}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Guest;
