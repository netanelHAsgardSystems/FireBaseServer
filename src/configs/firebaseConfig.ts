
import admin from 'firebase-admin';
// import { initializeApp } from "firebase/app";

// import firebase from 'firebase/app'
// const firebase = require("firebase/app")

// import auth from '@firebase/auth'
const serviceAccount = require("./logisticerp-firebase-adminsdk-pbei2-7128708172.json");
//
// export const firebaseConfig = {
//   apiKey: "AIzaSyDKNRbqbg3sfa6Qmw6o_f0MU0QS2_mCSLI",
//   authDomain: "fir-first-awesome-try.firebaseapp.com",
//   projectId: "fir-first-awesome-try",
//   storageBucket: "fir-first-awesome-try.appspot.com",
//   messagingSenderId: "731082861898",
//   appId: "1:731082861898:web:3c8279a55cdeb1dc8065b3",
//   measurementId: "G-NTWEHM1G9D"
// };




// const app = firebase.initializeApp(firebaseConfig);
// console.log(app.name)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});




// console.log(firebase,"fireeee");

export default admin;
// module.exports={admin}




