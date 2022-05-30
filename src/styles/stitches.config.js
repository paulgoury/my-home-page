import { createStitches } from "@stitches/react";

import { darkTheme, lightTheme } from "./themes";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      darkTheme,
      lightTheme,
    },
    shadows: {
      1: "0px 0px 5px 0px rgba(0,0,0,0.3)",
      2: "0px 0px 10px 0px rgba(0,0,0,0.3)",
      3: "0px 0px 15px 0px rgba(0,0,0,0.3)",
    },
  },
  utils: {
    flexCenterCol: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
    },
  },
});
