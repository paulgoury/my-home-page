import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import MyWrapper from "../components/MyWrapper";
import MyTitle from "../components/MyTitle";
import MyTextField from "../components/MyTextField";
import MyButton from "../components/MyButton";

const MyRegister = () => {
  const [values, setValues] = useState({
    showPassword: true,
    correctCredentils: " ",
  });

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
  const registerOnClick = async () => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
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
      registerOnClick();
    }
  };

  return (
    <MyWrapper>
      <MyTitle mb={7}>Registrarse</MyTitle>

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

      <Grid item mb={7} width="50%">
        <MyButton color={"secondary"} onClick={registerOnClick}>
          Registrarse
        </MyButton>
      </Grid>

      <Grid item fontSize={13} mb={2}>
        Ya tienes cuenta ?{" "}
        <Link to="/myLogin">
          <u>Iniciar sesión</u>
        </Link>
      </Grid>
    </MyWrapper>
  );
};

export default MyRegister;
