import { Grid, TextField } from "@mui/material";
import React from "react";
import Background from "./components/Background";

const HomePage = () => {
  const backgroundPicture = () => {
    return "https://source.unsplash.com/random/1920x1080";
  };

  return (
    <Background backgroundPicture={backgroundPicture()}>
      <Grid container alignContent="center" justifyContent="center">
        <TextField variant="outlined" sx={} />
      </Grid>
    </Background>
  );
};

export default HomePage;
