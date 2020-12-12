import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBhfph3Zlki-Lyn8yrmTpw0nlfc5fKY0MQ",
    authDomain: "react-shopify-3593a.firebaseapp.com",
    projectId: "react-shopify-3593a",
    storageBucket: "react-shopify-3593a.appspot.com",
    messagingSenderId: "130856483961",
    appId: "1:130856483961:web:196508ef6baef95c7c68a8",
    measurementId: "G-RT1L2J721G"
  };
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promt: 'selection_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase