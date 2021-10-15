import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import OATypography from "./oaTypography";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    padding: theme.spacing(2, 4),
    boxSizing: "border-box",

    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 1),
    }
  },
  container: {
    height: "calc(100% - 24px)",
    overflowX: "auto",

    "&::-webkit-scrollbar": {
      width: 16,
      height: 16,
      background: "#fafafa",
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: 8,
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#B0B6B8",
      borderRadius: 8,
      border: "4px solid #fffe",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#B0B6B899",
    },
  },
  title: {
    color: "#636E72",
  },
  th: {
    "& th": {
      background: "#fff",
      color: "#636E72",
      fontSize: 12,
      border: "none",
      fontWeight: 500,
      padding: theme.spacing(2, 0),
    },
  },
  tbody: {
    "& td": {
      color: "#636E72",
      fontSize: 12,
      border: "none",
      padding: theme.spacing(1, 0),
    },
  },
}));

const OAStickyHeadTable = ({ title, columns, data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <OATypography
        variant="body1"
        capitalize
        label={title}
        className={classes.title}
      />
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className={classes.th}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={classes.tbody}>
            {data.map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OAStickyHeadTable;
