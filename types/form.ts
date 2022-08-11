import React from "react";
export interface AdvancedBookingFormValues {
  allow_same_day_departure_or_arrival: boolean;
  arrival_departure_days: string[];
  max_length_of_stays: Record<string, number>;
  minimum_delay_before_arrival: number;
  months_in_advance_receive_reservations: number;
}

export interface BasicPricingFormValues {
  id?: number;
  base_rate: number;
  currency: string;
  is_smart: 0 | 1;
  monthly_rate: number;
  weekend_rate: number;
  weekly_rate: number;
}
export interface BasicFeeFormValues {
  id?: number;
  above_number_of_guests: number;
  cleaning_fee: number;
  fee_per_additional_guest: number;
  other_charges: BasicFeeChargeFormValues[];
  security_deposit: any;
}

export interface BasicFeeChargeFormValues {
  how_is_it_charged: string;
  service_name: string;
  service_price: number;
  optional: boolean;
}
export interface BasicRoomsFormValues {
  name: string;
  sleeping_types: [];
}

export interface GuestReceptionFormValues {
  id: number | string;
  internet_type: string;
  has_wifi_access: string;
  wifi_name: string;
  wifi_password: string;
  property_guide: object;
  checkin_method: string;
  tell_your_guest: string;
}

export interface FormOption {
  value?: string | number | readonly string[];
  label: React.ReactNode;
  info?: React.ReactNode;
  name?: React.ReactNode;
}

export interface ListingFormValues
  extends ListingStepOneFormValues,
    ListingStepThreeFormValues {}
export interface ListingStepOneFormValues {
  id: number;
  amenities: string[];
  city: string;
  country: string;
  customer_expectations: any;
  full_address: string;
  latitude: number;
  longitude: number;
  maximum_guests: number;
  number_of_beds: number;
  number_of_open_concept_rooms: number;
  number_of_rooms: number;
  number_of_rooms_bath: number;
  postal_code: string;
  property_type1: string;
  property_type2: string;
  rooms: RoomFormValues[];
  securities: string[];
  state: string;
  number_of_queen: number;
  number_of_bunk: number;
  number_of_sleeping: number;
  number_of_sofa_bed: number;
  number_of_couch: number;
  number_of_king_size: number;
  type: string;
  photos: [];
}
export interface ListingStepThreeFormValues {
  basic_pricing: BasicPricingFormValues;
  basic_fee: BasicFeeFormValues;
  cancellation_policy_type: string;
  regulations: string[];
  rules: string[];
  state: string;
  tax_registration_number: string;
  taxes: TaxFormValues[];
  guest_reception: GuestReceptionFormValues;
}
export interface RentalParametersFormValues {
  advanced_booking_options: AdvancedBookingFormValues;
  arriving_time: string;
  booking_preferences: string;
  departure_time: string;
  min_nights_to_rent: number;
  max_nights_to_rent: number;
}

export interface RoomFormValues {
  id?: number;
  sleeping_types: string;
  bunk_beds: number;
  couch: number;
  king_size: number;
  name: string;
  queen_size: number;
  sleeping_mattress: number;
  sofa_bed: number;
}

export interface UserFormValues {
  confirm_password: string;
  title: any;
  description: string;
  others: any;
  label: any;
  wifiName: any;
  name: any;
  day: string;
  url: any;
  rental_parameters: any;
  email: string;
  first_name: string;
  last_name: string;
  language: string;
  month: string;
  password: string;
  year: string;
  period: string;
  periodName: string;
  rate: string;
}
export interface StepperFormValues {
  body: any;
}
export interface numberFormValues {
  datas: any;
}
export interface TaxFormValues {
  name: string;
  value: number;
}
export interface ListingFormValues {
  rooms: any;
  securities: string[];
  state: string;
  number_of_queen: number;
  number_of_bunk: number;
  number_of_sleeping: number;
  number_of_sofa_bed: number;
  number_of_couch: number;
  number_of_king_size: number;
  type: string;
  amenities: string[];
}
export interface CalendarValues {
  id: number;
  start: string;
  end: string;
  is_blocked_period: boolean;
  description: string;
  name: string;
  ical: string;
}
export interface IcalFeedValues {
  id: number;
  name: string;
  type: string;
  url: string;
}
export interface Calendars {
  calendars: CalendarValues[];
}
export interface IcalFeeds {
  ical_feeds: IcalFeedValues[];
}
export interface FormValues
  extends UserFormValues,
    ListingFormValues,
    RentalParametersFormValues,
    Calendars,
    IcalFeeds
    {}
