import Login from "./views/login/Login";
import { Box } from "@mui/system";
import "./app.css";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import {
  FirestoreProvider,
  useFirebaseApp,
  AuthProvider,
  DatabaseProvider,
} from "reactfire";
import { getFirestore } from "firebase/firestore";

function App() {
  const app = useFirebaseApp();
  const dataBase = getDatabase(app);
  const auth = getAuth(app);

  // Remove?
  const fireStoreInstance = getFirestore(useFirebaseApp());

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
            <Login />
          </DatabaseProvider>
        </AuthProvider>
      </FirestoreProvider>
    </Box>
  );
}

export default App;
