import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import clsx from "clsx";
import OATypography from "./oaTypography";
import OACardBox from "./oaCardBox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    width: "100%",
    height: 130,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: theme.spacing(2, 3.5),

    "& *": {
      color: "#636E72",
    },

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1, 2),
    },
  },
  proWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    right: theme.spacing(3),
    bottom: theme.spacing(1.5),

    [theme.breakpoints.down("sm")]: {
      right: theme.spacing(1.5),
    },
  },
  pro: {
    display: "flex",
    width: 115,
    height: 23,
    background: "#B0B6B8",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
      width: 96,
    },

    "& *": {
      color: theme.palette.common.white,
    },
    "& p": {
      fontSize: 18,
      lineHeight: 1,
    },
  },
  down: {
    background: "#E66767",
  },
}));

const OAKPICard = ({ value, title, pro, isCurrency, duration, timeUnit }) => {
  const classes = useStyles();

  return (
    <OACardBox>
      <MenuItem className={classes.root} component="button">
        <OATypography label={title} variant="body1" capitalize />
        <Grid container alignItems="center">
          {isCurrency && <OATypography label="$" variant="h4" medium />}
          <OATypography label={value} variant="h4" medium />
          {!isCurrency && <OATypography label="%" variant="h4" medium />}
        </Grid>
        <OATypography label={duration} variant="subtitle2" />
        <div className={classes.proWrapper}>
          <div className={clsx(classes.pro, { [classes.down]: pro < 0 })}>
            <Grid container alignItems="center" justifyContent="center">
              <OATypography variant="body2" label={Math.abs(pro) + "%"} />
              {pro > 0 && <ArrowUpwardIcon />}
              {pro < 0 && <ArrowDownwardIcon />}
            </Grid>
          </div>
          <OATypography label={timeUnit + "o" + timeUnit} variant="subtitle2" />
        </div>
      </MenuItem>
    </OACardBox>
  );
};

export default OAKPICard;
