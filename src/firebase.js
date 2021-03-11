import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCOt5O3h6TiC6-NtiHYBLso8TYUHkg2L-k",
    authDomain: "netflix-clone-3019a.firebaseapp.com",
    projectId: "netflix-clone-3019a",
    storageBucket: "netflix-clone-3019a.appspot.com",
    messagingSenderId: "1015129315188",
    appId: "1:1015129315188:web:89c765e19fd68cd9067e21"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export { auth }
export default db;
