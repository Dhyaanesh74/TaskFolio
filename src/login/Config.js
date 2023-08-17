import   {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCpUaoH5F9-a96jXGnxrYiJpsb1smkSa0g",
  authDomain: "to-do-4424f.firebaseapp.com",
  projectId: "to-do-4424f",
  storageBucket: "to-do-4424f.appspot.com",
  messagingSenderId: "1007397014684",
  appId: "1:1007397014684:web:4bf304fdcced462e89f159",
  measurementId: "G-1PQBPGZLJY"
};


const app = initializeApp(firebaseConfig);
const  auth = getAuth(app)
const provider = new GoogleAuthProvider()

export  {auth,provider}