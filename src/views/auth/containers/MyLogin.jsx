import { useState } from "react";

import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getDoc, getFirestore, doc } from "firebase/firestore";

import { Button, Grid } from "@mui/material";

import { MyWrapper, MyTitle, MyTextField, MyButton } from "../components";
import { getFirestoreInitializer } from "../../../utils/";
import { useActions } from "../../../tools";

const auth = getAuth(getFirestoreInitializer);
const firestore = getFirestore(getFirestoreInitializer);

const MyLogin = () => {
  const { manageUser, overwriteState } = useActions();

  const [values, setValues] = useState({
    showPassword: true,
    correctCredentils: 0,
  });

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const manageDocument = async ({ userEmail }) => {
    const docRef = doc(firestore, `users/${userEmail}`);
    const query = await getDoc(docRef);
    if (query.exists()) {
      console.log(query.data());
      overwriteState({ firebaseData: query.data() });
    }
  };

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

  const provider = new GoogleAuthProvider();
  const loginWithGoogleOnClick = async () => {
    try {
      const userCredentials = await signInWithPopup(auth, provider);
      const credential =
        GoogleAuthProvider.credentialFromResult(userCredentials);
      const token = credential.accessToken;
      const user = userCredentials.user;
      manageUser({ userEmail: user.email });
      manageDocument({ userEmail: user.email });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      setValues({
        ...values,
        correctCredentils: 1,
      });
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
      manageUser({ userEmail: user.email });
      manageDocument({ userEmail: user.email });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setValues({
        ...values,
        correctCredentils: 1,
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
          showHelperText
          onKeyUpEnter={onKeyUpEnter}
          iconOnClick={passwordIconOnClick}
          passwordMode={values.showPassword}
        />
      </Grid>

      <Grid item mb={7} width="50%">
        <MyButton
          color={"secondary"}
          onClick={loginWithEmailAndPasswordOnClick}
        >
          Iniciar sesión
        </MyButton>
      </Grid>
      {/* <Grid item fontSize={13} mb={2}>
        <Typography>
          No tienes cuenta ? <Link onClick={handleClick}>Registrarse</Link>
        </Typography>
      </Grid> */}
    </MyWrapper>
  );
};

export default MyLogin;
