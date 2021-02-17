import firebase from 'firebase'
import React, { useState, useEffect, createContext, Component } from 'react'

import { auth } from 'utils/firebase'

interface IUser {
    user: firebase.User | null
}

interface IUserPropviderProps {
    children: React.ReactNode
}

export const UserContext = createContext<IUser>({ user: null })

export const UserProvider = ({ children }: IUserPropviderProps) => {
    const [user, setUser] = useState<IUser>({ user: null })

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            setUser({ user: userAuth })
        })
    }, [])

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
