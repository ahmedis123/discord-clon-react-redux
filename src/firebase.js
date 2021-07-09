import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBr0YY7hIYvpAOmm5o3FUoBQcdicL6GIBI",
    authDomain: "discord-ahmed-b3f1b.firebaseapp.com",
    projectId: "discord-ahmed-b3f1b",
    storageBucket: "discord-ahmed-b3f1b.appspot.com",
    messagingSenderId: "469198985081",
    appId: "1:469198985081:web:92977c9e9d88ddd20881a8",
    measurementId: "G-QNNE3D5FBN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;