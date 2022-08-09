import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { signOut } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyD4mS-Yc9qOqt6NVS_ePg9ODwdAhLONMG4",
    authDomain: "crypto-tracker-a10b0.firebaseapp.com",
    projectId: "crypto-tracker-a10b0",
    storageBucket: "crypto-tracker-a10b0.appspot.com",
    messagingSenderId: "675410906718",
    appId: "1:675410906718:web:5030d9aca87241e9b9aecf"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

  const provider = new GoogleAuthProvider()

 export  const signInWithGoogle = () => {

         signInWithPopup(auth,provider).then((result) =>{
         
             console.log(result);

         }).catch((error) => {
           
            console.log(error);

         })
  }

export const signout = () => {

    auth.signOut().then(() => {
        console.log('logged out');
    })
    .catch((error) => {
        console.log(error);
    });
}