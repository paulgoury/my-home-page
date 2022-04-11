import React from "react";
import ReactDOM from "react-dom";
import { FirebaseAppProvider } from "reactfire";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import getFireBaseConfig from "./tools/getFireBaseConfig";
import { myTheme } from "./palettes";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={getFireBaseConfig}>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
