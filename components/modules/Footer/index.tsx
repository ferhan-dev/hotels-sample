import { AppBar, Container } from "@material-ui/core";
import React from "react";
import PrimaryFooter from "./Primary";
import SecondaryFooter from "./Secondary";

import { useStyles } from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar
      className={classes.appbar}
      variant="outlined"
      position="sticky"
      component="footer"
    >
      <Container className={classes.container} maxWidth="lg">
        <PrimaryFooter />
        <SecondaryFooter />
      </Container>
    </AppBar>
  );
};

export default Footer;
