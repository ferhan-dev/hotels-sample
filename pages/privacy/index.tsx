import { Box, Container, Typography } from "@material-ui/core";
import React from "react";

import { properties } from "../../components/modules/privacy/data";
import { useStyles } from "../../components/modules/privacy/styles";

const PrivacyArticle = () => {
  const classes = useStyles();

  return (
    <Box style={{ paddingBottom: "160px" }}>
      <Box className={classes.background}>
        <Container disableGutters className={classes.container} maxWidth="lg">
          {React.Children.toArray(
            properties.map((property) => (
              <>
                <Typography variant="body1">
                  {property.header}
                </Typography>
                <Typography
                  color="textSecondary"
                  className={classes.subTitle}
                  variant="body2"
                >
                  {property.body}
                </Typography>
              </>
            ))
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default PrivacyArticle;
