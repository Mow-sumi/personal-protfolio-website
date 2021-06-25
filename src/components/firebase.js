import firebase from "firebase";

var firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBKBAIjUzCBv79EHhMWd96GrUJDGp9VGNY",
    authDomain: "mowsumi-portfolio.firebaseapp.com",
    projectId: "mowsumi-portfolio",
    storageBucket: "mowsumi-portfolio.appspot.com",
    messagingSenderId: "261775428450",
    appId: "1:261775428450:web:f28df6989e759152217a3b"
  
});

var db = firebaseApp.firestore();
export {db};