export type PlatformVariant =
  | "Booking"
  | "Airbnb"
  | "Vrbo"
  | "GlampingHub"
  | "Other Calendar";

export interface Platform {
  type: PlatformVariant;
  url: string;
  name: string;
  src: string;
}
