
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDGgynychgUMHRqXqWCoVXZ4alHdGJSwcM",
  authDomain: "chef-s-address.firebaseapp.com",
  projectId: "chef-s-address",
  storageBucket: "chef-s-address.appspot.com",
  messagingSenderId: "744959311514",
  appId: "1:744959311514:web:f13d8d4d28b6fd9204a923"
};


const app = initializeApp(firebaseConfig);

export default app;