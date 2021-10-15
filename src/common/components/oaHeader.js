import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import HelpIcon from "@material-ui/icons/Help";
import PersonIcon from "@material-ui/icons/Person";
import Tooltip from "@material-ui/core/Tooltip";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "fixed",
    width: "100%",
    height: 72,
    zIndex: 10,
    transitionProperty: "all",
    transitionDuration: "0.5s",
    background: "#FFFFFF00",
  },
  strong: {
    background: "#FFFFFFFF",
    boxShadow: "0 0 2px #0003",

    [theme.breakpoints.down("xs")]: {
      background: "#18b28c",
    },
  },
  root: {
    position: "fixed",
    right: theme.spacing(0.5),
    top: theme.spacing(3),
    zIndex: 10,
  },
  headerIcon: {
    minWidth: "fit-content",
    marginRight: theme.spacing(2.5),

    "& svg": {
      fontSize: 27,
      color: "#636E72",
    },

    "&:hover svg": {
      color: "#10AC84",
    },
  },
  strongIcon: {
    [theme.breakpoints.down("xs")]: {
      "& svg": {
        color: theme.palette.common.white,
      },

      "&:hover svg": {
        color: "#12f338",
      },
    },
  },
}));

const HEADER_ITEMS = [
  {
    label: "Search",
    icon: <SearchIcon />,
  },
  {
    label: "Filter",
    icon: <WbSunnyIcon />,
  },
  {
    label: "Help",
    icon: <HelpIcon />,
  },
  {
    label: "User",
    icon: <PersonIcon />,
  },
];

const OAHeader = () => {
  const classes = useStyles();
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback((e) => {
    const window = e.currentTarget;
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div
      className={clsx(classes.wrapper, {
        [classes.strong]: y > 50,
      })}
    >
      <div className={classes.root}>
        <Grid container>
          {HEADER_ITEMS.map((item) => (
            <Grid item key={item.label}>
              <Tooltip title={item.label}>
                <ListItemIcon
                  className={clsx(classes.headerIcon, {
                    [classes.strongIcon]: y > 50,
                  })}
                >
                  {item.icon}
                </ListItemIcon>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default OAHeader;
