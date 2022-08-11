import React from "react";
import { Box, Container, Avatar, Typography, Grid } from "@material-ui/core";
// import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
// import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import { useStyles } from "./styles";
import { expectationItems, expectationItemsTwo } from "./data";
interface Props {
  setEditvalue?: any;
}
const Expectationandsecurity: React.FC<Props> = ({ setEditvalue }) => {
  const classes = useStyles();
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
              <Typography variant="h6">
                Customer expectation and security
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Grid className={classes.photosGalleryMain}>
          <Grid item xs={12} md={8} lg={6} xl={5}>
            <Box className={classes.expectation}>
              <Typography className={classes.expectationTitle}>
                Customer expectation
              </Typography>
              {expectationItems &&
                expectationItems.map((item) => {
                  return (
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      className={classes.expectationContain}
                    >
                      <Typography className={classes.expectationHead}>
                        {item.head}
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        className={classes.checkWrap}
                      >
                        <Avatar src={"/images/YesFill.png"} />
                        <Avatar src={"/images/noFill.png"} />
                        {/* <CheckCircleOutlineIcon className={classes.checkIcon} />
                        <HighlightOffIcon className={classes.closeIcon} /> */}
                      </Box>
                    </Box>
                  );
                })}
            </Box>
            <Box>
              <Typography className={classes.expectationTitle}>
                Security
              </Typography>

              {expectationItemsTwo &&
                expectationItemsTwo.map((item) => {
                  return (
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      className={classes.expectationContain}
                    >
                      <Typography className={classes.expectationHead}>
                        {item.head}
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        className={classes.checkWrap}
                      >
                        <Avatar src={"/images/YesFill.png"} />
                        <Avatar src={"/images/noFill.png"} />
                      </Box>
                      {/* <Box>
                        <CheckCircleOutlineIcon className={classes.checkIcon} />
                        <HighlightOffIcon className={classes.closeIcon} />
                      </Box> */}
                    </Box>
                  );
                })}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Expectationandsecurity;
