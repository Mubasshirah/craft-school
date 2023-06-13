import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext=createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const googleProvider=new GoogleAuthProvider();

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log("current user", currentUser);
            setLoading(false);
           
        });
        return ()=>{
            return unsubscribe();
        }

    },[])

    const createUser=(email,password)=>{
        setLoading(true);
return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

   const updateUserPofile=(name,photo)=>{
    return updateProfile(auth.currentUser,{
        displayName:name,photoURL:photo
    });
   } 
const logOut=()=>{
    setLoading(true);
    return signOut(auth);
}
const googleSignIn=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
}
    const authInfo={
        user,
        loading,
        createUser,
        signIn,
         logOut,
         updateUserPofile,
         googleSignIn
         

    }
    return (
        <AuthContext.Provider value={authInfo}> 
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;