console.log("eh");

var db = firebase.firestore();
//var text = localStorage.setItem("test" , "tasdf");    var docRef = db.collection("users").doc("rishma.murugan@berkeley.edu");
    console.log(docRef.id);
    var matchEmails = ""
    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data().matchEmails);
            matchEmails = doc.data().matchEmails;
            matchEmails.forEach(matchEmail => {
                var docRef = db.collection("users").doc(matchEmail);
                docRef.get().then(function (doc) {
                    console.log(doc.data());
                })
            });
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    console.log(matchEmails);
    