import {
  SET_SEARCH_RESULTS,
  SET_SEARCH_DATA,
  SET_SELECTED_PROPERTY,
  SET_SELECTED_LOCATION,
  SET_SELECTED_DATE_RANGE,
  SET_SELECTED_GUESTS,
  SET_SELECTED_AMENITIES,
  SET_SEARCH_PAGE_NO,
  SET_SORTBY_FILTER,
  SET_MORE_FILTER,
  SET_PRICE_RANGE_FILTER,
} from "./actionTypes";

export const setSearchResults = (payload: any) => {
  return {
    type: SET_SEARCH_RESULTS,
    payload,
  };
};

export const setSearchData = (payload: any) => {
  return {
    type: SET_SEARCH_DATA,
    payload,
  };
};

export const setSelectedProperty = (payload: any) => {
  return {
    type: SET_SELECTED_PROPERTY,
    payload,
  };
};
export const setSelectedLocation = (payload: any) => {
  return {
    type: SET_SELECTED_LOCATION,
    payload,
  };
};
export const setSelectedDate = (payload: any) => {
  return {
    type: SET_SELECTED_DATE_RANGE,
    payload,
  };
};
export const setSelectedGuests = (payload: any) => {
  return {
    type: SET_SELECTED_GUESTS,
    payload,
  };
};
export const setSelectedAmenities = (payload: any) => {
  return {
    type: SET_SELECTED_AMENITIES,
    payload,
  };
};
export const setSearchPageNo = (payload: any) => {
  return {
    type: SET_SEARCH_PAGE_NO,
    payload,
  };
};

export const setSortByFilter = (payload: any) => {
  return {
    type: SET_SORTBY_FILTER,
    payload,
  };
};

export const setMoreFilter = (payload: any) => {
  return {
    type: SET_MORE_FILTER,
    payload,
  };
};

export const setPriceRangeFilter = (payload: any) => {
  return {
    type: SET_PRICE_RANGE_FILTER,
    payload,
  };
};
