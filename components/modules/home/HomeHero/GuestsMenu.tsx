import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { useSearchStyles } from "./styles";
import { Typography, Grid, Box } from "@material-ui/core";
import { Guests } from "./search";
import { useSmallSize } from "src/hooks";
import clsx from "clsx";
import GuestsIcon from "src/components/elements/icons/Guests";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedGuests } from "src/store/selectors/propertySelectors";
import { setSelectedGuests } from "src/store/actions/propertyActions";

type Props = {
  inTopBar: boolean;
};

const GuestsMenu: React.FC<Props> = ({ inTopBar }) => {
  const isSmallSize = useSmallSize();
  const classes = useSearchStyles({ inTopBar, isSmallSize });

  const guests = useSelector(getSelectedGuests);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [guestsExp, setGuestsExp] = React.useState<string>("");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleApply = (): void => {
    // const adultExp = guests.adults !== 0 ? `${guests.adults} Adult${guests.adults === 1 ? "s" : ""} ` : "";
    // const childrenExp =
    //   guests.children !== 0 ? ` ${guests.adults > 0 ? "," : ""} ${guests.children} ${guests.children === 1 ? "Child" : "Children"}` : "";
    // const infantsExp = guests.infants !== 0 ? `${guests.adults > 0 ? "," : ""} ${guests.infants} Infants${guests.infant === 1 ? "s" : ""} ` : "";

    //     const exp = adultExp + childrenExp + infantsExp;

    const exp = guests.adults + guests.children + guests.infants !== 0 ? `${guests.adults + guests.children + guests.infants} Guests` : "";

    setGuestsExp(exp);
    // setAnchorEl(null);
  };

  React.useEffect(() => {
    handleApply();
  }, [guests]);

  return (
    <div>
      <Grid
        container
        direction="row"
        // alignItems="center"
        justifyContent="flex-start"
        className={clsx(classes.flexWrapper, classes.searchButtonContainer)}
        style={{ width: "192px" }}
        component={Button}
        onClick={handleClick}
        aria-controls="guest-menu"
        aria-haspopup="true"
      >
        {!inTopBar && (
          <Grid item className={classes.searchButtonIcon}>
            <GuestsIcon />
          </Grid>
        )}
        <Grid item>
          <Typography variant="body1" className={inTopBar ? classes.headerSearchOptionText : ""}>
            Guests
          </Typography>
          {!inTopBar && <Typography variant="body2">{guestsExp !== "" ? guestsExp : "Add Guests"}</Typography>}
        </Grid>
      </Grid>

      <Menu
        id="guest-menu"
        className={classes.menuWrapper}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <GuestMenuComp inTopBar={inTopBar} />
      </Menu>
    </div>
  );
};

export default GuestsMenu;

interface GuestMenuCompProps extends Props {
  inTopBar: boolean;
}

export const GuestMenuComp: React.FC<GuestMenuCompProps> = ({ inTopBar }) => {
  const isSmallSize = useSmallSize();

  const classes = useSearchStyles({ inTopBar, isSmallSize });

  const guests = useSelector(getSelectedGuests);
  const dispatch = useDispatch();

  const handleChange = (guestType: string, increase: boolean): void => {
    const newGuests: Guests = { ...guests };
    newGuests[guestType as keyof Guests] = increase
      ? guests[guestType as keyof Guests] + 1
      : guests[guestType as keyof Guests] > 0
      ? guests[guestType as keyof Guests] - 1
      : 0;
    dispatch(setSelectedGuests(newGuests));
  };

  return (
    <>
      <li>
        <Box>
          <Typography variant="body1">Adults</Typography>
          <Typography variant="body2">+12</Typography>
        </Box>
        <Box className={classes.buttonGroupContainer}>
          <img
            src="/images/remove-icon.svg"
            alt="remove icon"
            onClick={() => {
              handleChange("adults", false);
            }}
          />

          <Typography variant="body1">{guests?.adults}</Typography>
          <img
            src="/images/add-icon.svg"
            alt="add icon"
            onClick={() => {
              handleChange("adults", true);
            }}
          />
        </Box>
      </li>
      <li>
        <Box>
          <Typography variant="body1">Children</Typography>
          <Typography variant="body2">Ages 2-12</Typography>
        </Box>
        <Box className={classes.buttonGroupContainer}>
          <img
            src="/images/remove-icon.svg"
            alt="remove icon"
            onClick={() => {
              handleChange("children", false);
            }}
          />
          <Typography variant="body1">{guests?.children}</Typography>
          <img
            src="/images/add-icon.svg"
            alt="add icon"
            onClick={() => {
              handleChange("children", true);
            }}
          />
        </Box>
      </li>
      <li>
        <Box>
          <Typography variant="body1">Infants</Typography>
          <Typography variant="body2">Under 2</Typography>
        </Box>
        <Box className={classes.buttonGroupContainer}>
          <img
            src="/images/remove-icon.svg"
            alt="remove icon"
            onClick={() => {
              handleChange("infants", false);
            }}
          />
          <Typography variant="body1">{guests?.infants}</Typography>
          <img
            src="/images/add-icon.svg"
            alt="add icon"
            onClick={() => {
              handleChange("infants", true);
            }}
          />
        </Box>
      </li>
    </>
  );
};
