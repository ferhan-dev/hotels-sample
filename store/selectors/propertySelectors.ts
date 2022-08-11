import { RootState } from "../index";

// property search
export const getSearchResults = (state: RootState) => state.propertySearch.searchResults;

export const getSearchData = (state: RootState) => state.propertySearch.searchData;

export const getSelectedProperty = (state: RootState) => state.propertySearch.selectedProperty;

export const getSelectedLocation = (state: RootState) => state.propertySearch.selectedLocation;

export const getSelectedDateRange = (state: RootState) => state.propertySearch.selectedDateRange;

export const getSelectedGuests = (state: RootState) => state.propertySearch.selectedGuests;

export const getSelectedAmenities = (state: RootState) => state.propertySearch.selectedAmenities;

export const getSelectedSearchPageNo = (state: RootState) => state.propertySearch.selectedSearchPageNo;

//property filters

export const getSortByFilter = (state: RootState) => state.propertySearch.sortByFilter;

export const getMoreFilters = (state: RootState) => state.propertySearch.moreFilters;

export const getPriceRangeFilter = (state: RootState) => state.propertySearch.priceRangeFilter;
