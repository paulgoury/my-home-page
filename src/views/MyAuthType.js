import { Button, Grid } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import MyTextField from "./auth/loginRegister/MyTextField";

const MyAuthType = ({ title, isRegister }) => {
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
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item typography="h3" mb={7}>
        {title}
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
          showPassword={values.showPassword}
        />
      </Grid>

      {isRegister && (
        <Grid item mb={2} width="50%">
          <MyTextField
            label={"Contraseña"}
            onChange={passwordOnChange}
            error={values.correctCredentils}
            onKeyUpEnter={onKeyUpEnter}
            iconOnClick={passwordIconOnClick}
            showPassword={values.showPassword}
          />
        </Grid>
      )}

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
  );
};

export default MyAuthType;
