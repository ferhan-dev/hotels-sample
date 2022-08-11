import React, { useState } from "react";
import { Box, Collapse, Grid } from "@material-ui/core";
import AppButton from "src/components/elements/Button";
import AppCheckBox from "src/components/elements/CheckBox";
import AppDialog from "src/components/elements/Dialog";
import AppDivider from "src/components/elements/Divider";
import ArrowDownIcon from "src/components/elements/icons/ArrowDown";
import ArrowUpIcon from "src/components/elements/icons/ArrowUp";
import CloseIcon from "src/components/elements/icons/Close";
import AppSelect from "src/components/elements/Select";
import AppSwitch from "src/components/elements/Switch";
import AppTextArea from "src/components/elements/TextArea";
import AppTextField from "src/components/elements/TextField";
import AppTooltip from "src/components/elements/Tooltip";
import AppTypography from "src/components/elements/Typography";
import ActionButtonGroup from "src/components/modules/ButtonGroup";
import Counter from "src/components/modules/Counter";
import YesOrNoOption from "src/components/modules/YesOrNoOption";
import DateRangePicker from "src/components/elements/DateRangePicker";
import { counters, days, nights } from "./data";
import { useDialogStyles } from "./styles";

interface Props {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const renderInputDescription = (text: string) => {
  return (
    <AppTypography
      neutralColor={400}
      style={{ marginTop: "8px" }}
      variant="caption"
    >
      {text}
    </AppTypography>
  );
};

const CalendarEditPricingDialog: React.FC<Props> = ({
  open,
  onClose,
  onDelete,
}) => {
  const [range, setRange] = useState([null, null]);
  const [expanded, setExpanded] = useState(false);
  const classes = useDialogStyles({});

  const onChangePeriod = (value: any) => setRange(value);

  return (
    <AppDialog classes={{ paper: classes.paper }} open={open} maxWidth="sm">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <AppTypography component="h2" neutralColor={900} variant="displaySmall">
          Custom pricing
        </AppTypography>
        <CloseIcon onClick={onClose} />
      </Box>
      <AppDivider style={{ margin: "4px 0" }} />

      <AppTypography component="span" variant="action">
        Period
      </AppTypography>
      <DateRangePicker value={range} onChange={onChangePeriod} />
      <AppTextField
        label="Period Name"
        name="periodName"
        placeholder="Type here"
        optional
      />
      <AppSwitch
        label={
          <AppTypography component="span" variant="action">
            Block period
          </AppTypography>
        }
      />
      <AppDivider />

      <Box className={classes.flexWrapper}>
        <AppTextField
          label="Base rate"
          name="rate"
          placeholder="CAD(C$)"
          description={renderInputDescription(
            `This price will be the default rate for each night.`
          )}
        />
        <AppTextField
          label="Weekend rate"
          name="rate"
          placeholder="CAD(C$)"
          description={renderInputDescription(
            `This price will be the default price for the weekend.`
          )}
        />
      </Box>
      <AppDivider />

      <Box className={classes.flexWrapper}>
        <AppTextField
          label="Weekly rate"
          name="rate"
          placeholder="CAD(C$)"
          description={renderInputDescription(
            `This price will be the default rate for each week.`
          )}
        />
        <AppTextField
          label="Monthly rate"
          name="rate"
          placeholder="CAD(C$)"
          description={renderInputDescription(
            `This price will be the default price for the month.`
          )}
        />
      </Box>
      <AppDivider />

      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AppTypography neutralColor={800} variant="displaySmall">
          Advanced booking options
        </AppTypography>

        {expanded ? (
          <ArrowUpIcon
            style={{ cursor: "pointer" }}
            onClick={() => setExpanded(false)}
          />
        ) : (
          <ArrowDownIcon
            style={{ cursor: "pointer" }}
            onClick={() => setExpanded(true)}
          />
        )}
      </Box>
      <Box>
        <Collapse in={expanded} unmountOnExit>
          <Box className={classes.collapseContainer}>
            <AppTypography variant="displaySmall">Stay length</AppTypography>
            <Box className={classes.selectFlexWrapper}>
              {React.Children.toArray(
                nights.map(({ night, index }: any) => (
                  <AppSelect
                    className={classes.select}
                    {...night}
                    optional
                    withLabel
                    placeholder={index === 1 ? "-" : undefined}
                  />
                ))
              )}
            </Box>
            <AppDivider style={{ margin: "20px 0" }} />

            <AppTypography neutralColor={800} variant="heading">
              Arrival-departure days
              <span style={{ marginLeft: "10px" }}>
                <AppTooltip
                  title={
                    <AppTypography
                      style={{ textAlign: "center" }}
                      variant="caption"
                      color="inherit"
                    >
                      Check the days when it will be possible for a client to
                      arrive or end their stay. If the day is unchecked, it will
                      indicate that a customer cannot arrive or finish at this
                      precise day.
                    </AppTypography>
                  }
                />
              </span>
            </AppTypography>
            <Box
              style={{ margin: "24px 0 0 0" }}
              className={classes.checkboxFlexWrapper}
            >
              {React.Children.toArray(
                days.map(({ labelShort }) => (
                  <AppCheckBox
                    name="day"
                    className={classes.checkbox}
                    label={labelShort}
                  />
                ))
              )}
            </Box>
            <AppDivider style={{ margin: "20px 0" }} />

            <AppTypography neutralColor={800} variant="heading">
              Minimum length of stay depending the day
              <span style={{ marginLeft: "10px" }}>
                <AppTooltip
                  title={
                    <AppTypography
                      style={{ textAlign: "center" }}
                      variant="caption"
                      color="inherit"
                    >
                      Minimum number of nights to book depending on the day of
                      the start of the stay.
                    </AppTypography>
                  }
                />
              </span>
            </AppTypography>
            <Grid
              style={{
                margin: "16px 10px 0 -10px",
                width: "calc(100% + 20px)",
              }}
              container
              spacing={4}
            >
              {React.Children.toArray(
                days.map(({ label, options }) => (
                  <Grid xs={6} sm={4} item style={{ padding: "8px 10px" }}>
                    <AppSelect
                      name="day"
                      label={label}
                      options={options}
                      optional
                      placeholder="0"
                      withLabel
                    />
                  </Grid>
                ))
              )}
            </Grid>
            <AppDivider style={{ margin: "20px 0" }} />
            <Box className={classes.counterFlexWrapper}>
              {React.Children.toArray(
                counters.map((label, index) => (
                  <>
                    {index === 0 ? (
                      <YesOrNoOption label={label} defaultValue="yes" />
                    ) : (
                      <Counter
                        label={
                          <>
                            {label}
                            <span style={{ marginLeft: "10px" }}>
                              <AppTooltip
                                title={
                                  <AppTypography
                                    style={{ textAlign: "center" }}
                                    variant="caption"
                                    color="inherit"
                                  >
                                    Check the days when it will be possible for
                                    a client to arrive or end their stay. If the
                                    day is unchecked, it will indicate that a
                                    customer cannot arrive or finish at this
                                    precise day.
                                  </AppTypography>
                                }
                              />
                            </span>
                          </>
                        }
                        optional
                      />
                    )}
                  </>
                ))
              )}
            </Box>
          </Box>
        </Collapse>
      </Box>
      <AppDivider />
      <AppTextArea label="Note for yourself" optional />
      <ActionButtonGroup
        containerProps={{ className: classes.container }}
        primaryBtnProps={{ children: "Save", onClick: onClose }}
        secondaryBtnProps={{
          children: "Cancel",
          onClick: onClose,
          startIcon: null,
        }}
      />
      <AppButton
        onClick={onDelete}
        className={classes.deleteOutlinedBtn}
        fullWidth
        variant="outlined"
      >
        Remove Special Pricing
      </AppButton>
    </AppDialog>
  );
};

export default CalendarEditPricingDialog;
