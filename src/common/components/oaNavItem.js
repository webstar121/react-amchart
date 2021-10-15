import React, { useCallback } from "react";

import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(() => ({
  icon: {
    minWidth: 47,
  },
}));

const OANavItem = ({ item, className, handleClick }) => {
  const classes = useStyles();

  return (
    <ListItem button onClick={handleClick} className={className}>
      <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
      <ListItemText>{item.label}</ListItemText>
    </ListItem>
  );
};

export default OANavItem;
