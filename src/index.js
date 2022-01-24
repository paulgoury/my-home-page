import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import myTheme from "./myTheme.js";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
