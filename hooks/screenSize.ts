import { useMediaQuery, Theme } from "@material-ui/core";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

export const useSmallSize = () => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
};

export const useSmallerSize = () => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down("xs"));
};

export const useMediumSize = () => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
};

export const useLargeSize = () => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
};

export const useScreenSizeDown = (key: number | Breakpoint) => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down(key));
};
