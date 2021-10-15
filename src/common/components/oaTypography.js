import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import { maxCharacter } from "../../utils/util";
import clsx from "clsx";

const useStyles = makeStyles({
  italic: {
    fontStyle: "italic",
  },
  uppercase: {
    textTransform: "uppercase",
  },
  bold: {
    fontWeight: 700,
  },
  semibold: {
    fontWeight: 600,
  },
  medium: {
    fontWeight: 500,
  },
  capitalize: {
    textTransform: "capitalize",
  },
});

function OATypography({
  label,
  children = null,
  uppercase = false,
  italic = false,
  bold = false,
  semibold = false,
  medium = false,
  capitalize = false,
  className = null,
  maxCharacters = 0,
  ...otherProps
}) {
  const classes = useStyles();
  return (
    <Typography
      {...otherProps}
      className={clsx(
        {
          [classes.uppercase]: uppercase,
          [classes.italic]: italic,
          [classes.bold]: bold,
          [classes.semibold]: semibold,
          [classes.medium]: medium,
          [classes.capitalize]: capitalize,
        },
        className
      )}
    >
      {label ? (
        maxCharacters ? (
          <span title={label}>{maxCharacter(label, maxCharacters)}</span>
        ) : (
          label
        )
      ) : (
        <Skeleton />
      )}
      {children ?? null}
    </Typography>
  );
}

export default OATypography;
