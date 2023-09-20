import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {collection,getFirestore} from "firebase/firestore"
 
const firebaseConfig = {
  apiKey: "AIzaSyDdi4sszfIrJyTv--edabUO8ZT2r9uOHKs",
  authDomain: "sample-webrtc-8d2fc.firebaseapp.com",
  projectId: "sample-webrtc-8d2fc",
  storageBucket: "sample-webrtc-8d2fc.appspot.com",
  messagingSenderId: "672019551198",
  appId: "1:672019551198:web:d7e2ad37c29ee6bc04c34f",
  measurementId: "G-HHNHHZSF3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const userRef= collection(firebaseDB, "users")
export const meetingsRef = collection(firebaseDB, "meetings");