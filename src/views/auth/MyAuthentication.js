import { Grid, Paper } from "@mui/material";
import MyLogin from "./containers/MyLogin";
import MyRegister from "./containers/MyRegister";

const MyAuthentication = ({ isRegister }) => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={6}>
        <Grid container direction="column" justifyContent="center" spacing={5}>
          <Grid item typography="h4">
            <Grid item>Bienvenido a </Grid>
            <Grid item color="secondary.main">
              My Home Page
            </Grid>
          </Grid>
          <Grid item>Descripcion...</Grid>
        </Grid>
      </Grid>

      <Grid item xs={6} sx={{ height: "100%" }}>
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
          {isRegister && <MyRegister />}
          {!isRegister && <MyLogin />}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MyAuthentication;
