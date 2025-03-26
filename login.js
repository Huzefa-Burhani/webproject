// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQcBtHqb1RELdwQqeLxEb0LBik7VuYfQ8",
  authDomain: "minor-project-beb0c.firebaseapp.com",
  projectId: "minor-project-beb0c",
  storageBucket: "minor-project-beb0c.firebasestorage.app",
  messagingSenderId: "727088760270",
  appId: "1:727088760270:web:839e2206bc40c2405f579f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const email=document.getElementById('login-btn');
SubmitEvent.addEventListener("click",function (event) {
event.preventDefault();
alert(5);
})