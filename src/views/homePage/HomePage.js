import React, { useState } from "react";
import Background from "./components/Background";
import MainGrid from "./layout/MainGrid";
import "./homePage.css";
import WidgetsMenu from "./layout/WidgetsMenu";
import MyContext from "./tools/MyContext";

const HomePage = () => {
  const [edit, setEdit] = useState();

  const backgroundPicture = () => {
    return "";
    // https://source.unsplash.com/random/1920x1080
  };

  return (
    <Background backgroundPicture={backgroundPicture()}>
      <MyContext.Provider value={{ edit, setEdit }}>
        <MainGrid />
        <WidgetsMenu />
      </MyContext.Provider>
    </Background>
  );
};

export default HomePage;
