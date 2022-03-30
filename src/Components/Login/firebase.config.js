import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBovSZsJ1T1AvmZrHxuMYP3hZnG2cfcgAg",
    authDomain: "ticket-booking-ac675.firebaseapp.com",
    projectId: "ticket-booking-ac675",
    storageBucket: "ticket-booking-ac675.appspot.com",
    messagingSenderId: "285442507188",
    appId: "1:285442507188:web:c54c04d085235f7dd0f2e1",
    measurementId: "G-H4DKX2RTBS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePhoto = result.user.photoURL;

            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('profilePhoto', profilePhoto);
        })
        .catch((error) => {
            console.log(error);
        });
};


