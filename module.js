import {initializeApp} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {getAuth,GoogleAuthProvider,signInWithPopup,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {getDatabase,ref,set,update,push,child,get,onValue,runTransaction} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAD5enlnyxoQ3j6aAuSN857Ohj75FwXF7c",
    authDomain: "membership-system-4f4f8.firebaseapp.com",
    databaseURL: "https://membership-system-4f4f8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "membership-system-4f4f8",
    storageBucket: "membership-system-4f4f8.appspot.com",
    messagingSenderId: "737147849360",
    appId: "1:737147849360:web:94e5a446393bbdfb8ae615",
    measurementId: "G-9YR3MYPJEB"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
