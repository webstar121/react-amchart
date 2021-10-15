import React, { useCallback, useState, useEffect, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Drawer from "@material-ui/core/Drawer";
import HomeIcon from "@material-ui/icons/Home";
import List from "@material-ui/core/List";
import Tooltip from "@material-ui/core/Tooltip";
import ListItem from "@material-ui/core/ListItem";
import NavItem from "./oaNavItem";
import useScreenSnap from "../hooks/useScreenSnap";
import OATypography from "./oaTypography";
import clsx from "clsx";
import useComponentVisible from "../hooks/useComponentVisible";

const desktopWidth = 280;
const mobileWidth = 57;

const useStyles = makeStyles((theme) => ({
  root: {
    width: desktopWidth,
    height: "100vh",
    flexShrink: 0,
    whiteSpace: "nowrap",
    background: "none",
    boxShadow: "0px 2px 4px #00000054",
    zIndex: 10,

    [theme.breakpoints.down("sm")]: {
      position: "fixed",
    },
  },
  hide: {
    display: "none",
  },
  drawerOpen: {
    width: desktopWidth,
    background: "#10AC84",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    width: mobileWidth,
    background: "#10AC84",
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  tinyMode: {
    height: "fit-content",
    background: "none",
    boxShadow: "none",
    borderRight: "none",
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(0, 5),
    marginTop: theme.spacing(4),

    [theme.breakpoints.down("sm")]: {
      padding: 0,
      justifyContent: "center",
    },

    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(1.5),
      background: "#10AC84",
    },
  },
  logoWrapperMin: {
    borderRadius: 25,
    padding: 0,
    boxShadow: "1px 1px 2px 1px #0005",
    marginBottom: "2px",
    marginRight: "2px",
  },
  logo: {
    fontSize: theme.typography.h6.fontSize,
    lineHeight: 26,
    color: theme.palette.common.white,
    textDecoration: "none",
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navItem: {
    color: theme.palette.common.white,
    borderLeft: "8px solid #fff0",
    padding: theme.spacing(1.5, 4),

    "& svg": {
      fill: theme.palette.common.white,
    },

    "&:hover": {
      background: "#0E8E6D99",
    },
  },
  active: {
    background: "#0E8E6D",
    borderLeft: "8px solid #ffff",
  },
  navMinItem: {
    borderLeft: "none",
    padding: theme.spacing(1.5, 2),

    "&:hover": {
      background: "#0E8E6D99",
    },
  },
}));

const NAV_ITEMS = [
  {
    path: "/home",
    label: "Home",
    icon: <HomeIcon />,
  },
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: <DashboardIcon />,
  },
];

const OASidebar = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const { isMobile, isTablet } = useScreenSnap();
  const [open, setOpen] = useState(true);
  const [activeRoute, setActiveRoute] = useState("/");
  const { ref, isComponentVisible } = useComponentVisible(true);

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  useEffect(() => {
    setOpen(isTablet || isMobile ? false : true);
  }, [isTablet, isMobile]);

  useEffect(() => {
    if (!isComponentVisible) {
      setOpen(false);
    }
  }, [isComponentVisible]);

  const isActive = useCallback(
    (path) => {
      return activeRoute.includes(path);
    },
    [activeRoute]
  );

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleNavigation = useCallback((url) => {
    history.push(url);
    if (isMobile || (isTablet && open)) {
      setOpen(!open);
    }
  });

  return (
    <Drawer
      variant="permanent"
      ref={ref}
      className={clsx(classes.root, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
        [classes.tinyMode]: !open && isMobile,
      })}
      classes={{
        paper: clsx(classes.root, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
          [classes.tinyMode]: !open && isMobile,
        }),
      }}
    >
      <div
        className={clsx(classes.logoWrapper, {
          [classes.logoWrapperMin]: !open,
        })}
      >
        <ListItem button className={classes.logo} onClick={() => handleClick()}>
          {!open ? (
            <OATypography label="OA" variant="h6" />
          ) : (
            <OATypography label="OverlayAnalytics" variant="h6" />
          )}
        </ListItem>
      </div>
      {(!isMobile || open) && (
        <List>
          {!open &&
            NAV_ITEMS.map((item) => (
              <Tooltip title={item.label} key={item.path} placement="right">
                <div>
                  <NavItem
                    item={item}
                    className={clsx(classes.navItem, {
                      [classes.active]: isActive(item.path),
                      [classes.navMinItem]: !open,
                    })}
                    handleClick={() => handleNavigation(item.path)}
                  />
                </div>
              </Tooltip>
            ))}
          {open &&
            NAV_ITEMS.map((item) => (
              <NavItem
                item={item}
                key={item.path}
                className={clsx(classes.navItem, {
                  [classes.active]: isActive(item.path),
                  [classes.navMinItem]: !open,
                })}
                handleClick={() => handleNavigation(item.path)}
              />
            ))}
        </List>
      )}
    </Drawer>
  );
};

export default OASidebar;
