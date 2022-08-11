export interface Guests {
  adults: number;
  children: number;
  infants: number;
}

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}
export interface LocationSearch {
  address: string | null;
  addressComps: {
    country: string | null;
    state: string | null;
    city: string | null;
  };
  coordinates: {
    lat: number | null;
    lng: number | null;
  };
}

export interface IAmenity {
  id: number;
  status: boolean;
  label: string;
  icon: any;
  slug: string;
}

export interface Amenities {
  amenities: IAmenity[] | [];
}

export interface ISearchData {
  Location: LocationSearch;
  guests: Guests;
  DateRange: DateRange;
  amenities: Amenities;
}

export interface IMoreFilters {
  capacity: number;
  rooms: number;
  beds: number;
  toilets: number;
}

export interface IPricePerNight {
  minPrice: number;
  maxPrice: number;
}
