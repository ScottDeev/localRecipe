import { initializeApp } from 'firebase/app'
import { getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAEQHnnO5_YYdAhHZ9gxsX3nfk4O003GoU",
  authDomain: "local-recipe-app.firebaseapp.com",
  projectId: "local-recipe-app",
  storageBucket: "local-recipe-app.appspot.com",
  messagingSenderId: "1077482482375",
  appId: "1:1077482482375:web:2532420198764f9cbeece2"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// init firebase auth
const auth = getAuth()

export { db, auth}