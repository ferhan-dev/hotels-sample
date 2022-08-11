import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Avatar, Typography, Grid } from "@material-ui/core";
import AppRadioGroup from "src/components/elements/Radio";
import { Controller, useForm } from "react-hook-form";
import { FormOption } from "src/types/form";

const accessOptions: FormOption[] = [
  {
    info: "Travelers have accommodation in its entirety. The entire accommodation includes usually one bedroom, one bathroom and a kitchen.",
    label: "Entire accommodation",

    value: "entire",
  },
  {
    info: "Travelers have their own private room to sleep. The other rooms can be shared.",
    label: "Private room",
    value: "private",
  },
  {
    info: "Travelers sleep in a room or a common space that they can share with others.",
    label: "Shared room",
    value: "shared",
  },
];
const rentalOption: FormOption[] = [
  {
    label: "Personal property",
    value: "entire",
  },
  {
    label: "Property dedicated to rental",
    value: "private",
  },
];
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1600px",
  },
  personalInfo: {
    boxShadow: "0px 1px 0px #eaeef5",
    paddingTop:"24px",
    "& h6": {
      fontSize: "18px",
      color: "#090F1B",
    },
  },
  leftArrow: {
    width: "12px",
    height: "12px",
    marginRight: "30px",
    marginLeft: "40px",
    [theme.breakpoints.down(576)]: {
      marginLeft: "10px",
    },
  },
  photosGalleryMain: {
    padding: "40px 0px",
    display: "flex",
    justifyContent: "center",
  },
  propertyRental: {
    borderBottom: "1px solid #EAEEF5",
    paddingBottom: "24px",
    marginBottom: "24px",
  },
}));
interface Props {
  setEditvalue?: any;
}
const Propertytype: React.FC<Props> = ({ setEditvalue }) => {
  const classes = useStyles();
  const { control } = useForm();

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
              <Typography variant="h6">Property Type</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Grid className={classes.photosGalleryMain}>
          <Grid item xs={11} md={7} lg={5}>
            <Box>
              <Controller
                name="property_type2"
                control={control}
                render={({ field: { value, ...others } }) => (
                  <>
                    <Box className={classes.propertyRental}>
                      <AppRadioGroup
                        label="Is it personal property or dedicated only to rental?"
                        options={rentalOption}
                        value={value ? value : ""}
                        {...others}
                      />
                    </Box>
                    <AppRadioGroup
                      label="What will travelers have access to?"
                      options={accessOptions}
                      value={value ? value : ""}
                      {...others}
                    />
                  </>
                )}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Propertytype;
