import React from "react";
import { createRoot } from "react-dom/client";

import { CssBaseline } from "@mui/material";

import { SettingsContextProvider } from "./tools";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <SettingsContextProvider>
      <CssBaseline />
      <App />
    </SettingsContextProvider>
  </React.StrictMode>
);
