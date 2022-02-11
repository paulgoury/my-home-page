import { Grid } from "@mui/material";

const MyIntroduction = () => {
  return (
    <Grid container direction="column" justifyContent="center" spacing={5}>
      <Grid item typography="h4">
        <Grid item>Bienvenido a </Grid>
        <Grid item color="secondary.main">
          My Home Page
        </Grid>
      </Grid>
      <Grid item>Descripcion...</Grid>
    </Grid>
  );
};

export default MyIntroduction;
