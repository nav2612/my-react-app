import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDW_3ITn9ow55SkI7lj7cNJVRBIMih5zLA",
  authDomain: "open-house-deals.firebaseapp.com",
  projectId: "open-house-deals",
  storageBucket: "open-house-deals.appspot.com",
  messagingSenderId: "855971901204",
  appId: "1:855971901204:web:392129bc850adf5ddddc01",
  measurementId: "G-HMZP5P01G5"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};

export default firebase;