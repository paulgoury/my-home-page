import { pink, teal } from "@mui/material/colors";

function customPalettes() {
  const dark = {
    palette: {
      mode: "dark",
      primary: {
        main: "#3f7cb5",
        light: "rgb(101, 150, 195)",
        dark: "rgb(44, 86, 126)",
        contrastText: "#fff",
      },
      secondary: {
        main: "#f50057",
        light: "rgb(247, 51, 120)",
        dark: "rgb(171, 0, 60)",
        contrastText: "#fff",
      },
      error: {
        main: "#f44336",
        light: "#e57373",
        dark: "#d32f2f",
        contrastText: "#fff",
      },
      warning: {
        main: "#ff9800",
        light: "#ffb74d",
        dark: "#f57c00",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
      info: {
        main: "#2196f3",
        light: "#64b5f6",
        dark: "#1976d2",
        contrastText: "#fff",
      },
      success: {
        main: "#4caf50",
        light: "#81c784",
        dark: "#388e3c",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
      background: {
        default: "#303030",
        // paper: "#424242",
        paper: "rgb(66 66 66 / 50%)",
      },
      divider: {
        main: "rgba(255, 255, 255, 0.12)",
      },
      text: {
        primary: "#fff",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        hint: "rgba(255, 255, 255, 0.5)",
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
      action: {
        active: "#fff",
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24,
      },
    },
  };

  const light = {
    palette: {
      mode: "light",
      primary: {
        main: "#3f7cb5",
        light: "rgb(101, 150, 195)",
        dark: "rgb(44, 86, 126)",
        contrastText: "#fff",
      },
      secondary: {
        main: "#f50057",
        light: "rgb(247, 51, 120)",
        dark: "rgb(171, 0, 60)",
        contrastText: "#fff",
      },
      error: {
        main: "#f44336",
        light: "#e57373",
        dark: "#d32f2f",
        contrastText: "#fff",
      },
      warning: {
        main: "#ff9800",
        light: "#ffb74d",
        dark: "#f57c00",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
      info: {
        main: "#2196f3",
        light: "#64b5f6",
        dark: "#1976d2",
        contrastText: "#fff",
      },
      success: {
        main: "#4caf50",
        light: "#81c784",
        dark: "#388e3c",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
      background: {
        default: "#fafafa",
        paper: "#ffffff",
        secondPaper: "#",
      },
      divider: {
        main: "rgba(0, 0, 0, 0.12)",
      },
      text: {
        primary: "rgba(0,0,0,0.87)",
        secondary: "rgba(0,0,0,0.54)",
        disabled: "rgba(0,0,0,0.38)",
        hint: "rgba(0,0,0,0.38)",
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
      action: {
        active: "#000",
        hover: "rgba(0, 0, 0, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(0, 0, 0, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(0, 0, 0, 0.3)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24,
      },
    },
  };

  const main = {
    palette: {
      mode: "dark",
      primary: {
        main: teal[600],
      },
      secondary: {
        main: pink[400],
      },
      error: {
        main: "#DB6174",
      },
      background: {
        default: "#303030",
        paper: "#424242",
      },
    },
  };

  return { dark, light, main };
}

export default customPalettes;
