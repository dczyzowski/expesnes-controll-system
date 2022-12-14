import { Expense } from "./Interfaces";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const vendorsArray = [
  "Profit Media - Sławomir Trzósło",
  "Chroma.pl",
  "Coś innego",
];

export const defaultExpense: Expense = {
  user: "Ja",
  vendor: "Nie ja",
  category: "hmm",
  date: new Date(),
  amount: 0,
  items: [],
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFRZuI1gC_atYE7cAUCinMPEi7vR5qu4k",
  authDomain: "expense-controll-system.firebaseapp.com",
  projectId: "expense-controll-system",
  storageBucket: "expense-controll-system.appspot.com",
  messagingSenderId: "408141462965",
  appId: "1:408141462965:web:056866b91c5d9abc1dadfc",
  measurementId: "G-TRBEDNJ837",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
