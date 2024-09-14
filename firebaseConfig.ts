import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBgRvsmc2ny_Hko0y8ks2dnaHipvP2BuQ",
  authDomain: "geonotes-f5d56.firebaseapp.com",
  projectId: "geonotes-f5d56",
  storageBucket: "geonotes-f5d56.appspot.com",
  messagingSenderId: "229663945496",
  appId: "1:229663945496:web:b81f5f3649894d6b1de46d"
};

const app = initializeApp(firebaseConfig);

export default app;