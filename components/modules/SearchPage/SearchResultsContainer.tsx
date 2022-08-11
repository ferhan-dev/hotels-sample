import React from "react";

import ResultsList from "./resultslist";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";
import ResultsMap from "./google-maps/ResultsMap";
import SearchPageTopbar from "./SearchPageTopbar";
import { useSmallSize } from "src/hooks/screenSize";

const SearchResultsContainer: React.FC = () => {
  const isSmallSize = useSmallSize();
  const classes = useStyles({ isSmallSize });

  return (
    <>
      <Box style={{ paddingTop: isSmallSize ? "82px" : "100px" }} className={classes.resultsWrapper}>
        <SearchPageTopbar />
        {isSmallSize ? (
          <div>
            <Box className={classes.searchResultsItemsWrapper}>
              <ResultsMap />
              <ResultsList />
            </Box>
          </div>
        ) : (
          <>
            <hr />
            <div style={{ position: "relative" }}>
              <Box className={classes.searchResultsItemsWrapper}>
                <ResultsList />
                <ResultsMap />
              </Box>
            </div>
          </>
        )}
      </Box>
    </>
  );
};

export default SearchResultsContainer;
