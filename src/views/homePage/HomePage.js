import { Background, MainGrid, WidgetsMenu } from "./containers";
import { SettingsContextProvider } from "./tools";

import "./homePage.css";

function HomePage() {
  return (
    <SettingsContextProvider>
      <Background>
        <MainGrid />
        <WidgetsMenu />
      </Background>
    </SettingsContextProvider>
  );
}

export default HomePage;
