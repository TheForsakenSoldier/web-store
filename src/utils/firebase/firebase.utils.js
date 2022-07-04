import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGR270eOxHY-Z8Ni72VxEjQSFKW_O3DYE",
  authDomain: "web-store-32f8c.firebaseapp.com",
  projectId: "web-store-32f8c",
  storageBucket: "web-store-32f8c.appspot.com",
  messagingSenderId: "175245319808",
  appId: "1:175245319808:web:ca151054bb941f5207d065",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
