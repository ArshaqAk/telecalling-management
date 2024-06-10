import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCDoDa2HYzPiAMTg1zd2UxoveBUksa2MPM",
  authDomain: "tele-calling-9dd2f.firebaseapp.com",
  projectId: "tele-calling-9dd2f",
  storageBucket: "tele-calling-9dd2f.appspot.com",
  messagingSenderId: "554427927487",
  appId: "1:554427927487:web:2a41ce610dd4a974246f0a"
};




const app = initializeApp(firebaseConfig);

export {app}