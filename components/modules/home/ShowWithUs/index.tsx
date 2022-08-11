import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import clsx from "clsx";

import AppButton from "src/components/elements/Button";
import ChatSmileIcon from "src/components/elements/icons/ChatSmile";
import EyeIcon from "src/components/elements/icons/Eye";
import LineChartIcon from "src/components/elements/icons/LineChart";
import ShowWithUsCard from "./Card";
import { useStyles } from "./styles";

const ShowWithUs = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="xl">
      <Box className={classes.textWrapper}>
        <Typography variant="h2">Show with Us</Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          style={{ margin: "8px 0 24px 0", width: "264px" }}
        >
          Listing your property on Glamping Hub couldn't be easier.
        </Typography>
        <AppButton
          style={{ width: "fit-content" }}
          variant="contained"
          color="primary"
        >
          Become Host
        </AppButton>
      </Box>
      <ShowWithUsCard
        className={classes.resizeWidth}
        icon={<ChatSmileIcon />}
        subTitle="ChaletRetreat allows you to accept reservations online."
        title="Chat with your potential customers"
        iconWrapperColor="#F1EEFC"
      />
      <Box className={clsx(classes.flexWrapper, classes.resizeWidth)}>
        <ShowWithUsCard
          icon={<EyeIcon />}
          subTitle="ChaletRetreat allows you to accept reservations online."
          title="Increase your visibility"
          iconWrapperColor="#EEF3FC"
        />
        <ShowWithUsCard
          icon={<LineChartIcon />}
          subTitle="ChaletRetreat allows you to accept reservations online."
          title="Increase your income"
          iconWrapperColor="#F0F9F6"
        />
      </Box>
    </Container>
  );
};

export default ShowWithUs;
