import { accountItemsSteps } from "src/types/listing";

export const accountItems: accountItemsSteps[] = [
  {
    image: "/images/info.png",
    title: "Personal informations",
    contents: " Provide personal information and indicate how we can reach you",
    flag: "personal",
  },
  {
    image: "/images/lockGreen.png",
    title: "Security and integrations",
    contents:
      "Manage your password and integrate your account with social networks",
    flag: "security",
  },
  {
    image: "/images/payment.png",
    title: "Payments and bank connection",
    contents: "Review your payments, payouts and manage your bank connection",
    flag: "payment",
  },
  {
    image: "/images/notification.png",
    title: "Notifications",
    contents:
      "Choose your notification preferences and how you want to be contacted.",
    flag: "notification",
  },
  {
    image: "/images/dashboard.png",
    title: "Host dashboard",
    contents:
      " Use professional tools if you manage multiple accommodations on ChaletRetreat",
    flag: "Host",
  },
];
