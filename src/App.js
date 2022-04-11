import { ThemeProvider } from "@emotion/react";

import { mySimpleThemeDark } from "./palettes";
import MyAuthentication from "./views/auth/MyAuthentication";
import HomePage from "./views/homePage/HomePage";

import "./app.css";

function App() {
  return (
    <div className="app-container">
      {/* <MyAuthentication /> */}
      <ThemeProvider theme={mySimpleThemeDark}>
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
