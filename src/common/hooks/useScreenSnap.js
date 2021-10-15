import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function useScreenSnap() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const isBelowDesktop = useMediaQuery(theme.breakpoints.down("sm"));
  const isBelowTablet = useMediaQuery(theme.breakpoints.down("sm"));

  return { isDesktop, isTablet, isMobile, isBelowDesktop, isBelowTablet };
}

export default useScreenSnap;
