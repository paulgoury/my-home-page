import React from "react";
import Background from "./components/Background";
import Main from "./layout/Main";

const HomePage = () => {
  const backgroundPicture = () => {
    return "";
    // https://source.unsplash.com/random/1920x1080
  };

  return (
    <Background backgroundPicture={backgroundPicture()}>
      <Main />
    </Background>
  );
};

export default HomePage;
