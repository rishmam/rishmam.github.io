
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCvpEisytGcXdAqjyxrWiDrAvqy86Bi6Dk",
    authDomain:"bearp-493dc.firebaseapp.com",
    projectId: "bearp-493dc"
  });
  
var db = firebase.firestore();

var matches = [{"name":"Rishma Murugan","email":"rishma.murugan@berkeley.edu","matchNames":["Jerry"],"matchEmails":["jerryjiao@berkeley.edu"]},{"name":"Conor","email":"conormora@berkeley.edu","matchNames":["Brendan"],"matchEmails":["brendanshih@berkeley.edu"]},{"name":"Erica","email":"ericaysli@gmail.com0","matchNames":["Steven Chen"],"matchEmails":["stevenfxchen@berkeley.edu"]},{"name":"Frank Liu","email":"fliu@berkeley.edu","matchNames":["Anushka Ladha"],"matchEmails":["aladha@uw.edu"]},{"name":"Jago","email":"jagopang@berkeley.edu","matchNames":["Brendan"],"matchEmails":["brendanshih@berkeley.edu"]},{"name":"Sean","email":"mingqiwang@berkeley.edu","matchNames":["Labiba"],"matchEmails":["lzamyeen03@berkeley.edu"]},{"name":"Steven Chen","email":"stevenfxchen@berkeley.edu","matchNames":["Erica","Devika","Kavya Iyer"],"matchEmails":["ericaysli@gmail.com0","devikavbaliga@gmail.com","kavyai@uw.edu"]},{"name":"Jeffrey","email":"jeffjohn3@berkeley.edu","matchNames":["Anushka Ladha","Labiba","Megan Wang"],"matchEmails":["aladha@uw.edu","lzamyeen03@berkeley.edu","meganwang1998@berkeley.edu"]},{"name":"Labiba","email":"lzamyeen03@berkeley.edu","matchNames":["Jeffrey","Sean"],"matchEmails":["jeffjohn3@berkeley.edu","mingqiwang@berkeley.edu"]},{"name":"Brendan","email":"brendanshih@berkeley.edu","matchNames":["Jago","Conor"],"matchEmails":["jagopang@berkeley.edu","conormora@berkeley.edu"]},{"name":"Anika","email":"anikar@berkeley.edu","matchNames":["Anmol Seth"],"matchEmails":["anmolseth00@gmail.com"]},{"name":"Jerry","email":"jerryjiao@berkeley.edu","matchNames":["Rishma Murugan","Kavya Iyer","Devika"],"matchEmails":["rishma.murugan@berkeley.edu","kavyai@uw.edu","devikavbaliga@gmail.com"]},{"name":"Devika","email":"devikavbaliga@gmail.com","matchNames":["Steven Chen","Jerry"],"matchEmails":["stevenfxchen@berkeley.edu","jerryjiao@berkeley.edu"]},{"name":"Megan Wang","email":"meganwang1998@berkeley.edu","matchNames":["Jeffrey","Michael Li"],"matchEmails":["jeffjohn3@berkeley.edu","michaelli1234@gmail.com"]},{"name":"Emily","email":"emily.gu@berkeley.edu","matchNames":["Michael Li"],"matchEmails":["michaelli1234@gmail.com"]},{"name":"Anmol Seth","email":"anmolseth00@gmail.com","matchNames":["Anika","Neha Nagabothu"],"matchEmails":["anikar@berkeley.edu","neha.nagabothu@berkeley.edu"]},{"name":"Michael Li","email":"michaelli1234@gmail.com","matchNames":["Emily","Megan Wang"],"matchEmails":["emily.gu@berkeley.edu","meganwang1998@berkeley.edu"]},{"name":"Anushka Ladha","email":"aladha@uw.edu","matchNames":["Jeffrey","Frank Liu"],"matchEmails":["jeffjohn3@berkeley.edu","fliu@berkeley.edu"]},{"name":"Neha Nagabothu","email":"neha.nagabothu@berkeley.edu","matchNames":["Anmol Seth"],"matchEmails":["anmolseth00@gmail.com"]},{"name":"Kavya Iyer","email":"kavyai@uw.edu","matchNames":["Jerry","Steven Chen"],"matchEmails":["jerryjiao@berkeley.edu","stevenfxchen@berkeley.edu"]}]
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