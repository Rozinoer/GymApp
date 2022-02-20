import {
  getFirestore,
  setDoc,
  getDoc,
  doc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "@firebase/firestore";
import { auth } from "./firebase";

const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Понедельник",
  "Вторник",
  "Четверг"
];
export const db = getFirestore();

export const setUserData = async (selfInfo) => {
  await setDoc(doc(db, "users", auth.currentUser.uid), {
    name: selfInfo.name,
    surname: selfInfo.surname,
    phone: selfInfo.phone,
    city: selfInfo.city,
    country: selfInfo.country,
    network: selfInfo.network,
    aboutSelf: selfInfo.aboutme,
    aboutTraining: selfInfo.abouttrain,
    isCoach: selfInfo.isCoach,
  });
};
export const getUserData = async () => {
  const userRef = doc(db, "users", auth.currentUser.uid);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    return userSnap.data();
  } else {
    return null;
  }
};
export const addNewPlan = async (plan, title, disc) => {
  const planRef = collection(db, "users", auth.currentUser.uid, "plans");
  const docRef = await addDoc(planRef, { title, discription: disc });
  plan.forEach((i) => {
    i.drills.forEach(async (drill) => {
      const d = doc(
        db,
        "users",
        auth.currentUser.uid,
        "plans",
        docRef.id,
        i.day,
        drill.drillName
      );
      await setDoc(d, {
        approaches: drill.approaches,
        repeat: drill.repeat,
        rest: drill.rest,
      });
    });
  });
};

const loadDrills = async (dayRef, day) => {
  let drillDay = {
    day,
    drills: [],
  };

  const daySnapShot = await getDocs(dayRef);
  const foo = async () => {
    daySnapShot.forEach((drill) => {
      drillDay = {
        ...drillDay,
        drills: [
          ...drillDay.drills,
          {
            title: drill.id,
            rest: drill.data().rest,
            repeat: drill.data().repeat,
            approaches: drill.data().approaches,
          },
        ],
      };
    });
  };
  await foo();
  return drillDay;
};

const loadDays = async (doc) => {
  let plan = {
    title: doc.title,
    discription: doc.discription,
    days: [],
  };
  for (const day of week) {
    const dayRef = collection(
      db,
      "users",
      auth.currentUser.uid,
      "plans",
      doc.id,
      day
    );
    const drillDay = await loadDrills(dayRef, day);
    plan = { ...plan, days: [...plan.days, drillDay] };
  }
  return plan;
};

export const loadPlans = async () => {
  let allPlans = [];
  let tmp = [];
  const allPLanRef = collection(db, "users", auth.currentUser.uid, "plans");
  const querySnapshot = await getDocs(allPLanRef);
  const foo = async () => {
    querySnapshot.forEach((doc) => {
      tmp.push({
        id: doc.id,
        title: doc.data().title,
        discription: doc.data().discription,
      });
    });
  };
  await foo();
  for (const i of tmp) {
    const plan = await loadDays(i);
    allPlans = [...allPlans, plan];
  }
  return allPlans;
};

export const getClients = async () => {
  let allClients = [];
  const q = query(
    collection(db, "users"),
    where("coach", "==", auth.currentUser.uid)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    allClients = [...allClients, { id: doc.id, clientData: doc.data() }];
  });
  return allClients
};
