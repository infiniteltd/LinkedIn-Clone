import { initializeApp } from "firebase/app";
import { serverTimestamp, getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCCAeWeG98im5-EHJrdKHwlCTcdFdB4QSU",
    authDomain: "linkedin-app-clone-936d5.firebaseapp.com",
    projectId: "linkedin-app-clone-936d5",
    storageBucket: "linkedin-app-clone-936d5.appspot.com",
    messagingSenderId: "432728566616",
    appId: "1:432728566616:web:2db8da58878d934d5d932d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);



export { db, auth, serverTimestamp };


// export 'default' (imported as 'firebase') was not found in 'firebase/app' (possible exports: FirebaseError, SDK_VERSION, _DEFAULT_ENTRY_NAME, _addComponent, _addOrOverwriteComponent, _apps, _clearComponents, _components, _getProvider, _registerComponent, _removeServiceInstance, deleteApp, getApp, getApps, initializeApp, onLog, registerVersion, setLogLevel)