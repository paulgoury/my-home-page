import React from "react";
import ReactDOM from "react-dom";

import { FirebaseAppProvider } from "reactfire";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { getFirebaseConfig } from "./utils";
import { mainTheme } from "./palettes";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={getFirebaseConfig}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
