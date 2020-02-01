import firebaseConfig from "config.js";
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
import firebaseConfig from firebaseConfig.js;
//console.log(document.getElementById("myText").value);
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
        apiKey: firebaseConfig.apiKey,
        authDomain: firebaseConfig.authDomain,
        projectId: firebaseConfig.projectId
    });
    