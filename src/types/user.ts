import firebase from 'firebase/app'

export interface IFirebaseUser extends firebase.User {}
export interface IAppUser {
    id: string
    displayName: string
    photoURL: string
}
