import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../Firebase/Firebase.config'

export const authContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [theme, setTheme] = useState(false);
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[]);

    const popUpSignIn=(provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    const emailSignUp=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const emailSignIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setLoading(true);
    return signOut(auth);
    }

    const authInfo = { user, popUpSignIn, emailSignUp, emailSignIn, logOut, loading, theme, setTheme }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;