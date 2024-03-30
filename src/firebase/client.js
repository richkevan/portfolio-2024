
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_APIKEY,
  authDomain: import.meta.env.PUBLIC_AUTHDOMAIN,
  projectId: import.meta.env.PUBLIC_PROJECTID,
  storageBucket: import.meta.env.PUBLIC_STORAGEBUCKET,
  messagingSenderId: import.meta.env.PUBLIC_MESSAGINGSENDERID,
  appId: import.meta.env.PUBLIC_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {
  app,
  firestore
};
