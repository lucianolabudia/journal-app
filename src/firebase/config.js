// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZls-4dE9Bisw-uvIk6kd7JWXeteltuOM",
  authDomain: "journal-app-be6cd.firebaseapp.com",
  projectId: "journal-app-be6cd",
  storageBucket: "journal-app-be6cd.appspot.com",
  messagingSenderId: "253831621086",
  appId: "1:253831621086:web:0d0948d0cfbebfb2e8954f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );