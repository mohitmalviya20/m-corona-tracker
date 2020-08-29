import React from "react";

import "./cards.css";
import { CardContent, Typography, Grid, Card } from "@material-ui/core";
import CountUp from "react-countup";
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "loading";
  }
  return (
    <div className="container">
      <Grid container spacing={3} justify="center" className="card">
        <Grid item component={Card} className="infected">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography varaint="h5">
              {
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
              }
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varaint="body2">number of infected cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} className="recovered">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography varaint="h5">
              {
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                />
              }
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varaint="body2">no of recovered cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} className="deaths">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography varaint="h5">
              {
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                />
              }
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varaint="body2">no of deaths cases</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
