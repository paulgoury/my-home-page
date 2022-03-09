import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import MyWrapper from "../components/MyWrapper";
import MyTitle from "../components/MyTitle";
import MyTextField from "../components/MyTextField";
import MyButton from "../components/MyButton";

const MyLogin = () => {
  const [values, setValues] = useState({
    showPassword: true,
    correctCredentils: " ",
  });

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const emailOnChange = (event) => {
    setCredentials({
      ...credentials,
      email: event.target.value,
    });
  };

  const passwordOnChange = (event) => {
    setCredentials({
      ...credentials,
      password: event.target.value,
    });
  };

  const auth = getAuth();

  const provider = new GoogleAuthProvider();
  const loginWithGoogleOnClick = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, provider);
      const credential =
        GoogleAuthProvider.credentialFromResult(userCredentials);
      const token = credential.accessToken;
      const user = userCredentials.user;
      console.log("TAENTRO");
    } catch (error) {
      console.log("NO TAENTRO");
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  };

  const loginWithEmailAndPasswordOnClick = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      const user = userCredentials.user;
      console.log("TAENTRO");
      setValues({
        ...values,
        correctCredentils: true,
      });
    } catch (error) {
      const errorCode = error.code;
      console.log("NO TAENTRO");
      const errorMessage = error.messae;
      setValues({
        ...values,
        correctCredentils: false,
      });
    }
  };

  const passwordIconOnClick = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const onKeyUpEnter = (event) => {
    if (event.key === "Enter") {
      loginWithEmailAndPasswordOnClick();
    }
  };

  return (
    <MyWrapper>
      <MyTitle mb={7}>Iniciar sesión</MyTitle>

      <Grid item width="50%" mb={7}>
        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{ borderRadius: "10px" }}
          onClick={loginWithGoogleOnClick}
        >
          Iniciar sesión con google
        </Button>
      </Grid>

      <Grid item mb={2} width="50%">
        <MyTextField
          label={"Correo"}
          onChange={emailOnChange}
          error={values.correctCredentils}
        />
      </Grid>

      <Grid item mb={2} width="50%">
        <MyTextField
          isPassword
          label={"Contraseña"}
          onChange={passwordOnChange}
          error={values.correctCredentils}
          onKeyUpEnter={onKeyUpEnter}
          iconOnClick={passwordIconOnClick}
          passwordMode={values.showPassword}
        />
      </Grid>

      <Grid item fontSize={13} mb={2}>
        Has olvidado la contraseña ? <u>Recuperar</u>
      </Grid>

      <Grid item mb={7} width="50%">
        <MyButton
          color={"secondary"}
          onClick={loginWithEmailAndPasswordOnClick}
        >
          Iniciar sesión
        </MyButton>
      </Grid>
      <Grid item fontSize={13} mb={2}>
        No tienes cuenta ?{" "}
        <Link to="/myRegister">
          <u>Registrarse</u>
        </Link>
      </Grid>
    </MyWrapper>
  );
};

export default MyLogin;
