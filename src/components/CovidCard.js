import React from "react";
import { Card, CardContent } from "@mui/material/";
import Grid from "@mui/material/Grid";
const CovidCard = (props) => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 300, maxHeight: 300 }}>
            <CardContent>
              <p>
                <span>our</span> Country
              </p>
              <p>{props.data["Country_text"]}</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent>
              <p>
                <span>total</span> Recovered
              </p>
              <p>{props.data["Total Recovered_text"]}</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent>
              <p>
                <span>total</span> Confirmed
              </p>
              <p>{props.data["Total Cases_text"]}</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent>
              <p>
                <span>total</span> Deaths
              </p>
              <p>{props.data["Total Deaths_text"]} </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 300 }}>
            <CardContent>
              <p>
                <span>total</span> Updated
              </p>
              <p>{props.data["Last Update"]}</p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CovidCard;
