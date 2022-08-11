import React from "react";
import { Box, Container, Avatar, Typography, Grid } from "@material-ui/core";

import { useStyles } from "./styles";
import AppTextArea from "src/components/elements/TextArea";
interface Props {
  setEditvalue?: any;
}
const Description: React.FC<Props> = ({ setEditvalue }) => {
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
              <Typography variant="h6">Description of the property</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Grid className={classes.photosGalleryMain}>
          <Grid item xs={11} md={7} lg={7} xl={5}>
            <Box className={classes.fullAddress}>
              <Typography
                variant="h6"
                className={`${classes.listTitle} ${classes.listHead}`}
              >
                Listing title<span>*</span>
              </Typography>
              <input type="text" placeholder="Chalet Name" />
              <Box display="flex" alignItems="baseline">
                <Avatar
                  src={"/images/infoIcon.png"}
                  className={classes.infoIcon}
                />
                <Typography variant="h6" className={classes.listTip}>
                  <span>Tip:</span> Engage travelers with an ad headline that
                  highlights what makes your place unique.
                </Typography>
              </Box>
            </Box>
            <Box className={classes.fullAddress}>
              <Typography variant="h6" className={classes.listTitle}>
                Place description<span>*</span>
              </Typography>
              <AppTextArea
                name="text"
                label="Tell your guest to use the self check-in option"
                placeholder="You can type here"
              />
              <Box
                display="flex"
                alignItems="baseline"
                className={classes.listInfo}
              >
                <Avatar
                  src={"/images/infoIcon.png"}
                  className={classes.infoIcon}
                />
                <Typography variant="h6" className={classes.listTip}>
                  <span>Advice:</span> Write a quick summary of your
                  accommodation. You can highlight what makes your space unique,
                  and your neighborhood.
                </Typography>
              </Box>
            </Box>
            <Typography variant="h6" className={classes.accomodation}>
              Add more property information <span>(Optional)</span>
            </Typography>
            <Box className={classes.fullAddress}>
              <Typography variant="h6" className={classes.listTitle}>
                Your accomodation
              </Typography>
              <AppTextArea
                name="text"
                label="Tell your guest to use the self check-in option"
                placeholder="You can type here"
              />
              <Box
                display="flex"
                alignItems="baseline"
                className={classes.adviseInfo}
              >
                <Avatar
                  src={"/images/infoIcon.png"}
                  className={classes.infoIcon}
                />
                <Typography variant="h6" className={classes.listTip}>
                  <span>Advice:</span>Include any other details that can help
                  travelers set their expectations for their stay.
                </Typography>
              </Box>
            </Box>
            <Box className={classes.fullAddress}>
              <Typography variant="h6" className={classes.listTitle}>
                Your availabilities
              </Typography>
              <AppTextArea
                name="text"
                label="Tell your guest to use the self check-in option"
                placeholder="You can type here"
              />
              <Box
                display="flex"
                alignItems="baseline"
                className={classes.adviseInfo}
              >
                <Avatar
                  src={"/images/infoIcon.png"}
                  className={classes.infoIcon}
                />
                <Typography variant="h6" className={classes.listTip}>
                  <span>Advice:</span> Let travelers know your availability
                  during their stay. For your safety, do not share your phone
                  number or email address until you have confirmed a
                  reservation.
                </Typography>
              </Box>
            </Box>
            <Box className={classes.fullAddress}>
              <Typography variant="h6" className={classes.listTitle}>
                Your neighbourhod
              </Typography>
              <AppTextArea
                name="text"
                label="Tell your guest to use the self check-in option"
                placeholder="You can type here"
              />
              <Box
                display="flex"
                alignItems="baseline"
                className={classes.adviseInfo}
              >
                <Avatar
                  src={"/images/infoIcon.png"}
                  className={classes.infoIcon}
                />
                <Typography variant="h6" className={classes.listTip}>
                  <span>Advice:</span>Showcase what makes your neighborhood
                  unique, such as your café, your favorite park or other unique
                  places.
                </Typography>
              </Box>
            </Box>
            <Box className={classes.fullAddress}>
              <Typography variant="h6" className={classes.listTitle}>
                Move
              </Typography>
              <AppTextArea
                name="text"
                label="Tell your guest to use the self check-in option"
                placeholder="You can type here"
              />
              <Box
                display="flex"
                alignItems="baseline"
                className={classes.adviseInfo}
              >
                <Avatar
                  src={"/images/infoIcon.png"}
                  className={classes.infoIcon}
                />
                <Typography variant="h6" className={classes.listTip}>
                  <span>Advice:</span>Tell travelers what they need to know
                  about your neighborhood, such as transportation in common
                  nearby, traffic advice or walking routes to do.
                </Typography>
              </Box>
            </Box>
            <Box className={classes.fullAddress}>
              <Typography variant="h6" className={classes.listTitle}>
                Other informations
              </Typography>
              <AppTextArea
                name="text"
                label="Tell your guest to use the self check-in option"
                placeholder="You can type here"
              />
              <Box
                display="flex"
                alignItems="baseline"
                className={classes.adviseInfo}
              >
                <Avatar
                  src={"/images/infoIcon.png"}
                  className={classes.infoIcon}
                />
                <Typography variant="h6" className={classes.listTip}>
                  Is there anything anything else that Guests should know about
                  your property?
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Description;
