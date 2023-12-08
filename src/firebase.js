import { initializeApp } from "firebase/app";
import { serverTimestamp, getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBQCzGNvHh4wNKndYRIxIeAoxL8vO4jB0o",
    authDomain: "linkedin-clone-59f96.firebaseapp.com",
    projectId: "linkedin-clone-59f96",
    storageBucket: "linkedin-clone-59f96.appspot.com",
    messagingSenderId: "883784666483",
    appId: "1:883784666483:web:e9de1a31998e473c9c0906"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);



export { db, auth, serverTimestamp };


// export 'default' (imported as 'firebase') was not found in 'firebase/app' (possible exports: FirebaseError, SDK_VERSION, _DEFAULT_ENTRY_NAME, _addComponent, _addOrOverwriteComponent, _apps, _clearComponents, _components, _getProvider, _registerComponent, _removeServiceInstance, deleteApp, getApp, getApps, initializeApp, onLog, registerVersion, setLogLevel)