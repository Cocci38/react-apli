
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "react-firebase-redux-72f16.firebaseapp.com",
    projectId: "react-firebase-redux-72f16",
    storageBucket: "react-firebase-redux-72f16.appspot.com",
    messagingSenderId: "237607317259",
    appId: "1:237607317259:web:5f21cf0a705171eb05bc0e"
});

export const auth = app.auth();
export default app;
