// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFMiHxk0mn0ZkRHyFhvBVXpedxAH1TwOc",
  authDomain: "intern-a76ba.firebaseapp.com",
  projectId: "intern-a76ba",
  storageBucket: "intern-a76ba.appspot.com",
  messagingSenderId: "710826077336",
  appId: "1:710826077336:web:c5029520a227becd5234ed",
  measurementId: "G-13CBYWX58F",
  databaseURL: "https://intern-a76ba-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
const auth= getAuth();
export default app;