import { Avatar, Box, Grid, Typography } from "@material-ui/core";
import React from "react";

import InstagramIcon from "src/components/elements/icons/Instagram";
import PinInterestIcon from "src/components/elements/icons/PinInterest";
import TwitterIcon from "src/components/elements/icons/Twitter";
import YoutubeIcon from "src/components/elements/icons/Youtube";
import AppLink from "src/components/elements/Link";
import { COMPANY_NAME } from "src/constants";
import { footerSections } from "./data";
import { usePrimaryStyles } from "./styles";

const gridItemProps = { lg: 3, md: 3, sm: 6, xs: 12, item: true } as const;
const PrimaryFooter = () => {
  const classes = usePrimaryStyles();
  return (
    <Grid container className={classes.gridContainer} spacing={3}>
      <Grid {...gridItemProps}>
        <Avatar
          src={"/images/green-logo.png"}
          alt={COMPANY_NAME}
          className={classes.logo}
        />
        <Typography
          style={{ marginTop: "32px" }}
          color="textPrimary"
          variant="h6"
        >
          {COMPANY_NAME}
        </Typography>
        <Typography
          style={{ margin: "8px 0 36px 0" }}
          color="textSecondary"
          variant="body2"
        >
          Far far away, behind the word mountains, far from the countries.
        </Typography>
        <Box alignItems="center" display="flex" gridGap="27.7px">
          <InstagramIcon />
          <TwitterIcon />
          <PinInterestIcon />
          <YoutubeIcon />
        </Box>
      </Grid>
      {React.Children.toArray(
        footerSections.map((section) => (
          <Grid {...gridItemProps}>
            <Typography
              style={{ marginBottom: "16px" }}
              color="textSecondary"
              variant="body2"
            >
              {section.title.toUpperCase()}
            </Typography>

            {React.Children.toArray(
              section.links.map(({ label, path }) => (
                <AppLink
                  href={path}
                  variant="body2"
                  color="textPrimary"
                  style={{ marginBottom: "12px" }}
                >
                  {label}
                </AppLink>
              ))
            )}
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default PrimaryFooter;
