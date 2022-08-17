import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBCZsFGR3iq4boJYjxjSSSmaofk3vkA5S0',
  authDomain: 'linkedin-clone-c4620.firebaseapp.com',
  projectId: 'linkedin-clone-c4620',
  storageBucket: 'linkedin-clone-c4620.appspot.com',
  messagingSenderId: '203970777656',
  appId: '1:203970777656:web:2cab2d8c7aa8050380cccd',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
