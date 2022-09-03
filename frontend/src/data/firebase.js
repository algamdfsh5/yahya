// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

 const firebaseConfig = {
  apiKey: "AIzaSyDEb2RIoTjHwq0c2ZHpQRFXJt2_vbSeYd4",
  authDomain: "egy-tronix-web.firebaseapp.com",
  projectId: "egy-tronix-web",
  storageBucket: "egy-tronix-web.appspot.com",
  messagingSenderId: "1036215053634",
  appId: "1:1036215053634:web:b663d85f98d8f166586cdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
