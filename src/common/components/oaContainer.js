import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: theme.spacing(9, 10.5),
    background: "#F3F3F3",
    overflow: "hidden",

    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(9, 4),
    },

    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(7),
      padding: theme.spacing(9, 2),
    },

    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      paddingTop: theme.spacing(12),
    },
  },
}));

function OAContainer({ children, className = null }) {
  const classes = useStyles();
  return <Box className={clsx(className, classes.root)}>{children}</Box>;
}

export default OAContainer;
