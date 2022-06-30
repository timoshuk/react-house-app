import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByltSbbVotNvbteYTUDcPzZbNcxUTy688",
  authDomain: "house-app-85a55.firebaseapp.com",
  projectId: "house-app-85a55",
  storageBucket: "house-app-85a55.appspot.com",
  messagingSenderId: "217416804832",
  appId: "1:217416804832:web:df889ee2216394ecd7e385",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
