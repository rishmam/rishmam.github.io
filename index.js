const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
import firebaseConfig from firebaseConfig.js;
//console.log(document.getElementById("myText").value);
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
        apiKey: "AIzaSyCvpEisytGcXdAqjyxrWiDrAvqy86Bi6Dk",
        authDomain:"bearp-493dc.firebaseapp.com",
        projectId: "bearp-493dc"
    });
    