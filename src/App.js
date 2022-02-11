import { Box } from "@mui/system";
import {
  AuthProvider,
  DatabaseProvider,
  FirestoreProvider,
  useFirebaseApp,
} from "reactfire";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

import "./app.css";
import MyAuthentication from "./views/auth/MyAuthentication";

function App() {
  const app = useFirebaseApp();
  const dataBase = getDatabase(app);
  const auth = getAuth(app);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        p: 10,
        height: "100%",
      }}
    >
      <FirestoreProvider sdk={fireStoreInstance}>
        <AuthProvider sdk={auth}>
          <DatabaseProvider sdk={dataBase}>
            <MyAuthentication />
          </DatabaseProvider>
        </AuthProvider>
      </FirestoreProvider>
    </Box>
  );
}

export default App;
