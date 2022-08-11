export const calendarDays = [
  {
    label: "SUN",
    labelShort: "S",
  },
  {
    label: "MON",
    labelShort: "M",
  },
  {
    label: "TUE",
    labelShort: "T",
  },
  {
    label: "WED",
    labelShort: "W",
  },
  {
    label: "THU",
    labelShort: "T",
  },
  {
    label: "FRI",
    labelShort: "F",
  },
  {
    label: "SAT",
    labelShort: "S",
  },
];

const dayOptions = Array.from({ length: 7 }).map((_, index) => ({
  value: index + 1,
  label: `${index + 1}`,
}));

export const counters = [
  "Allow same day departure/arrival ",
  "Minimum time before booking",
  "How many months in advance would you like to receive reservations?",
];

export const platforms = [
  {
    label: "Import from Booking.com",
    src: "/images/booking-logo.png",
    id: "Booking" as const,
    steps: [
      {
        instruction:
          "Expand Calendars from the left hand menu. Choose Reservations from the dropdown",
      },
      {
        instruction: "Click Add calendar connection",
      },
      {
        instruction:
          "Scroll to the bottom to find Export Calendar section. Before exporting the Calendar you need to choose if you want to import a new calendar or skip this step",
      },
      {
        instruction:
          "Choosing Skip this step will prompt you to Name your calendar connection. Type in 'Chalet Retreat' and click Export Calendar",
      },
      {
        instruction:
          "Click copy link and paste it into your Chalet Retreat calendar import field.",
      },
    ],
  },
  {
    label: "Import from Airbnb.com",
    src: "/images/airbnb-logo.png",
    id: "Airbnb" as const,
    steps: [
      {
        instruction:
          "Select the listing you want to sync with your Airbnb calendar",
      },
      { instruction: "Click Availability from the top tabs menu" },
      {
        instruction:
          "Scroll to the bottom to find Sync calendars section. Click on Export calendar",
      },
      {
        instruction:
          "Copy the link that opens in the pop up. Paste it into Chalet Retreat import calendar box",
      },
    ],
  },
  {
    label: "Import from Vrbo.com",
    src: "/images/vrbo-logo.png",
    id: "Vrbo" as const,
    steps: [
      {
        instruction:
          "Expand Calendars from the left hand menu. Choose Reservations from the dropdown",
      },
      {
        instruction:
          "Above the Calendar click on Import/Export and choose Export calendar",
      },
      {
        instruction:
          "Copy the link that opens in the pop up and paste it into your Chalet Retreat calendar import field",
      },
    ],
  },
  {
    label: "Import from GlampingHub",
    src: "/images/gampinghub-logo.png",
    id: "GlampingHub" as const,
    steps: [
      {
        instruction: "Go to your GlampingHub dashboard",
      },
      {
        instruction:
          "Click the Calendar icon at the top and click the “Export calendar” button.",
      },
      {
        instruction: "Click the Export to other iCal platform",
      },
      {
        instruction: "Click the Copy to Clipboard",
      },
    ],
  },
];

export const nights = [
  {
    name: "minNight",
    label: "Minimum number of nights to rent",
    options: dayOptions,
  },
  {
    name: "maxNight",
    label: "Maximum number of nights to rent",
    options: dayOptions,
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
