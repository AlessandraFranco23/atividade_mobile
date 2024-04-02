// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,doc, setDoc  } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkAS_o-5obeYDbIv7H80D4N5Ijjazcb_w",
  authDomain: "atividademobile-edce5.firebaseapp.com",
  projectId: "atividademobile-edce5",
  storageBucket: "atividademobile-edce5.appspot.com",
  messagingSenderId: "1066009236395",
  appId: "1:1066009236395:android:93c9fdfeae96a313abf8ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export default auth;