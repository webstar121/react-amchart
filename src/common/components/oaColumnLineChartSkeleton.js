import React from "react";
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: "100%",
    height: "100%",
    padding: theme.spacing(2),
    boxSizing: "border-box",
  },
  hFull: {
    height: "100%",
  },
  valueAxisUnit: {
    display: "flex",
    height: "33.33%",
    alignItems: "flex-end",
  },
  unit: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  unitColumn: {
    borderRadius: 4,
  },
}));

const mockData = [];
for (let i = 0; i < 12; i++) {
  mockData.push(Math.random() * 100);
}
const OAColumnLineChartSkeleton = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-between">
        <Skeleton variant="text" width={"30%"} height={24} />
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <Skeleton variant="text" width={40} height={20} />
            </Grid>
            <Grid item>
              <Skeleton variant="text" width={40} height={20} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={1} className={classes.hFull}>
        <Grid item xs={1}>
          <Grid container spacing={1} className={classes.hFull}>
            <Grid item xs={12} className={classes.valueAxisUnit}>
              <Skeleton
                variant="text"
                animation="wave"
                width={32}
                height={16}
              />
            </Grid>
            <Grid item xs={12} className={classes.valueAxisUnit}>
              <Skeleton
                variant="text"
                animation="wave"
                width={32}
                height={16}
              />
            </Grid>
            <Grid item xs={12} className={classes.valueAxisUnit}>
              <Skeleton
                variant="text"
                animation="wave"
                width={32}
                height={16}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={11} className={classes.hFull}>
          <Grid container className={classes.hFull} spacing={1}>
            {mockData.map((pro) => (
              <Grid item xs={1} className={classes.unit} key={pro}>
                <Skeleton
                  variant="rect"
                  width={"100%"}
                  height={pro}
                  className={classes.unitColumn}
                />
                <Skeleton variant="text" width={"100%"} height={16} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OAColumnLineChartSkeleton;
