import { MyBackground } from "./components";
import { SettingsContextProvider } from "./tools";
import { MainGrid, WidgetsMenu } from "./containers";

import "./homePage.css";

function HomePage() {
  return (
    <MyBackground>
      <SettingsContextProvider>
        <MainGrid />
        <WidgetsMenu />
      </SettingsContextProvider>
    </MyBackground>
  );
}

export default HomePage;
