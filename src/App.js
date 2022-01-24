import { Button, Grid, Paper, TextField } from "@mui/material";
import { Box, typography } from "@mui/system";
import * as React from "react";
import "./app.css";

// const themedStyles = (theme) => {
//   console.log(theme);
//   console.log("customColor:", theme.palette.primary.customColor);

//   return {
//     fieldSet: {
//       borderColor: theme.palette.primary.main,
//     },
//   };
// };

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        m: 10,
      }}
    >
      {/* Left container */}
      <Grid
        sx={{ flexGrow: 1 }}
        container
        spacing={5}
        direction="column"
        justifyContent="center"
        alignItems="left"
      >
        <Grid item>
          <Grid item typography="h2">
            Bienvenido a
          </Grid>
          <Grid item color="secondary.main" typography="h2">
            My Home Page
          </Grid>
        </Grid>
        <Grid item>Descripcion...</Grid>
      </Grid>
      {/* Right Container */}
      <Grid sx={{ flexGrow: 2 }} container>
        <Paper
          elevation={3}
          sx={{ py: 5, px: 10, minWidth: "100%", minHeight: "100%" }}
        >
          <Grid
            container
            spacing={5}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item typography="h4">
              Iniciar sesión
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <TextField
                    fullWidth
                    label="Prueba"
                    variant="outlined"
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    label="Contraseña"
                    variant="outlined"
                  ></TextField>
                </Grid>
                <Grid item hidden>
                  Correo o contraseña incorrectos.
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Button variant="contained">Iniciar sesión</Button>
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <Button variant="contained">Registrarse</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained">Iniciar sesión con Google</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
}

export default App;
