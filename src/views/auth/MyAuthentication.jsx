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
