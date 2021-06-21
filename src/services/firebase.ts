import firebase from "firebase";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBazu6m00fV11ZCjORHz_34usN4VRU-NrI",
  authDomain: "letmeask-d9a38.firebaseapp.com",
  databaseURL: "https://letmeask-d9a38-default-rtdb.firebaseio.com",
  projectId: "letmeask-d9a38",
  storageBucket: "letmeask-d9a38.appspot.com",
  messagingSenderId: "197319196167",
  appId: "1:197319196167:web:b31f515e41c7645aa9b4a2"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();