import React from "react";
import { Container, Avatar, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import Addresss from "src/components/modules/listing-step-one/Address";
import { Grid, Box } from "@material-ui/core";
interface Props {
  setEditvalue?: any;
}

const Address: React.FC<Props> = ({ setEditvalue }) => {
  const classes = useStyles();
  // const [state, setState] = React.useState({
  //   age: "",
  //   name: "hai",
  // });

  // const handleChange = (event: any) => {
  //   const name = event.target.name;
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   });
  // };

  return (
    <div>
      <Box className={classes.personalInfo}>
        <Container
          className={classes.container}
          onClick={() => setEditvalue("")}
        >
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
              <Typography variant="h6">Address</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container className={classes.container}>
          <Grid className={classes.photosGalleryMain}>
            <Grid item sm={12} md={7} lg={7}>
              <Box className={classes.address}>
                <Addresss />
              </Box>
            </Grid>
            <Grid item sm={12} md={5} lg={5} className={classes.photosTipMain}>
              <Box>
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={"/images/photoTip.png"}
                    className={classes.photoTip}
                  />
                  <Typography variant="h6" className={classes.tipsTitle}>
                    Address
                  </Typography>
                </Box>
                <Box>
                  <Typography className={classes.addressPara}>
                    Only travelers with confirmed reservations will be able to
                    see this marker corresponding to your address.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
export default Address;
