import { VisibilityOff } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import "./app.css";

function App() {
  let [values, setValues] = useState({
    showPassword: true,
    isSignedIn: false,
  });

  const passwordIconOnClick = (event) => {
    setValues({
      ...values,
      showPassword: values.showPassword
        ? (values.showPassword = false)
        : (values.showPassword = true),
    });
  };

  const responseGoogle = (response) => {
    setValues({
      ...values,
      isSignedIn: true,
    });
    console.log(response);
  };

  console.log(process.env);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        p: 10,
        height: "100%",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <Grid container direction="column" spacing={5}>
            <Grid item>
              <Grid container direction="column">
                <Grid item typography="h2">
                  Bienvenido a
                </Grid>
                <Grid item typography="h2" color="secondary.main">
                  My Home Page
                </Grid>
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
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              py={5}
              px={5}
              spacing={7}
            >
              <Grid item typography="h3">
                Iniciar sesión
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  label="Correo"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  required
                  label="Contraseña"
                  variant="outlined"
                  type={values.showPassword ? "password" : "text"}
                  sx={{ marginTop: "30px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={passwordIconOnClick}>
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  sx={{ borderRadius: "10px" }}
                >
                  Iniciar sesión
                </Button>
              </Grid>
              <Grid item>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{ borderRadius: "10px" }}
                >
                  Registrarse
                </Button>
                <GoogleLogin
                  clientId={process.env.REACT_APP_APIAUTH}
                  render={(renderProps) => (
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{ marginTop: "30px", borderRadius: "10px" }}
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Iniciar sesión con Google
                    </Button>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
