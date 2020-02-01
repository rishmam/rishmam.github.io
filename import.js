import firebaseConfig from "config.js";
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: firebaseConfig.apiKey,
    authDomain:firebaseConfig.authDomain,
    projectId: firebaseConfig.projectId
  });
  
var db = firebase.firestore();

/** TODO: Add matches json from algo here */
matches.forEach(function(obj) {
  db.collection("users").doc(obj.email).set({
    email: obj.email,
    name: obj.name,
    matchNames: obj.matchNames,
    matchEmails: obj.matchEmails,
    }, {merge: true}).then(function(docRef) {
        console.log("Document written with ID: ", obj.email);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
} );