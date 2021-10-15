import React from "react";
import { makeStyles } from "@material-ui/core";
import OACardBox from "./oaCardBox";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    width: "100%",
  },
  container: {
    position: "absolute",
    height: "100%",
  },
}));

const OAChartWrapper = ({ children, className }) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, classes.root)}>
      <OACardBox className={classes.container}>{children}</OACardBox>
    </div>
  );
};

export default OAChartWrapper;
