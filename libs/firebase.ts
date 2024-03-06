import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9L4YKVQXkAAdQsIp_Nd4wpacXnS6u32o",
  authDomain: "e-shop-415617.firebaseapp.com",
  projectId: "e-shop-415617",
  storageBucket: "e-shop-415617.appspot.com",
  messagingSenderId: "901433156257",
  appId: "1:901433156257:web:6b94d501f8c92f1b9ec6e0",
  measurementId: "G-N61NG9PK91"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;