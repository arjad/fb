import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDxMVT_Ib4MG21a7qjLL8f_t6HTbmYD0xI",
    authDomain: "fb-clone-4f611.firebaseapp.com",
    projectId: "fb-clone-4f611",
    storageBucket: "fb-clone-4f611.appspot.com",
    messagingSenderId: "239656129113",
    appId: "1:239656129113:web:70effe15640fa9298a1748",
    measurementId: "G-E2RCB5CVT0"
});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };
