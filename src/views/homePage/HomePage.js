import React, { useState } from "react";
import MyBackground from "./components/MyBackground";
import MainGrid from "./containers/MainGrid";
import "./homePage.css";
import WidgetsMenu from "./containers/WidgetsMenu";
import MyContext from "./tools/MyContext";

const HomePage = () => {
  const [edit, setEdit] = useState();

  const backgroundPicture = () => {
    return "";
    // https://source.unsplash.com/random/1920x1080
  };

  return (
    <MyBackground backgroundPicture={backgroundPicture()}>
      <MyContext.Provider value={{ edit, setEdit }}>
        <MainGrid />
        <WidgetsMenu />
      </MyContext.Provider>
    </MyBackground>
  );
};

export default HomePage;
