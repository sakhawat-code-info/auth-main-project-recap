// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOcSsunoPmxJBuoSwiWEu911pja7nCGFk",
    authDomain: "auth-main-project-recap.firebaseapp.com",
    projectId: "auth-main-project-recap",
    storageBucket: "auth-main-project-recap.appspot.com",
    messagingSenderId: "234948713538",
    appId: "1:234948713538:web:d6b0d0ef99b3ec34f9a1db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

