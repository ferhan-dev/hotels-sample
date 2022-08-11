import { AnyAction } from "redux";
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
} from "../actions/actionTypes";

const initialState: any = {
  searchResults: null,
  searchData: null,
  selectedProperty: null,
  selectedLocation: {
    address: "",
    addressComps: {
      country: "",
      state: "",
      city: "",
    },
    coordinates: {
      lat: 0,
      lng: 0,
    },
  },
  selectedDateRange: { startDate: null, endDate: null },
  selectedGuests: { adults: 0, children: 0, infants: 0 },
  selectedAmenities: null,
  selectedSearchPageNo: 1,
  sortByFilter: "asc",
  moreFilters: {
    capacity: 0,
    rooms: 0,
    beds: 0,
    toilets: 0,
  },
  priceRangeFilter: { minPrice: 0, maxPrice: 0 },
};

const propertyReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS: {
      return { ...state, searchResults: action.payload };
    }
    case SET_SEARCH_DATA: {
      return { ...state, searchData: action.payload };
    }

    case SET_SELECTED_PROPERTY: {
      return { ...state, selectedProperty: action.payload };
    }

    case SET_SELECTED_LOCATION: {
      return { ...state, selectedLocation: action.payload };
    }

    case SET_SELECTED_DATE_RANGE: {
      return { ...state, selectedDateRange: action.payload };
    }

    case SET_SELECTED_GUESTS: {
      return { ...state, selectedGuests: action.payload };
    }

    case SET_SELECTED_AMENITIES: {
      return { ...state, selectedAmenities: action.payload };
    }

    case SET_SEARCH_PAGE_NO: {
      return { ...state, selectedSearchPageNo: action.payload };
    }

    case SET_SORTBY_FILTER: {
      return { ...state, sortByFilter: action.payload };
    }
    case SET_MORE_FILTER: {
      return { ...state, moreFilters: action.payload };
    }

    case SET_PRICE_RANGE_FILTER: {
      return { ...state, priceRangeFilter: action.payload };
    }

    default:
      return state;
  }
};

export default propertyReducer;
