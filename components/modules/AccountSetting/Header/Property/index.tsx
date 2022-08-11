import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import {
  Container,
  Box,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import PropTypes from "prop-types";
import AppButton from "src/components/elements/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { getProperties } from "src/services/api/listingForm";
import MyPropertyDetails from "./MyPorpertyDetails";
import { useRouter } from "next/router";

const createData = (
  name: any,
  beds: any,
  maxguest: any,
  lastnotification: any,
  status: any,
  modify: any
) => {
  return { name, beds, maxguest, lastnotification, status, modify };
};

const rows = [
  createData("Cupcake", 4, 8, "29 May 2021", "In Review", "Modify"),
  createData("Donut", 8, 4, "29 May 2021", "In Review", "Modify"),
  createData("Eclair", 4, 4, "29 May 2021", "In Review", "Modify"),
  createData("Frozen yoghurt", 5, 8, "29 May 2021", "In Review", "Modify"),
  createData("Gingerbread", 4, 4, "29 May 2021", "In Review", "Modify"),
];

// const descendingComparator = (a: any, b: any, orderBy: any) => {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// };

// const getComparator = (order: any, orderBy: any) => {
//   return order === "desc"
//     ? (a: any, b: any) => descendingComparator(a, b, orderBy)
//     : (a: any, b: any) => -descendingComparator(a, b, orderBy);
// };

// const stableSort = (array: any, comparator: any) => {
//   const stabilizedThis = array.map((el: any, index: any) => [el, index]);
//   stabilizedThis.sort((a: any, b: any) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el: any) => el[0]);
// };

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "NAME",
  },
  { id: "beds", numeric: true, disablePadding: false, label: "BEDS" },
  { id: "maxguest", numeric: true, disablePadding: false, label: "Max. GUEST" },
  {
    id: "lastnotification",
    numeric: false,
    disablePadding: false,
    label: "LAST MODIFICATION",
  },
  { id: "status", numeric: false, disablePadding: false, label: "Status" },
  { id: "modify", numeric: false, disablePadding: false, label: "" },
];

function EnhancedTableHead(props: any) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property: any) => (event: any) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className={classes.tableHead}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = () => {
  return <></>;
};

const MyProperty = () => {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage] = React.useState(5);
  const [propertyName, setPropertyName] = useState(false);
  const [allProperty, setAllProperty]: any = useState();
  const [allSingleProperty, setAllSingleProperty]: any = useState();
  // const { control } = useForm();
  const router = useRouter();
  const handleRequestSort = (property: any) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  useEffect(() => {
    getProperties()
      .then((d) => {
        setAllProperty(d);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSelectAllClick = (event: any) => {
    if (event.target.checked) {
      const newSelecteds: any = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const handleSingleProperty = (_id: any) => {
    setAllSingleProperty(_id);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.propertyWrap}>
      {!propertyName ? (
        <Container className={classes.container}>
          <>
            <Box className={classes.accountHeader}>
              <Typography variant="h6">My properties</Typography>
              <Typography>You have {allProperty?.total} property</Typography>
            </Box>
            <Box className={classes.propertyTable}>
              <Paper className={classes.paper}>
                <EnhancedTableToolbar />
                <TableContainer>
                  <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size={dense ? "small" : "medium"}
                    aria-label="enhanced table"
                  >
                    <EnhancedTableHead
                      classes={classes}
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      onSelectAllClick={handleSelectAllClick}
                      onRequestSort={handleRequestSort}
                      rowCount={rows.length}
                    />
                    <TableBody className={classes.tableBody}>
                      {allProperty?.items?.map((row: any) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.name}
                            onClick={() => handleSingleProperty(row.id)}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox />
                            </TableCell>
                            <TableCell
                              component="th"
                              scope="row"
                              padding="none"
                              className={classes.propertyName}
                            >
                              <Box display="flex">
                                <Avatar src={"/images/property.png"} />
                                <Box onClick={() => setPropertyName(true)}>
                                  <Typography variant="h6">
                                    Property Name
                                  </Typography>
                                  <Typography>{row?.full_address}</Typography>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell>{row.number_of_beds}</TableCell>
                            <TableCell>{row.maximum_guests}</TableCell>
                            <TableCell>{row.lastnotification}</TableCell>
                            <TableCell className={classes.status}>
                              {row.status}
                            </TableCell>
                            <TableCell>
                              <Box className={classes.modifyContain}>
                                modify
                              </Box>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                      {emptyRows > 0 && (
                        <TableRow
                          style={{ height: (dense ? 33 : 53) * emptyRows }}
                        >
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Box>
            {allProperty?.items?.map((row: any) => {
                        return (
            <Box className={classes.propertyAccordionMain}>
              <Accordion className={classes.propertyAccordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      flexWrap="wrap"
                      className={classes.propertyName}
                    >
                      {/* <Controller
                        name="name"
                        control={control}
                        render={({ field: { value, ...others } }) => (
                          <AppCheckBox
                            {...others}
                            // label="Optional?"
                            value={value === undefined ? false : value}
                          />
                        )}
                      /> */}
                      <Avatar src={"/images/property.png"} />
                      <Box onClick={() => setPropertyName(true)}>
                        <Typography variant="h6">Property Name</Typography>
                        <Typography>{row?.full_address}</Typography>
                      </Box>
                    </Box>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.propertyDetails}
                  >
                    <Typography variant="h6">BEDS</Typography>
                    <Typography>{row.number_of_beds}</Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.propertyDetails}
                  >
                    <Typography variant="h6">MAx. Guest</Typography>
                    <Typography>{row.maximum_guests}</Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.propertyDetails}
                  >
                    <Typography variant="h6">Last modification</Typography>
                    <Typography>{row.lastnotification}</Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.propertyDetails}
                  >
                    <Typography variant="h6">STATUS</Typography>
                    <Typography>{row.status}</Typography>
                  </Box>
                  <AppButton
                    color="primary"
                    fullWidth
                    onClick={() => router.push("/my-properties")}
                    className={classes.btnModify}
                    variant="contained"
                  >
                    Modify
                  </AppButton>
                  {/* <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={classes.btnModify}
                  onClick={() => router.push("/my-properties")}
                >
                  <Typography variant="button">Modify</Typography>
                </Box> */}
                </AccordionDetails>
              </Accordion>
            </Box>
                        )})}
          </>
        </Container>
      ) : (
        <MyPropertyDetails
          setPropertyName={setPropertyName}
          allSingleProperty={allSingleProperty}
        />
      )}
    </div>
  );
};
export default MyProperty;
