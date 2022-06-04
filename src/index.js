import React from "react";
import { createRoot } from "react-dom/client";

import { FirebaseAppProvider } from "reactfire";

import { CssBaseline } from "@mui/material";

import { getFirebaseConfig } from "./utils";
import { SettingsContextProvider } from "./tools";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={getFirebaseConfig}>
      <SettingsContextProvider>
        <CssBaseline />
        <App />
      </SettingsContextProvider>
    </FirebaseAppProvider>
  </React.StrictMode>
);
