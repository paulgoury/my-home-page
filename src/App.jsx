import MyAuthentication from "./views/auth/MyAuthentication";
import HomePage from "./views/homePage/HomePage";
import { simpleDarkTheme } from "./palettes";

import "./app.css";
import { ThemeProvider } from "@mui/material/styles";
import { SettingsContextProvider } from "./views/homePage/tools";

function App() {
  return (
    <SettingsContextProvider>
      <div className="app-container">
        {/* <MyAuthentication /> */}
        <ThemeProvider theme={simpleDarkTheme}>
          <HomePage />
        </ThemeProvider>
      </div>
    </SettingsContextProvider>
  );
}

export default App;
