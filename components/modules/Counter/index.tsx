import React from "react";
import AppButton from "src/components/elements/Button";
import AddIcon from "src/components/elements/icons/Add";
import SubtractIcon from "src/components/elements/icons/Subtract";
import InputError from "src/components/elements/InputError";
import AppTypography from "src/components/elements/Typography";
import { useSmallerSize } from "src/hooks/screenSize";
import { useStyles } from "./styles";

interface Props {
  defaultValue?: number;
  error?: boolean;
  message?: string;
  label: React.ReactNode;
  value?: number | undefined;
  optional?: boolean;
  onChange?: (event?: any) => void;
  onBlur?: () => void;
}

const Counter: React.FC<Props> = ({
  error,
  label,
  message,
  optional,
  value,
  onChange,
  onBlur,
}) => {
  const classes = useStyles();
  const isSmallerSize = useSmallerSize();
  const handleDecrement = () => {
    onChange && onChange(value ? value - 1 : value);
  };
  const handleIncrement = () => {
    onChange && onChange(value !== undefined ? value + 1 : value);
  };
  const labelElement = (
    <AppTypography
      className={classes.label}
      neutralColor={900}
      variant="action"
    >
      {label}
      {optional ? null : (
        <AppTypography component="span" variant="body14" color="primary">
          *
        </AppTypography>
      )}
    </AppTypography>
  );
  return (
    <div>
      {isSmallerSize ? labelElement : null}
      <div className={classes.flexWrapper}>
        {isSmallerSize ? null : labelElement}
        <div className={classes.btnGroupWrapper}>
          <AppButton
            onClick={handleDecrement}
            onBlur={onBlur}
            className={classes.iconBtn}
          >
            <SubtractIcon color="action" />
          </AppButton>
          <AppTypography
            className={classes.text}
            neutralColor={600}
            variant="action"
          >
            {value !== undefined ? value : 0}
          </AppTypography>
          <AppButton
            onClick={handleIncrement}
            onBlur={onBlur}
            className={classes.iconBtn}
          >
            <AddIcon color="action" style={{ fontSize: "18px" }} />
          </AppButton>
        </div>
      </div>
      {error && message ? <InputError>{message}</InputError> : null}
    </div>
  );
};

export default Counter;
