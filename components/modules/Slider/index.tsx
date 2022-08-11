import clsx from "clsx";
import { ContainerProps, IconButton } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useStyles } from "./styles";

interface Props {
  removeArrowsOnMobile?: boolean;
  rootProps?: Omit<ContainerProps, "children">;
  rootChildren?: React.ReactNode;
}

const responsive = {
  Largedesktop: {
    breakpoint: { max: 3000, min: 1446 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1445, min: 1024 },
    items: 4,
  },
  Largetablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 767, min: 426 },
    items: 2.5,
  },
  mobile: {
    breakpoint: { max: 425, min: 321 },
    items: 1.5,
    width: "300px",
  },
  SmallMobile: {
    breakpoint: { max: 320, min: 0 },
    items: 1.2,
  }
};

const EnhancedSlider: React.FC<Props> = ({
  children,
  removeArrowsOnMobile,
  rootProps,
  rootChildren,
}) => {
  const classes = useStyles();

  const btnClassNames = removeArrowsOnMobile
    ? [classes.btn, classes.displayNone]
    : [classes.btn];

  const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <IconButton
        onClick={onClick}
        className={clsx(...btnClassNames, classes.nextBtn, classes.displayNone)}
      >
        <ChevronRight />
      </IconButton>
    );
  };
  const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <IconButton
        onClick={onClick}
        className={clsx(...btnClassNames, classes.prevBtn, classes.displayNone)}
      >
        <ChevronLeft />
      </IconButton>
    );
  };

  return (
    <div {...rootProps} className={clsx(classes.root, rootProps?.className)}>
      {rootChildren}

      <Carousel
        responsive={responsive}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        className={classes.SliderItem}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default EnhancedSlider;
