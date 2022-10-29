import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAVN2dHimiS85KZkCaNkVSS7egCyDyCiLM",
  authDomain: "uploadfile-ab422.firebaseapp.com",
  projectId: "uploadfile-ab422",
  storageBucket: "uploadfile-ab422.appspot.com",
  messagingSenderId: "1090669924390",
  appId: "1:1090669924390:web:064891738db08622e696e7",
  measurementId: "G-BJMBB2YE9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
