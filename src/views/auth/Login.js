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
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const [values, setValues] = useState({
    showPassword: true,
    correctCredentils: " ",
  });

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const auth = getAuth();

  const provider = new GoogleAuthProvider();

  const googleLoginButtonOnClick = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, provider).then(
        (result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accesToken;
          const user = result.user;
        }
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.messae;
    }
  };

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

  const loginOnClick = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      const user = userCredentials.user;
      setValues({
        ...values,
        correctCredentils: true,
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.messae;
      setValues({
        ...values,
        correctCredentils: false,
      });
    }
  };

  const passwordIconOnClick = (event) => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const onKeyUpEnter = (event) => {
    if (event.key === "Enter") {
      loginOnClick();
    }
  };

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
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item mb={7} typography="h3">
              Iniciar sesión
            </Grid>
            <Grid item width="50%" mb={7}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{ borderRadius: "10px" }}
                onClick={googleLoginButtonOnClick}
              >
                Iniciar sesión con google
              </Button>
            </Grid>
            <Grid item mb={2} width="50%">
              <TextField
                fullWidth
                required
                label="Correo"
                variant="outlined"
                onChange={emailOnChange}
                error={!values.correctCredentils}
              />
            </Grid>
            <Grid item mb={2} width="50%">
              <TextField
                fullWidth
                required
                label="Contraseña"
                variant="outlined"
                onChange={passwordOnChange}
                type={values.showPassword ? "password" : "text"}
                error={!values.correctCredentils}
                helperText={
                  !values.correctCredentils
                    ? "Correo o contraseña incorrectos"
                    : ""
                }
                onKeyUp={onKeyUpEnter}
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
            <Grid item fontSize={13} mb={2}>
              Has olvidado la contraseña ? <u>Recuperar</u>
            </Grid>
            <Grid item mb={7} width="50%">
              <Button
                fullWidth
                variant="contained"
                size="large"
                color="secondary"
                sx={{ borderRadius: "10px" }}
                onClick={loginOnClick}
              >
                Iniciar sesión
              </Button>
            </Grid>
            <Grid item fontSize={13} mb={2}>
              No tienes cuenta ? <u>Registrarse</u>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
