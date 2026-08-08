import { initializeApp }  from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

const firebaseConfig = {
    apiKey:            "AIzaSyDJ_1gxEjuCY2OFYsB3WaeRTH8Y1QQQyyo",
    authDomain:        "booknest-38232.firebaseapp.com",
    projectId:         "booknest-38232",
    storageBucket:     "booknest-38232.firebasestorage.app",
    messagingSenderId: "15622339434",
    appId:             "1:15622339434:web:694593c6cc3a24092b0313"
};

const app  = initializeApp(firebaseConfig);
const db   = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };