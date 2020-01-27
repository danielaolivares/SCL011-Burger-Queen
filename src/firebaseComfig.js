import firebase from 'firebase/app';
import 'firebase/firestore';
//your web app's Firebase configuracion
const firebaseConfig = {
  apiKey: "AIzaSyA6F5NE2XmoBaY8acBfK2F-2zash9Aucxc",
  authDomain: "burger-queen-ce587.firebaseapp.com",
  databaseURL: "https://burger-queen-ce587.firebaseio.com",
  projectId: "burger-queen-ce587",
  storageBucket: "burger-queen-ce587.appspot.com",
  messagingSenderId: "908512146338",
  appId: "1:908512146338:web:49eb03f7526ba9b7b878fb",
  measurementId: "G-GWYV3GGSKR"
};
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default db;

