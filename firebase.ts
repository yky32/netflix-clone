// Import the functions you need from the SDKs you need
import {getApps, initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfW48sguH3I3VOUi1R4a1koje0a62ObIY",
    authDomain: "netflix-clone-wy.firebaseapp.com",
    projectId: "netflix-clone-wy",
    storageBucket: "netflix-clone-wy.appspot.com",
    messagingSenderId: "903745847435",
    appId: "1:903745847435:web:96107628f24df565d9d48e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
