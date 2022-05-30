import React from "react";
import { createRoot } from "react-dom/client";

import { FirebaseAppProvider } from "reactfire";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { getFirebaseConfig } from "./utils";
import mainTheme from "./palettes/mainTheme";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={getFirebaseConfig}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </FirebaseAppProvider>
  </React.StrictMode>
);
