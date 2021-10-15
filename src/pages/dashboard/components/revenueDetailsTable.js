import React from "react";
import { makeStyles } from "@material-ui/core";
import OAChartWrapper from "../../../common/components/oaChartWrapper";
import OAStickyHeadTable from "../../../common/components/oaStickyHeadTable";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "calc(90% + 16px)",

    [theme.breakpoints.down("xs")]: {
      paddingBottom: "150%",
    },
  },
}));

const columns = [
  { id: "invoiceId", label: "Invoice #", minWidth: 110 },
  { id: "customerName", label: "Customer", minWidth: 100 },
  {
    id: "invoiceDate",
    label: "Invoice Date",
    minWidth: 110,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "revenue",
    label: "Revenue",
    minWidth: 110,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "costOfGoods",
    label: "Cost of Goods",
    minWidth: 110,
    format: (value) => value.toFixed(2),
  },
  {
    id: "grossMargin",
    label: "Gross Margin",
    minWidth: 110,
    format: (value) => value.toFixed(2),
  },
];

function createData(
  invoiceId,
  customerName,
  invoiceDate,
  revenue,
  costOfGoods,
  grossMargin
) {
  revenue = "$" + Number(revenue).toFixed(2);
  costOfGoods = "$" + Number(costOfGoods).toFixed(2);
  grossMargin = "$" + Number(grossMargin).toFixed(2);
  return {
    invoiceId,
    customerName,
    invoiceDate,
    revenue,
    costOfGoods,
    grossMargin,
  };
}

const data = [
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
  createData(12345, "Customer 1", "10/30/2020", "6000", "2000", "4000"),
];

const RevenueDetailsTable = () => {
  const classes = useStyles();

  return (
    <OAChartWrapper className={classes.root}>
      <OAStickyHeadTable
        title={"Revenue Details"}
        columns={columns}
        data={data}
      />
    </OAChartWrapper>
  );
};

export default RevenueDetailsTable;
