import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useHeadingSectionStyles } from "./styles";
import { useSmallSize } from "src/hooks/screenSize";
import StarIcon from '@material-ui/icons/Star';

const TreeHouseHeadingSection = () => {
  const classes = useHeadingSectionStyles();
  const isSmallSize = useSmallSize();
  return (
    <Box>
      <Typography variant={isSmallSize ? "h3" : "h3"}>
        The Tree House
      </Typography>
      <Box className={classes.subHeading}>
        <Box className={classes.subHeadingInner}>
          <span><StarIcon style={{ color: 'green' }} /></span>
          <Typography
            color="textSecondary"
            className={''}
            variant="body2"
          >
            4,5(24 Review) <span className={classes.borderSpan}></span> Canada, Quebec
          </Typography>
        </Box>
        <Box className={classes.subHeadingInner}>
          <Typography
            color="textSecondary"
            className={''}
            variant="body2"
          >
            Save
            <span className={classes.mainHeadingIcon}>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.50075 1.14673C9.2625 -0.435015 11.985 -0.382515 13.6823 1.31773C15.3788 3.01873 15.4373 5.72774 13.8593 7.49473L7.49925 13.8637L1.14075 7.49473C-0.437245 5.72774 -0.377995 3.01424 1.31775 1.31773C3.0165 -0.380265 5.73375 -0.437265 7.50075 1.14673ZM12.6203 2.37749C11.4953 1.25099 9.68025 1.20524 8.50275 2.26274L7.5015 3.16124L6.4995 2.26348C5.31825 1.20449 3.507 1.25098 2.379 2.37898C1.2615 3.49648 1.20525 5.28523 2.235 6.46724L7.5 11.7405L12.765 6.46798C13.7955 5.28523 13.7393 3.49873 12.6203 2.37749Z" fill="#9AA7C1" />
              </svg>
            </span>
          </Typography>
          <Typography
            color="textSecondary"
            className={''}
            variant="body2"
          >
            Share
            <span className={classes.mainHeadingIcon}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 0.25V1.75H1.75V12.25H12.25V8.5H13.75V13C13.75 13.1989 13.671 13.3897 13.5303 13.5303C13.3897 13.671 13.1989 13.75 13 13.75H1C0.801088 13.75 0.610322 13.671 0.46967 13.5303C0.329018 13.3897 0.25 13.1989 0.25 13V1C0.25 0.801088 0.329018 0.610322 0.46967 0.46967C0.610322 0.329018 0.801088 0.25 1 0.25H5.5ZM11.1895 1.75H7.75V0.25H13.75V6.25H12.25V2.8105L7 8.0605L5.9395 7L11.1895 1.75Z" fill="#9AA7C1" />
              </svg>
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TreeHouseHeadingSection;
