import React from "react";
import AppTypography from "src/components/elements/Typography";

const StepTwoSection: React.FC = ({ children }) => {
  return (
    <>
      <AppTypography component="h2" neutralColor={900} variant="displayMedium">
        Accept local laws and taxes
      </AppTypography>
      <AppTypography variant="action">
        Familiarize yourself with local laws, as well as ChaletRetreat's
        non-discrimination policy.
      </AppTypography>
      <AppTypography neutralColor={500} variant="body">
        You should always inform yourself about the laws that apply in your city
        before posting your ad.
      </AppTypography>
      <AppTypography neutralColor={500} variant="body">
        Most cities regulate housing sharing and the applicable codes or
        ordinances may appear in different places (town planning law, land use
        plan, building code, zoning by-law, etc.). More often than not, you need
        to register and get permission before you can rent out your property or
        accept travelers. You may also be responsible for collecting and
        remitting certain taxes. In some places, short-term rentals are
        completely prohibited.
      </AppTypography>
      <AppTypography neutralColor={500} variant="body">
        You are responsible for your own decision to rent or reserve
        accommodation, so it is your responsibility to know the rules that apply
        before using Airbnb. To get started, we have some helpful resources for
        you under “Your City's Regulations” section.
      </AppTypography>
      <AppTypography neutralColor={500} variant="body">
        By accepting our general conditions and by posting an advertisement, you
        agree to respect your local laws and regulations.
      </AppTypography>
      {children}
    </>
  );
};

export default StepTwoSection;
