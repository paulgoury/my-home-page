import MyBackground from "./components/MyBackground";
import SettingsContextProvider from "./tools/Context/SettingsContextProvider";

import MainGrid from "./containers/MainGrid/MainGrid";
import WidgetsMenu from "./containers/WidgetsMenu/WidgetsMenu";

import "./homePage.css";

const HomePage = () => {
  return (
    <MyBackground>
      <SettingsContextProvider>
        <MainGrid />
        <WidgetsMenu />
      </SettingsContextProvider>
    </MyBackground>
  );
};

export default HomePage;
