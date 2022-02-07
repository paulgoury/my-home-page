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
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleLogin } from "react-google-login";

const Login = () => {
  const [values, setValues] = useState({
    showPassword: true,
    isSignedIn: false,
  });

  const passwordIconOnClick = (event) => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const responseGoogle = (response) => {
    setValues({
      ...values,
      isSignedIn: true,
    });
    console.log(response);
  };

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const emailOnChange = (e) => {
    setCredentials({
      ...credentials,
      email: e.target.value,
    });
  };

  const passwordOnChange = (e) => {
    setCredentials({
      ...credentials,
      password: e.target.value,
    });
  };

  const auth = getAuth();

  const loginOnClick = () => {
    console.log("email " + credentials.email);
    console.log("pass " + credentials.password);
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(userCredentials);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.messae;
        console.log(error);
      });
  };

  return (
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
                onChange={emailOnChange}
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
                onChange={passwordOnChange}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                sx={{ borderRadius: "10px" }}
                onClick={loginOnClick}
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
  );
};

export default Login;
