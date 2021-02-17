import { v4 as uuidv4 } from 'uuid'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    authDomain: process.env.REACT_APP_GOOGLE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_GOOGLE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_GOOGLE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_GOOGLE_MESSAGING_ID,
    appId: process.env.REACT_APP_GOOGLE_APP_ID,
}

const firebaseApp = firebase.initializeApp(config)

export const auth = firebaseApp.auth()
export const firestore = firebaseApp.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
}

export const generateUserDocument = async (user: firebase.User | null) => {
    if (!user) return

    const userRef = firestore.doc(`users/${user.uid}`)
    const snapshot = await userRef.get()

    if (!snapshot.exists) {
        const { email, displayName, photoURL } = user
        const id = uuidv4()

        try {
            await userRef.set({
                displayName,
                email,
                id,
                photoURL,
            })
        } catch (error) {
            console.error('Error creating user document', error)
        }
    }
    return getUserDocument(user.uid)
}

const getUserDocument = async (uid: string) => {
    if (!uid) return null
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get()
        return {
            uid,
            ...userDocument.data(),
        }
    } catch (error) {
        console.error('Error fetching user', error)
    }
}
