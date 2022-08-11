import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { useStyles } from "../styles";
import ArrowDownIcon from "src/components/elements/icons/ArrowDown";
import { Typography } from "@material-ui/core";
import { AmenitiesComp } from "../../home/HomeHero/SearchComponents/SearchAmenities";
import { useSmallSize } from "src/hooks";

type Props = {};

const AmenitiesFilter: React.FC<Props> = () => {
  const isSmallSize = useSmallSize();
  const classes = useStyles({ isSmallSize });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button aria-describedby="amenities-menu" variant="outlined" className={classes.pillDrop} onClick={handleClick}>
        <Typography className={classes.pillText}>Aminities</Typography>
        <ArrowDownIcon />
      </Button>

      <Menu
        id="amenities-menu"
        className={classes.amenitiesMenu}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <AmenitiesComp inTopBar={false} handleClose={handleClose} />
      </Menu>
    </>
  );
};

export default AmenitiesFilter;
