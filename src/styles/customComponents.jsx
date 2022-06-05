function customComponents({ palette, mixins, shadows, transactions }) {
  return {
    MuiPaper: {
      variants: [
        {
          props: { variant: "bookmarkBox" },
          style: {
            ...mixins.flexCenter,
            justifyContent: "center",
            position: "relative",
            minWidth: "150px",
            maxWidth: "150px",
            minHeight: "100px",
            maxHeight: "100px",
            margin: "10px",
            padding: "10px",
            cursor: "pointer",
            boxShadow: shadows[1],
          },
        },
        {
          props: { variant: "widget" },
          style: {
            ...mixins.flexCenter,
            backgroundColor: palette.background.paper,
            justifyContent: "space-around",
            flexDirection: "row",
            width: "100%",
            height: "100%",
            boxShadow: shadows[2],
            overflow: "auto",
            backdropFilter: "blur(2px)",
            "&:hover": {
              boxShadow: shadows[3],
            },
          },
        },
        {
          props: { variant: "tabContent" },
          style: {
            ...mixins.flexCenter,
            justifyContent: "space-between",
            flexDirection: "row",
            position: "relative",
            width: "100%",
            height: "70%",
            padding: "0px 0px 0px 0px",
            boxShadow: shadows[1],
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "dropdown" },
          style: {
            fontWeight: "bold",
            height: "100%",
            minWidth: "150px",
            maxWidth: "150px",
            color: palette.primary.main,
          },
        },
      ],
    },
    MuiIconButton: {
      variants: [
        {
          props: { variant: "smallSquare" },
          style: {
            borderRadius: 4,
            padding: 2,
            margin: 2,
          },
        },
        {
          props: { variant: "largeSquare" },
          style: {
            borderRadius: 4,
            padding: 10,
            margin: 10,
          },
        },
      ],
    },
    MuiDialog: {
      variants: [
        {
          props: { variant: "blurred" },
          style: {
            backdropFilter: "blur(5px)",
            "& .MuiPaper-root": {
              backgroundColor: palette.background.paper,
              backgroundImage: "none",
              boxShadow: shadows[8],
            },
          },
        },
      ],
    },
  };
}

export default customComponents;
