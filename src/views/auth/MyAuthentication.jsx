import { useState } from "react";

import { Grid, Link, Paper, Typography, useTheme } from "@mui/material";

import MyLogin from "./containers/MyLogin";
import MyRegister from "./containers/MyRegister";

const MyAuthentication = () => {
  const { palette, shadows } = useTheme();
  const [isRegister, setIsRegister] = useState(false);

  const handleClick = () => {
    setIsRegister(!isRegister);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      backgroundColor={palette.background.default}
      padding={10}
    >
      <Grid item xs={6} pr={20} textAlign="justify">
        <Grid container direction="column" justifyContent="center" spacing={5}>
          <Grid item typography="h4">
            <Grid item>Bienvenido a </Grid>
            <Grid item color="secondary.main">
              My Home Page
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Esta página web ha sido creada para que puedas crear un entorno
              totalmente personalizable y a tu gusto ! Añade, elimina y mueve
              los widgets disponibles que hay en el menú junto con otras
              funcionaliades.
              <br />
              Para poder editar tu entorno, deberás de activar el Switch que se
              encuentra en la parte superior izquierda de la pantalla. Y para
              añadir nuevos widgets, modificar el fondo de pantalla y cerrar
              sesión, puedes manegarlo pulsando el icono de configuración
              superior derecho.
              <br />
              Si quieres añadirlo como página principal de chrome, deberás de
              establecer la URL de esta página en el apartado 'homepage' de la
              configuración del navegador.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={6} sx={{ height: "100%" }}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            borderRadius: 4,
            backgroundColor: palette.background.paper,
            boxShadow: shadows[3],
          }}
        >
          {isRegister ? <MyRegister /> : <MyLogin />}
          <Grid item fontSize={13} mb={2}>
            <Typography>
              {isRegister ? "Ya tienes cuenta ?" : "No tienes cuenta ?"}
              <Link
                onClick={handleClick}
                underline="none"
                style={{ cursor: "pointer" }}
              >
                {isRegister ? " Iniciar sesión" : " Registrarse"}
              </Link>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MyAuthentication;
