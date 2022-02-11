import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button, Grid } from "@mui/material";

import MyWrapper from "./auth/components/MyWrapper";
import MyTitle from "./auth/components/MyTitle";
import MyTextField from "./auth/components/MyTextField";
import MyButton from "./auth/components/MyButton";

const MyLogin = () => {
  const [values, setValues] = useState({
    showPassword: true,
    correctCredentils: " ",
  });

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const auth = getAuth();

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
    <MyWrapper>
      <MyTitle mb={7}>Iniciar sesión</MyTitle>

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
        <MyTextField
          label={"Correo"}
          onChange={emailOnChange}
          error={values.correctCredentils}
        />
      </Grid>

      <Grid item mb={2} width="50%">
        <MyTextField
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
        <MyButton color={secondary} onClick={loginOnClick}>
          Iniciar sesión
        </MyButton>
      </Grid>
      <Grid item fontSize={13} mb={2}>
        No tienes cuenta ? <u>Registrarse</u>
      </Grid>
    </MyWrapper>
  );
};

export default MyLogin;
