import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAHfDghvBFDoBPhtjTJrUzmagu1iJL9XNk",
    authDomain: "fb-clone-73446.firebaseapp.com",
    databaseURL: "https://fb-clone-73446.firebaseio.com",
    projectId: "fb-clone-73446",
    storageBucket: "fb-clone-73446.appspot.com",
    messagingSenderId: "393713065380",
    appId: "1:393713065380:web:b3ad08d99b7a820fd9f531",
    measurementId: "G-4WD762HT38"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;