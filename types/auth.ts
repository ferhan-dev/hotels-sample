import { UserFormValues } from "./form";
import { User } from "./user";

export interface LoginUserBody
  extends Pick<UserFormValues, "email" | "password"> {}

export interface LoginUserResponse {
  // accessToken(arg0: string, accessToken: any);
  data: {
    attributes: User;
    meta: {
      accessToken: string;
    };
  };
  status: string;
}
export interface UpdatePassword {
  // accessToken(arg0: string, accessToken: any);
  passwords: object;
}

export interface RegisterUserBody
  extends Omit<UserFormValues, "day" | "month" | "year"> {
  birthdate: string;
}
export interface PhoneUserBody {
  phone_number?: string;
  is_primary?: boolean;
  is_for_guests?: boolean;
}
export interface PhoneVerify {
  phone_number: string;
  token: string;
}
export interface RegisterUserResponse {
  data: {
    token: string;
    user: User;
  };
  status: string;
}
export interface PhoneUserResponse {
  data: {
    token: string;
    user: User;
  };
  status: string;
}
export interface UpdateResponse {
  body: string;
}
