import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDUV6LbJQ4L6JSKsTV7Uz-IIvMoU83UKyk",
  authDomain: "pharmacy-3782a.firebaseapp.com",
  databaseURL: "https://pharmacy-3782a-default-rtdb.firebaseio.com",
  projectId: "pharmacy-3782a",
  storageBucket: "pharmacy-3782a.appspot.com",
  messagingSenderId: "830878910615",
  appId: "1:830878910615:web:ce865e87b0dc2bb60cc1d2"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }

