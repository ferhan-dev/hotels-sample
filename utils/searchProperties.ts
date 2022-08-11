import { sections } from "src/components/modules/listing-step-one/Amenities/data";
import { IAmenity, ISearchData } from "src/types/search";
import moment from "moment";
import store from "src/store";

export function formatDate(date: Date | string | number, format: string) {
  const dateObj = new Date(date);
  return moment(dateObj).format(format);
}

export function getAllAmenities() {
  const amenitiesList = Object.keys(sections).map((amenities: any) => {
    return sections[amenities].features;
  });
  const allAmenities = Array.prototype.concat(...amenitiesList);

  const formattedAmenities = allAmenities?.map((amenity, index) => {
    const newAmenity = { ...amenity };
    newAmenity.id = index + 1;
    newAmenity.status = false;
    newAmenity.slug = amenity.label.replace(/ /g, "-");
    return newAmenity;
  });
  return formattedAmenities;
}

export function getSearchData() {
  const location = store.getState().propertySearch.selectedLocation;
  const dateRange = store.getState().propertySearch.selectedDateRange;
  const guests = store.getState().propertySearch.selectedGuests;
  const amenities = store.getState().propertySearch.selectedAmenities;

  const selectedAmenities = amenities?.filter((amenity: any) => {
    return amenity.status === true;
  });

  const searchData: ISearchData = {
    Location: location,
    guests: guests,
    DateRange: dateRange,
    amenities: selectedAmenities,
  };

  return searchData;
}

export function getSearchParams(page: number) {
  const searchData = getSearchData();
  const location = searchData?.Location;
  const dateRange = searchData?.DateRange;
  const guests = searchData?.guests;
  const amenities: any = searchData?.amenities;

  //Filters
  const priceRange = store.getState().propertySearch.sortByFilter;
  const moreFilters = store.getState().propertySearch.moreFilters;
  const sortByFilter = store.getState().propertySearch.sortByFilter;

  const selectedAmenities = amenities?.filter((amenity: IAmenity) => {
    return amenity.status === true;
  });

  const amenitySlugs = selectedAmenities?.map((amenity: IAmenity) => {
    return amenity.slug.toLowerCase();
  });

  const formattedStartDate = dateRange?.startDate && formatDate(dateRange.startDate, "YYYY-MM-DD");
  const formattedEndDate = dateRange.endDate && formatDate(dateRange.endDate, "YYYY-MM-DD");

  const params = {
    ...(location?.address && location?.address !== "" && { full_address: location?.address }),
    ...(dateRange.startDate && formattedStartDate !== null && { start_date: formattedStartDate }),
    ...(dateRange.endDate && formattedEndDate !== null && { end_date: formattedEndDate }),
    ...(guests?.adults && guests?.adults !== 0 && { adults: guests?.adults }),
    ...(guests?.children && guests?.children !== 0 && { children: guests?.children }),
    ...(guests?.infants && guests?.infants !== 0 && { infants: guests?.infants }),
    ...(location.addressComps?.city && location.addressComps?.city !== "" && { city: location.addressComps?.city }),
    ...(location.addressComps?.country && location.addressComps?.country !== "" && { country: location.addressComps?.country }),
    ...(location.addressComps?.state && location.addressComps?.state !== "" && { state: location.addressComps?.state }),
    ...(moreFilters?.beds && moreFilters?.beds !== 0 && { number_of_beds: moreFilters?.beds }),
    ...(moreFilters?.capacity && moreFilters?.capacity !== 0 && { maximum_guests: moreFilters?.capacity }),
    ...(moreFilters?.toilets && moreFilters?.toilets !== 0 && { number_of_rooms_bath: moreFilters?.toilets }),
    ...(moreFilters?.rooms && moreFilters?.rooms !== 0 && { number_of_rooms: moreFilters?.rooms }),
    ...(priceRange?.minPrice && priceRange?.minPrice !== 0 && { min_price: priceRange?.minPrice }),
    ...(priceRange?.maxPrice && priceRange?.maxPrice !== 0 && { max_price: priceRange?.maxPrice }),
    ...(sortByFilter && sortByFilter !== "" && { price_sort: sortByFilter }),
    ...(amenitySlugs?.length && amenitySlugs?.length > 0 && { amenities: amenitySlugs }),
    page: page,
  };

  return params;
}
