//import firebase
import * as firebase from "firebase/app";

//store to firebase using firebase storage
import "firebase/storage";
//to Fetch realtimedatabase images
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCFpPI4njl1Fbd-jFCPn0lvTFxwLWaPf-8",
  authDomain: "tourismweb-3e2b8.firebaseapp.com",
  databaseURL: "https://tourismweb-3e2b8.firebaseio.com",
  projectId: "tourismweb-3e2b8",
  storageBucket: "tourismweb-3e2b8.appspot.com",
  messagingSenderId: "83165883435",
  appId: "1:83165883435:web:cef664ca63515ef45f8e6e",
  measurementId: "G-QT03C4DTCS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
