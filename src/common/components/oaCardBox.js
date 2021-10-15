import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  cardWrap: {
    background: theme.palette.common.white,
    width: "100%",
    boxSizing: "border-box",
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: 6,
    overflow: "hidden",
    padding: 0,
  },
}));

function OACardBox({ children, className = null, p = 0, ...otherProps }) {
  const classes = useStyles();
  return (
    <Box p={p} {...otherProps} className={clsx(classes.cardWrap, className)}>
      {children}
    </Box>
  );
}

export default OACardBox;
