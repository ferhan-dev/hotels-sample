import { createContext, useContext } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "src/types";

interface AddListingContextValue {
  form: UseFormReturn<FormValues>;
}

export const AddListingContext = createContext<
  AddListingContextValue | undefined
>(undefined);

AddListingContext.displayName = "AddListingContext";

export const useAddListingContext = () => {
  const context = useContext(AddListingContext);
  if (context === undefined)
    throw new Error(
      `${AddListingContext.displayName} must be used within provider`
    );

  return context;
};
