import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD-YTyDa_3NAySyzK8fpZjifufnFk-89rE",
  authDomain: "rn-gym-app.firebaseapp.com",
  databaseURL:
    "https://rn-gym-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rn-gym-app",
  storageBucket: "rn-gym-app.appspot.com",
  messagingSenderId: "625345226333",
  appId: "1:625345226333:web:814a9a1b9ca854f04c4fb4",
};

initializeApp(firebaseConfig);
export const auth = getAuth();
signOut(auth);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("we are auth", user.email);
  } else {
    console.log("we are NOT auth");
  }
});

export const logup = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const login = async (email, password) => 
  await signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);