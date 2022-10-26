import React, { createContext } from 'react';
import {getAuth, signInWithPopup} from 'firebase/auth';
import app from '../../Firebase/Firebase.config'

export const authContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const user={displayName:'imran'}


    const googleSignIn=(provider)=>{
        return signInWithPopup(auth,provider);
    }

    const authInfo={user, googleSignIn}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;