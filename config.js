import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCGbevTen8tVoAGNE3RoX7j02ZXHyiKbOM",
    authDomain: "voting-ab67a.firebaseapp.com",
    projectId: "voting-ab67a",
    storageBucket: "voting-ab67a.appspot.com",
    messagingSenderId: "645117872838",
    appId: "1:645117872838:web:82545f0f2c0fa28fe825c7"
  };    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();