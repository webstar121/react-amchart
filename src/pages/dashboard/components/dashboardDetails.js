import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import OAKPICard from "../../../common/components/oaKPICard";
import { getFormatedNumberWithK, getUpdatedPro } from "../../../utils/util";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",

    "& > div": {
      [theme.breakpoints.down("sm")]: {
        width: "200%",
      },
    },
  },
  statistics: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(1.75, 0),
    cursor: "pointer",
  },
  hint: {
    fontSize: 10,
    color: "#182026B2",
  },
  card: {
    padding: 0,
  },
}));

const DashboardDetails = ({ details, duration, timeUnit }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {details.map((detail, index) => {
            return (
              <Grid item xs={12} sm={6} xl={3} key={index}>
                <OAKPICard
                  value={getFormatedNumberWithK(Number(detail.current))}
                  pro={getUpdatedPro(detail.current, detail.prev)}
                  title={detail.title}
                  duration={duration}
                  timeUnit={timeUnit}
                  isCurrency={detail.isCurrency}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardDetails;
