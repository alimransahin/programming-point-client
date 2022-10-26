import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
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
    },[])


    const popUpSignIn=(provider)=>{
        return signInWithPopup(auth,provider);
    }

    const emailSignIn=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const authInfo = { user, popUpSignIn, emailSignIn }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;