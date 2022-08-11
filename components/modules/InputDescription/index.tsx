import { Box } from "@material-ui/core";
import { ErrorOutline } from "@material-ui/icons";
import React from "react";
import AppTypography from "src/components/elements/Typography";

interface Props {
  highlightedText?: string;
  normalText: string;
}

const InputDescription: React.FC<Props> = ({ highlightedText, normalText }) => {
  return (
    <Box display="flex" gridGap="8px" marginTop="12px">
      <ErrorOutline
        fontSize="inherit"
        color="disabled"
        style={{ fontSize: "16px" }}
      />
      <AppTypography neutralColor={500} variant="caption">
        {highlightedText ? (
          <AppTypography component="span" variant="caption" color="primary">
            {highlightedText}
          </AppTypography>
        ) : null}{" "}
        {normalText}
      </AppTypography>
    </Box>
  );
};

export default InputDescription;
