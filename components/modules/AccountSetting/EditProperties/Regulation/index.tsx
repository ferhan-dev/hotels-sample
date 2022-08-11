import React from "react";
import {
  Box,
  Container,
  Avatar,
  Typography,
  Grid,
  NativeSelect,
  FormControl,
} from "@material-ui/core";
// import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
// import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useStyles } from "./styles";
interface Props {
  setEditvalue?: any;
}
const Regulation: React.FC<Props> = ({ setEditvalue }) => {
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
              <Typography variant="h6">Regulation</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Grid className={classes.photosGalleryMain}>
          <Grid item xs={11} md={7} lg={5}>
            <Box>
              <Box
                className={classes.expectation}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography className={classes.expectationHead}>
                  Minimum age to rent
                </Typography>
                <FormControl className={classes.formControl}>
                  <NativeSelect
                    value={state.age}
                    onChange={handleChange}
                    name="age"
                    className={classes.selectEmpty}
                    inputProps={{ "aria-label": "age" }}
                  >
                    <option value="">18</option>
                    <option value={10}>20</option>
                    <option value={20}>19</option>
                  </NativeSelect>
                </FormControl>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                className={classes.expectationContain}
              >
                <Typography className={classes.expectationHead}>
                  Suitable for children <span>(2-12 years)</span>
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.checkWrap}
                >
                  <Avatar src={"/images/YesFill.png"} />
                  <Avatar src={"/images/noFill.png"} />
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                className={classes.expectationContain}
              >
                <Typography className={classes.expectationHead}>
                  Suitable for babies <span>(under 2 years old)</span>
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.checkWrap}
                >
                  <Avatar src={"/images/YesFill.png"} />
                  <Avatar src={"/images/noFill.png"} />
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                className={classes.expectationContain}
              >
                <Typography className={classes.expectationHead}>
                  Pets allowed
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.checkWrap}
                >
                  <Avatar src={"/images/YesFill.png"} />
                  <Avatar src={"/images/noFill.png"} />
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                className={classes.expectationContain}
              >
                <Typography className={classes.expectationHead}>
                  Smoking allowed inside
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.checkWrap}
                >
                  <Avatar src={"/images/YesFill.png"} />
                  <Avatar src={"/images/noFill.png"} />
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                className={classes.expectationContain}
              >
                <Typography className={classes.expectationHead}>
                  Possible events or parties
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.checkWrap}
                >
                  <Avatar src={"/images/YesFill.png"} />
                  <Avatar src={"/images/noFill.png"} />
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                className={classes.expectationContain}
              >
                <Typography className={classes.expectationHead}>
                  Events allowed
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.checkWrap}
                >
                  <Avatar src={"/images/YesFill.png"} />
                  <Avatar src={"/images/noFill.png"} />
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                className={classes.expectationContain}
              >
                <Typography className={classes.expectationHead}>
                  Open fires allowed
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.checkWrap}
                >
                  <Avatar src={"/images/YesFill.png"} />
                  <Avatar src={"/images/noFill.png"} />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Regulation;
