import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAXTjXWmJL5_cMqap39A8zZ1oF3jE3MoJg',
  authDomain: 'disney-plus-c7e13.firebaseapp.com',
  projectId: 'disney-plus-c7e13',
  storageBucket: 'disney-plus-c7e13.appspot.com',
  messagingSenderId: '410673778495',
  appId: '1:410673778495:web:ff89d91e7ba73e3c788d8a',
  measurementId: 'G-EGNPRP7PNQ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
