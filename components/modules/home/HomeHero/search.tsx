import { Box } from "@material-ui/core";
import React from "react";

import AppButton from "src/components/elements/Button";
import AppDivider from "src/components/elements/Divider";
import LocationIcon from "src/components/elements/icons/Location";
import { useLargeSize, useMediumSize, useSmallSize } from "src/hooks/screenSize";
import { useSearchStyles } from "./styles";
import GuestsMenu from "./GuestsMenu";
import { useRouter } from "next/router";
import { TO_SEARCH_RESULTS_PAGE } from "./../../../../constants/route";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { ISearchData } from "src/types/search";
import { LocationSearchBox } from "../../SearchPage/google-maps/ResultsMap";
import SearchDate from "./SearchComponents/SearchDate";
import SearchAmenities from "./SearchComponents/SearchAmenities";
import SearchIconSecondary from "src/components/elements/icons/SearchIconS";
import { getSearchData } from "src/utils/searchProperties";
import { setSearchData, setSearchPageNo } from "src/store/actions/propertyActions";

// const options = ["Miami", "Los Angeles"];

export interface Guests {
  adults: number;
  children: number;
  infants: number;
}

type ISearchBoxProps = {
  inTopBar: boolean;
};

const SearchBox: React.FC<ISearchBoxProps> = (props) => {
  const { inTopBar } = props;
  const isSmallSize = useSmallSize();
  const isMediumSize = useMediumSize();
  const isLargeSize = useLargeSize();
  const classes = useSearchStyles({ inTopBar: inTopBar, isSmallSize });
  const router = useRouter();
  const dispatch = useDispatch();

  const dividerElement = isSmallSize ? null : (
    <AppDivider
      orientation="vertical"
      style={{
        height: "32px",
        margin: isMediumSize ? "0 8px" : isLargeSize ? "0 20px" : "0 8px",
      }}
    />
  );

  const handleSearch = (): void => {
    const searchData: ISearchData = getSearchData();
    dispatch(setSearchData(searchData));
    dispatch(setSearchPageNo(1));
    if (router.route !== TO_SEARCH_RESULTS_PAGE) router.push(TO_SEARCH_RESULTS_PAGE);
  };

  return (
    <Box className={clsx(classes.root, classes.searchMenuContainer, inTopBar ? classes.headerSearchScroll : undefined)}>
      <Box
        className={clsx(classes.flexWrapper, classes.inputAutoComplete)}
        style={{ maxWidth: isSmallSize ? "100%" : undefined, padding: isSmallSize ? "0 15px" : undefined }}
      >
        {!inTopBar && <LocationIcon className={classes.locationIcon} />}
        <LocationSearchBox inTopBar={inTopBar} />
      </Box>
      {dividerElement}
      <Box className={classes.searchMenuButtonContainer}>
        <SearchDate inTopBar={inTopBar} />
      </Box>
      {dividerElement}

      <Box className={classes.searchMenuButtonContainer}>
        <GuestsMenu inTopBar={inTopBar} />
      </Box>
      {dividerElement}
      <Box className={classes.searchMenuButtonContainer}>
        <SearchAmenities inTopBar={inTopBar} />
      </Box>
      <AppButton variant="contained" className={clsx(classes.searchPrimaryBtn, classes.searchButtonStyle)} color="primary" onClick={handleSearch}>
        {
          inTopBar ? <SearchIconSecondary /> : <img src="/images/search-icon-white.svg" alt="search-icon-white" />
          //  <SearchIcon />
        }
      </AppButton>
    </Box>
  );
};

export default SearchBox;
