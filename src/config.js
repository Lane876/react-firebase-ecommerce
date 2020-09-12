import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBe3olmtcQbDQEeQtG8CWAP8oLQDP3cQxM",
  authDomain: "thunder-bc6aa.firebaseapp.com",
  databaseURL: "https://thunder-bc6aa.firebaseio.com",
  projectId: "thunder-bc6aa",
  storageBucket: "thunder-bc6aa.appspot.com",
  messagingSenderId: "62109703199",
  appId: "1:62109703199:web:9cd392f62f9a0a6018c92a",
  measurementId: "G-BE0P75F8RZ",
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
// export const db = app.database().ref();
export default app;
