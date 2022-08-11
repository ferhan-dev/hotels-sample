import { months } from "src/utils";

export const stepOneFields = [
  {
    label: "Firstname",
    placeholder: "Your first name",
    name: "first_name" as const,
  },
  {
    label: "Lastname",
    placeholder: "Your last name",
    name: "last_name" as const,
  },
  {
    label: "Email",
    placeholder: "name@domain.com",
    name: "email" as const,
  },
  {
    label: "Password",
    placeholder: "at least 8 characters",
    name: "password" as const,
    type: "password",
  },
  {
    label: "Confirm Password",
    placeholder: "Repeat your password",
    name: "confirm_password" as const,
    type: "password",
  },
];

export const stepTwoFields = [
  {
    placeholder: "Month",
    name: "month" as const,
    options: months.map((month) => ({ label: month, value: month })),
  },
  {
    placeholder: "Day",
    name: "day" as const,
    options: Array.from({ length: 31 }).map((_, index) => ({
      label: `${index + 1}`,
      value: `${index + 1}`,
    })),
  },
  {
    placeholder: "Year",
    name: "year" as const,
    options: Array.from({ length: new Date().getFullYear() - 18 - 1970 }).map(
      (_, index) => ({ label: `${1970 + index}`, value: `${1970 + index}` })
    ),
  },
  {
    placeholder: "Language",
    name: "language" as const,
    options: [
      {
        label: "English",
        value: "English",
      },
      {
        label: "French",
        value: "French",
      },
    ],
  },
];
