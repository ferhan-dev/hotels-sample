import {
  Grid,
  makeStyles,
  Menu,
  MenuProps,
  Typography,
} from "@material-ui/core";
import React from "react";
import AppLink from "src/components/elements/Link";
import { sections } from "./data";

const useStyles = makeStyles(
  () => ({
    gridContainer: {
      margin: 0,
      width: "100%",
    },
    paper: {
      borderRadius: "12px",
      minHeight: "524px",
      left: "0 !important",
      margin: "auto",
      padding: "16px",
      right: 0,
      width: "100%",
      maxWidth: "1248px",
      top: "96px !important",
    },
    list: {
      padding: 0,
    },
  }),
  { index: 1 }
);
const DiscoverPlacesMenu: React.FC<MenuProps> = (props) => {
  const classes = useStyles();
  return (
    <Menu
      classes={{
        paper: classes.paper,
        list: classes.list,
      }}
      {...props}
    >
      <Grid className={classes.gridContainer} container spacing={4}>
        {React.Children.toArray(
          sections.map(({ title, links }) => (
            <Grid item xs={12} sm={6} lg={3}>
              <Typography
                color="textSecondary"
                style={{ marginBottom: "16px" }}
                variant="subtitle2"
              >
                {title.toUpperCase()}
              </Typography>
              {React.Children.toArray(
                links.map(({ label, path }) => (
                  <AppLink
                    href={path}
                    style={{ marginBottom: "12px" }}
                    variant="body2"
                  >
                    {label}
                  </AppLink>
                ))
              )}
            </Grid>
          ))
        )}
      </Grid>
    </Menu>
  );
};

export default DiscoverPlacesMenu;
