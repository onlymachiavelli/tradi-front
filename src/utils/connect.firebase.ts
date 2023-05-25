
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log(import.meta.env.VITE_API_KEY)
const firebaseConfig = {
  apiKey: "AIzaSyBrinPyGq3L0lPUlzSJj7VpNp9Ww1FEmj4",
  authDomain: "tradi-de5be.firebaseapp.com",
  projectId: "tradi-de5be",
  storageBucket: "tradi-de5be.appspot.com",
  messagingSenderId: "353142986737",
  appId: "1:353142986737:web:5fde186d0924985018d650",
  measurementId: "G-PQCDH3BD4X"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app)
  const storage = getStorage(app)


  export default storage
  

/*

  rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}

*/