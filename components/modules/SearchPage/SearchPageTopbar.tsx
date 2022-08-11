import React from "react";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";
import { Box } from "@material-ui/core";
import ResultsFilters from "./ResultsFilters";
import { useSmallSize } from "src/hooks";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { getSearchResults } from "src/store/selectors/propertySelectors";

interface Props {}

const SearchPageTopbar: React.FC = (props: Props) => {
  const {} = props;
  const isSmallSize = useSmallSize();
  const classes = useStyles({ isSmallSize });
  const [isSticky, setIsSticky] = React.useState(false);

  const searchResults = useSelector(getSearchResults);

  React.useEffect(() => {
    window.onscroll = () => {
      window.scrollY > 0 ? setIsSticky(true) : setIsSticky(false);
    };
  }, []);

  return (
    <Box
      className={clsx(classes.searchResultsWrapper, isSmallSize && isSticky && classes.stickySearchTopBar)}
      style={{ paddingRight: isSticky && isSmallSize ? "18px" : undefined }}
    >
      <Box>
        <Typography variant="body1" style={{ fontWeight: 600, fontSize: "18px" }}>
          Chalets in Mont-Tremblant
        </Typography>
        <Typography variant="body2" style={{ fontWeight: 500, color: "#5A6987" }}>
          {`${searchResults && searchResults?.total ? searchResults?.total : 0}`} stays available
        </Typography>
      </Box>
      <Box>
        <ResultsFilters />
      </Box>
    </Box>
  );
};

export default SearchPageTopbar;
