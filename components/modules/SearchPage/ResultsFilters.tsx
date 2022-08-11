import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

import { useStyles, useFilterStyles } from "./styles";
import PriceFilter from "./ResultsFilters/PriceFilters";
import MoreFilters from "./ResultsFilters/MoreFilters";
import AmenitiesFilter from "./ResultsFilters/AmenitiesFilter";
import SortByFilters from "./ResultsFilters/SortByFilters";
import AppDivider from "src/components/elements/Divider";
import { useSmallSize } from "src/hooks";
import Drawer from "@material-ui/core/Drawer";
import ResultsFilterMobile from "./ResultsFilterMobile";

interface Props {
  filters?: {
    sortBy: string;
    more: {
      capacity: number;
      rooms: number;
      beds: number;
      toilets: number;
    };
    priceRange: {
      max: number;
      min: number;
    };
  };
}

const ResultsFilters: React.FC<Props> = (props) => {
  const {} = props;
  const drawerStyles = useFilterStyles();
  const isSmallSize = useSmallSize();
  const classes = useStyles({ isSmallSize });

  const [open, setOpen] = React.useState(false);

  console.log(open);

  const dividerElement = isSmallSize ? null : (
    <AppDivider
      orientation="vertical"
      style={{
        height: "24px",
        margin: "6px 32px",
      }}
    />
  );

  return (
    <>
      {isSmallSize ? (
        <>
          <Box onClick={() => setOpen(true)}>
            <img src="/images/filter-icon.svg" alt="filter icon" />
          </Box>

          <Drawer
            anchor="left"
            className={drawerStyles.drawerWrapper}
            open={open}
            onClose={() => setOpen(false)}
            style={{ right: "0 !important", width: "100%" }}
          >
            <ResultsFilterMobile onClose={() => setOpen(false)} />
          </Drawer>

          {/* <Box onClick={toggleDrawer}>
            <img src="/images/filter-icon.svg" alt="filter icon" />
          </Box>
          <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
            drawer
          </Drawer> */}
        </>
      ) : (
        <Grid item container direction="row">
          <Grid item className={classes.mr10}>
            <Box>
              <PriceFilter />
            </Box>
          </Grid>
          <Grid item className={classes.mr10}>
            <Box>
              <AmenitiesFilter />
            </Box>
          </Grid>
          <Grid item className={classes.mr10}>
            <Box>
              <MoreFilters />
            </Box>
          </Grid>
          {dividerElement}
          <Grid item className={classes.flexIt}>
            <Typography className={classes.pillText}>Sort by:</Typography>
            <Box>
              <SortByFilters />
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ResultsFilters;
