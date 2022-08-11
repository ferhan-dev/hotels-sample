import React from "react";

import { Box, Container, Avatar, Typography, Grid } from "@material-ui/core";
import { useScreenSizeDown } from "src/hooks";
import { sections } from "src/components/modules/listing-step-one/Amenities/data";
import AmenitiesCollapsible from "src/components/modules/listing-step-one/Amenities/Collapsible";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import AppCheckBox from "src/components/elements/CheckBox";
// import { settingAmenties } from "./data";
// import { useForm } from "react-hook-form";
import { useStyles } from "./styles";
interface Props {
  setEditvalue?: any;
}
const Amenities: React.FC<Props> = ({ setEditvalue }) => {
  const classes = useStyles();
  // const { control } = useForm();
  const isLargeSizeDown = useScreenSizeDown("lg");

  const disableGutters = isLargeSizeDown ? false : true;
  const maxWidth = "lg" as const;
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
              <Typography variant="h6">Amenities</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container className={classes.container}>
          {/* <AppTypography
            component="h2"
            neutralColor={900}
            variant="displayMedium"
          >
            Amenities
          </AppTypography> */}
          <Grid className={classes.photosGalleryMain}>
            <Grid item xs={12}>
              <Container
                disableGutters={disableGutters}
                maxWidth={maxWidth}
                className={classes.root}
              >
                <Box>
                  {" "}
                  {React.Children.toArray(
                    sections.map((section, index) => (
                      <AmenitiesCollapsible
                        initialValue={index === 0}
                        section={section}
                        type="amen"
                      />
                    ))
                  )}
                </Box>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
export default Amenities;
