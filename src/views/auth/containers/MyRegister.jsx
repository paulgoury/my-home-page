import { useState } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Grid, Link, Typography } from "@mui/material";

import { MyWrapper, MyTitle, MyTextField, MyButton } from "../components";
import { getFirestoreInitializer } from "../../../utils/";

const MyRegister = ({ handleClick }) => {
  const [values, setValues] = useState({
    showPassword: true,
    correctCredentils: 0,
  });

  const [credentials, setCredentials] = useState({
    email: "",
    firstPassword: "",
    secondPassword: "",
  });

  const emailOnChange = (event) => {
    setCredentials({
      ...credentials,
      email: event.target.value,
    });
  };

  const firstPasswordOnChange = (event) => {
    setCredentials({
      ...credentials,
      firstPassword: event.target.value,
    });
  };

  const secondPasswordOnChange = (event) => {
    setCredentials({
      ...credentials,
      secondPassword: event.target.value,
    });
  };

  const passwordsEquals = () => {
    return credentials.firstPassword === credentials.secondPassword;
  };

  const auth = getAuth(getFirestoreInitializer);
  const registerOnClick = async () => {
    if (credentials.firstPassword === credentials.secondPassword) {
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.firstPassword
        );
        const user = userCredentials.user;
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setValues({
          ...values,
          correctCredentils: 1,
        });
      }
    } else {
      setValues({
        ...values,
        correctCredentils: 2,
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
          onChange={firstPasswordOnChange}
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
          onChange={secondPasswordOnChange}
          error={values.correctCredentils}
          showHelperText
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

      {/* <Grid item fontSize={13} mb={2}>
        <Typography>
          Ya tienes cuenta ? <Link onClick={handleClick}>Iniciar sesión</Link>
        </Typography>
      </Grid> */}
    </MyWrapper>
  );
};

export default MyRegister;
