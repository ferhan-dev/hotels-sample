import React from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";
import ResultsListItem from "./resultsListItem";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import { useSmallSize } from "src/hooks";
import { ISearchData } from "src/types/search";
import { IMoreFilters } from "src/types/search-filters";
import { getSearchParams } from "src/utils/searchProperties";
import { getAllProperties } from "src/services/api";
import { Typography } from "@material-ui/core";
import { SEARCH_RESULTS_LIMIT } from "src/constants";
import LinearProgress from "@material-ui/core/LinearProgress";
import {
  getSelectedAmenities,
  getSearchData,
  getMoreFilters,
  getPriceRangeFilter,
  getSortByFilter,
  getSelectedSearchPageNo,
  getSearchResults,
} from "src/store/selectors/propertySelectors";
import { setSearchResults, setSearchPageNo } from "src/store/actions/propertyActions";

interface Props {}

const ResultsList: React.FC = (props: Props) => {
  const {} = props;
  const isSmallSize = useSmallSize();
  const dispatch = useDispatch();
  const classes = useStyles({ isSmallSize });

  const selectedAmenities = useSelector(getSelectedAmenities);
  const searchData: ISearchData = useSelector(getSearchData);
  const moreFilters: IMoreFilters | null = useSelector(getMoreFilters);
  const priceFilter = useSelector(getPriceRangeFilter);
  const sortByFilter = useSelector(getSortByFilter);
  const selectedPageNo = useSelector(getSelectedSearchPageNo);

  const [resultsData, setResultsData] = React.useState(useSelector(getSearchResults));
  const [totalPages, setTotalPages] = React.useState(0);
  const [loadingResults, setLoadingResults] = React.useState(false);
  const [error, setError] = React.useState("");

  const [page, setPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(event);
    dispatch(setSearchPageNo(value));
    setPage(value);
  };

  const fetchSearchResults = (): void => {
    setLoadingResults(true);
    setError("");

    const url = getSearchParams(selectedPageNo);

    // console.log(url);

    getAllProperties(url)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setLoadingResults(false);
          setError("");
          if (response.data.items.length === 0) {
            setError("No Results Found");
            //return;
          }
          dispatch(setSearchResults(response.data));
          setResultsData(response.data);
          // if (router.route !== TO_SEARCH_RESULTS_PAGE) router.push(TO_SEARCH_RESULTS_PAGE);
        }
      })
      .catch((error) => {
        setLoadingResults(false);
        setError("Something Went Wrong");
        console.log(error);
      });
  };

  React.useEffect(() => {
    fetchSearchResults();
  }, [searchData, moreFilters, selectedAmenities, priceFilter, selectedPageNo, sortByFilter]);

  React.useEffect(() => {
    const totalPages = resultsData ? Math.ceil(resultsData?.total / SEARCH_RESULTS_LIMIT) : 0;
    setTotalPages(totalPages);
  }, [resultsData]);

  return (
    <>
      {error !== "" && <Typography variant="h3">{error}</Typography>}
      {loadingResults && <LinearProgress />}
      {error === "" && !loadingResults && resultsData && (
        <div className={classes.propertyResultsWrapper}>
          <div className={classes.scrollSegment}>
            {resultsData?.items?.map((item: any, index: number) => {
              return (
                <>
                  <Grid item key={item?.id}>
                    <ResultsListItem propertyItem={item} inInfoWindow={false} />
                  </Grid>
                  {index !== resultsData?.length - 1 && !isSmallSize && <hr style={{ margin: "40px 0" }} />}
                </>
              );
            })}
          </div>
          {/* {searchResults?.total > 20 && (
        <Pagination count={5} page={page} color="primary" onChange={handleChange} className={classes.paginationWrapper} />
      )} */}
          {totalPages > 1 && (
            <Pagination count={totalPages} page={page} color="primary" onChange={handleChange} className={classes.paginationWrapper} />
          )}
        </div>
      )}
    </>
  );
};

export default ResultsList;
