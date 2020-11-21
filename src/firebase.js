import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3brXJ3MSxRj5BMKH78PZY7kVDa7GgnSM",
  authDomain: "todoapp-12665.firebaseapp.com",
  databaseURL: "https://todoapp-12665.firebaseio.com",
  projectId: "todoapp-12665",
  storageBucket: "todoapp-12665.appspot.com",
  messagingSenderId: "761543590015",
  appId: "1:761543590015:web:13584d55f1a819dd8d3f4a",
  measurementId: "G-F2WTZJFJXN"
})
let db = firebaseApp.firestore()
//const auth = firebase.auth()

export default db