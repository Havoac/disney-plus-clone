import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCmh_RoM0UGwzxF0LjnlLF1ND1tF6_ENDA',
  authDomain: 'disneyplus-clone-ba234.firebaseapp.com',
  projectId: 'disneyplus-clone-ba234',
  storageBucket: 'disneyplus-clone-ba234.appspot.com',
  messagingSenderId: '1008549085305',
  appId: '1:1008549085305:web:0dbf9157232faad65994a8',
  measurementId: 'G-7169KYP6K0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
