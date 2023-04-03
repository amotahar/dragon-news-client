// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOKc4suwrDMwiNomM9ADNQPH5_ZBItaxo",
  authDomain: "dragonnews-3e8df.firebaseapp.com",
  projectId: "dragonnews-3e8df",
  storageBucket: "dragonnews-3e8df.appspot.com",
  messagingSenderId: "730204756079",
  appId: "1:730204756079:web:f3e4686edf0a6f20c9159a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;