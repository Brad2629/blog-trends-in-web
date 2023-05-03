import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import withFirebaseAuth from "react-with-firebase-auth"

// TODO: Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDXO6KEnibmplv-T48e1IR8IdNwF4_AeBc",
  authDomain: "trends-final-project-4b42b.firebaseapp.com",
  projectId: "trends-final-project-4b42b",
  storageBucket: "trends-final-project-4b42b.appspot.com",
  messagingSenderId: "664756321339",
  appId: "1:664756321339:web:c8c4e12ed425e18e9ef01e",
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)

const providers = { googleProvider: new GoogleAuthProvider() }

const createComponentWithAuth = withFirebaseAuth({
  providers,
  firebaseAppAuth: auth,
})

const signInWithGoogle = () => {
  signInWithPopup(auth, providers.googleProvider)
}

const signOutFirebase = () => {
  signOut(auth)
}

export {
  db,
  auth,
  createComponentWithAuth,
  signInWithGoogle,
  signOutFirebase as signOut,
}
