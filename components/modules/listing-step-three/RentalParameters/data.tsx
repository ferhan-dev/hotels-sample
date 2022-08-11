import { Box, Chip } from "@material-ui/core";
import React from "react";
import AppTooltip from "src/components/elements/Tooltip";
import AppTypography from "src/components/elements/Typography";
import { FormOption } from "src/types/form";

const maxNumberOfNights = 7;

const dayOptions = Array.from({ length: maxNumberOfNights })?.map(
  (_, index) => ({
    value: index + 1,
    label: `${index + 1}`,
  })
);

const timeOptions = Array.from({ length: 24 })?.map((_, index) => ({
  value: `${index + 1}:00`,
  label: `${index + 1}:00`,
}));

export const counters = [
  {
    label: "Delay between two stays",
    name: "delay_between_two_days",
  },
  {
    label: "Minimum delay before arrival",
    name: "minimum_delay_before_arrival",
  },
  {
    label: "How many months in advance would you like to receive reservations?",
    name: "months_in_advance_receive_reservations",
  },
];

export const days = [
  {
    label: "Monday",
    labelShort: "Mon",
    options: dayOptions,
  },
  {
    label: "Tuesday",
    labelShort: "Tue",
    options: dayOptions,
  },
  {
    label: "Wednesday",
    labelShort: "Wed",
    options: dayOptions,
  },
  {
    label: "Thursday",
    labelShort: "Thu",
    options: dayOptions,
  },
  {
    label: "Friday",
    labelShort: "Fri",
    options: dayOptions,
  },
  {
    label: "Saturday",
    labelShort: "Sat",
    options: dayOptions,
  },
  {
    label: "Sunday",
    labelShort: "Sun",
    options: dayOptions,
  },
];

export const nights = [
  {
    name: "min_nights_to_rent",
    label: "Minimum number of nights to rent",
    options: dayOptions,
  },
  {
    name: "max_nights_to_rent",
    label: "Maximum number of nights to rent",
    options: dayOptions,
  },
];

export const times = [
  {
    label: "Arriving time",
    description: (
      <AppTypography
        style={{ marginTop: "8px" }}
        neutralColor={400}
        variant="caption"
      >
        Indicate the expected arrival time of your guests
      </AppTypography>
    ),
    options: timeOptions,
  },
  {
    label: "Departure time",
    description: (
      <AppTypography
        style={{ marginTop: "8px" }}
        neutralColor={400}
        variant="caption"
      >
        Indicate the expected departure time of your guests
      </AppTypography>
    ),
    options: timeOptions,
  },
];

export const radioOptions: FormOption[] = [
  {
    label: (
      <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <AppTypography variant="action">Reservation request</AppTypography>
        <AppTooltip
          title={
            <AppTypography
              style={{ textAlign: "center" }}
              variant="caption"
              color="inherit"
            >
              Ideal for those who wish to study each reservation.
            </AppTypography>
          }
        />
      </Box>
    ),
    value: "reservation_request",
    info: (
      <>
        <AppTypography color="inherit" variant="body">
          Your guests will have to make a request reservation before booking.
        </AppTypography>
        <AppTypography neutralColor={400} variant="body">
          (Ideal for those who wish to study each reservation)
        </AppTypography>
      </>
    ),
  },
  {
    label: (
      <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <AppTypography variant="action">Instant booking</AppTypography>
        <AppTooltip
          title={
            <AppTypography
              style={{ textAlign: "center" }}
              variant="caption"
              color="inherit"
            >
              Ideal for increasing your booking rate.
            </AppTypography>
          }
        />
        <Chip
          color="primary"
          variant="outlined"
          label={
            <AppTypography color="primary" variant="caption">
              Coming Soon
            </AppTypography>
          }
        />
      </Box>
    ),
    value: "instant_booking",
    info: (
      <>
        <AppTypography
          style={{ marginBottom: "24px" }}
          color="inherit"
          variant="body"
        >
          If you apply instant booking to your listings, it will make your role
          easier and more fast, because you will be able to book guests without
          have to respond to each individual request
        </AppTypography>
        <AppTypography color="inherit" variant="body">
          It will also attract more customers and increase your confirmed
          reservations. Very important to synchronize your calendars.
        </AppTypography>
        <AppTypography neutralColor={400} variant="body">
          (Ideal for increasing your booking rate)
        </AppTypography>
      </>
    ),
  },
];
