import { Helmet } from "react-helmet";
import { Box, colors, Container, Grid } from "@material-ui/core";
import Users from "../../dashboard/Users";
import LatestOrders from "../../dashboard/Latestorders";

import Sales from "../../dashboard/Sales";
import FacturesValides from "../../dashboard/FacturesValides";
import TotalCustomers from "../../dashboard/TotalCustomers";
import TotalProfit from "../../dashboard/TotalProfit";
import TrafficByDevice from "../../dashboard/TrafficByDevice";
import "./dashboard.css";
import theme from "../theme";
import Piechartscomponent from "../../dashboard/Piechartscomponent";
const Dashboard = () => (
  <>
    <Helmet theme={theme}>
      <title>Dashboard </title>
    </Helmet>
    <Box
      theme={theme}
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 3,
      }}
    >
      <Container theme={theme} maxWidth={false}>
        <Grid container spacing={3}>
          <Grid theme={theme} item lg={3} sm={6} xl={3} xs={12}>
            <Users />
          </Grid>
          <Grid theme={theme} item lg={3} sm={6} xl={3} xs={12}>
            <TotalCustomers />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <FacturesValides />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalProfit sx={{ height: "100%" }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Sales />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <TrafficByDevice sx={{ height: "100%" }} />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <Piechartscomponent sx={{ height: "100%" }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard ;
