import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import OAContainer from "../../common/components/oaContainer";
import OATypography from "../../common/components/oaTypography";
import DashboardDetails from "./components/dashboardDetails";
import RevenueDetailsTable from "./components/revenueDetailsTable";
import RevenueAndCostOfGoodsChart from "./components/revenueAndCostOfGoodsChart";
import RevenueAndGrossMarginChart from "./components/revenueAndGrossMarginChart";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#10ac84",
    fontSize: "32px",
    lineHeight: "43px",
    letterSpacing: 0.41,
    marginBottom: theme.spacing(5),
  },
}));

const dashboardDetails = [
  {
    title: "revenue",
    current: 9000000,
    prev: 7500000,
    isCurrency: true,
  },
  {
    title: "cost of goods",
    current: 4000000,
    prev: 5000000,
    isCurrency: true,
  },
  {
    title: "gross margin",
    current: 5000000,
    prev: 4000000,
    isCurrency: true,
  },
  {
    title: "gross margin %",
    current: 55.5,
    prev: 40,
    isCurrency: false,
  },
];

const Dashboard = () => {
  const classes = useStyles();

  return (
    <OAContainer>
      <OATypography
        label="my dashboard"
        capitalize
        className={classes.title}
        variant="h4"
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DashboardDetails
            details={dashboardDetails}
            duration={"Aug 2020"}
            timeUnit={"M"}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <RevenueAndCostOfGoodsChart />
            </Grid>
            <Grid item xs={12}>
              <RevenueAndGrossMarginChart />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <RevenueDetailsTable />
        </Grid>
      </Grid>
    </OAContainer>
  );
};

export default Dashboard;
