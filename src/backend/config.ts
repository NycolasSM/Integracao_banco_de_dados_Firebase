import firebase from "firebase";
import 'firebase/firestore'

if (!firebase.apps.length) {
    firebase.initializeApp({
        //removido motivos de segurança,
    })
}

export default firebase