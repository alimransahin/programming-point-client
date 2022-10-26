import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../Firebase/Firebase.config'

export const authContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[]);

    const popUpSignIn=(provider)=>{
        return signInWithPopup(auth,provider);
    }

    const emailSignUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const emailSignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
    return signOut(auth);
    }

    const authInfo = { user, popUpSignIn, emailSignUp, emailSignIn, logOut}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;