import { Grid, Paper } from "@mui/material";

const MyWrapperLoginRegister = ({ children }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
        borderRadius: "30px",
        boxShadow:
          "0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Grid>
    </Paper>
  );
};

export default MyWrapperLoginRegister;
