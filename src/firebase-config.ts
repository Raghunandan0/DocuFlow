// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDb7c8j-fm4n5OqYFxVrRJjvJNo9ifNktg",
//   authDomain: "docs-clone-8141d.firebaseapp.com",
//   projectId: "docs-clone-8141d",
//   storageBucket: "docs-clone-8141d.firebasestorage.app",
//   messagingSenderId: "988634929035",
//   appId: "1:988634929035:web:39ba6f25f2f07a7482c18e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";       // <-- Add this
import { getFirestore } from "firebase/firestore"; // <-- And this

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb7c8j-fm4n5OqYFxVrRJjvJNo9ifNktg",
  authDomain: "docs-clone-8141d.firebaseapp.com",
  projectId: "docs-clone-8141d",
  storageBucket: "docs-clone-8141d.appspot.com",
  messagingSenderId: "988634929035",
  appId: "1:988634929035:web:39ba6f25f2f07a7482c18e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
