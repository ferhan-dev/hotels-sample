import { Box, Typography } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import React from "react";
import AppLink from "src/components/elements/Link";
import { useSmallSize } from "src/hooks/screenSize";
import { useSecondaryStyles } from "./styles";

const links = [
  {
    label: "Data privacy policy protection",
    path: "/",
  },
  {
    label: "Terms & Conditions",
    path: "/",
  },
  {
    label: "Sitemap",
    path: "/",
  },
];

const SecondaryFooter = () => {
  const classes = useSecondaryStyles();
  const isSmallSize = useSmallSize();
  return (
    <>
      <Box className={classes.folder}>
        <Typography
          className={classes.folderText}
          color="textPrimary"
          variant="body2"
        >
          QUEBEC
          <ChevronRight fontSize="inherit" style={{ fontSize: "14px" }} />
        </Typography>
      </Box>
      <Box
        className={classes.flexWrapper}
        height="64px"
        justifyContent="space-between"
        gridGap={isSmallSize ? "32px" : undefined}
      >
        <Typography className={classes.buttonText} variant="body2">
          © 2021 ChaletRetreat. All rights reserved.{" "}
        </Typography>
        <Box
          className={classes.flexWrapper}
          gridGap={isSmallSize ? "12px" : "24px"}
          paddingBottom={isSmallSize ? "64px" : undefined}
          marginTop="15px"
        >
          {React.Children.toArray(
            links.map(({ path, label }) => (
              <AppLink href={path} color="textPrimary" variant="body2">
                {label}
              </AppLink>
            ))
          )}
        </Box>
      </Box>
    </>
  );
};

export default SecondaryFooter;
