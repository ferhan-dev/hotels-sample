export const rateFields = [
  {
    label: "Base rate",
    name: "baseRate",
    placeholder: "CAD (C$)",
    description: "This price will be the default rate for each night.",
  },
  {
    label: "Weekend rate",
    name: "weekendRate",
    placeholder: "CAD (C$)",
    description: "This price will be the default price for the weekend.",
  },
  {
    label: "Weekly rate",
    name: "weeklyRate",
    placeholder: "CAD (C$)",
  },
  {
    label: "Monthly rate",
    name: "weeklyRate",
    placeholder: "CAD (C$)",
  },
];

export const currencies = [
  {
    label: "CAD (C$)",
    value: "CAD (C$)",
  },
  {
    label: "USD ($)",
    value: "USD ($)",
  },
];

export const noOfGuestOptions = Array.from({ length: 6 }).map((_, index) => ({
  label: index,
  value: index,
}));
