import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   setDoc,
//   getDoc,
//   doc,
//   collection,
//   addDoc,
// } from "@firebase/firestore";

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

// export const setUserData = async (selfInfo) => {
//   await setDoc(doc(db, "users", auth.currentUser.uid), {
//     name: selfInfo.name,
//     surname: selfInfo.surname,
//     phone: selfInfo.phone,
//     city: selfInfo.city,
//     country: selfInfo.country,
//     network: selfInfo.network,
//     aboutSelf: selfInfo.aboutme,
//     aboutTraining: selfInfo.abouttrain,
//     isCoach: selfInfo.isCoach,
//   });
// };
// export const getUserData = async () => {
//   const userRef = doc(db, "users", auth.currentUser.uid);
//   const userSnap = await getDoc(userRef);
//   if (userSnap.exists()) {
//     return userSnap.data();
//   } else {
//     return null;
//   }
// };

// export const addNewPlan = async (plan, title, disc) => {
//   const planRef = collection(db, "users", auth.currentUser.uid, "plans");
//   const docRef = await addDoc(planRef, { title, discription: disc });
//   plan.map((i) => {
//     i.drills.map(async (drill) => {
//       const d = doc(
//         db,
//         "users",
//         auth.currentUser.uid,
//         "plans",
//         docRef.id,
//         i.day,
//         drill.drillName
//       );
//       await setDoc(d, {
//         approaches: drill.approaches,
//         repeat: drill.repeat,
//         rest: drill.rest,
//       });
//     });
//   });
// };
