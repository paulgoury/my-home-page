import { Grid } from "@mui/material";
import React from "react";
import Background from "./components/Background";
import SearchTextField from "./components/SearchTextField";

const HomePage = () => {
  const backgroundPicture = () => {
    return "https://source.unsplash.com/random/1920x1080";
  };

  return (
    <Background backgroundPicture={backgroundPicture()}>
      <Grid container alignContent="center" justifyContent="center">
        <SearchTextField />
      </Grid>
    </Background>
  );
};

export default HomePage;
