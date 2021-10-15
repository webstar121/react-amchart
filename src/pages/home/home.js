import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OATypography from "../../common/components/oaTypography";
import OAContainer from "../../common/components/oaContainer";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#10ac84",
    fontSize: "32px",
    lineHeight: "43px",
    letterSpacing: 0.41,
    marginBottom: theme.spacing(5),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <OAContainer>
      <OATypography
        label="Home"
        capitalize
        className={classes.title}
        variant="h4"
      />
    </OAContainer>
  );
};

export default Home;
