import React, {useContext, useState,useEffect} from 'react';
import {auth} from '../firebase';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [currentUser,setCurrentUser] = useState();
    const [loading , setLoading ] = useState(true);

    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password);
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email,password);
    }

    function updateEmail(email){
        return currentUser.updateEmail(email);
    }

    function updatePassword(password){
        return currentUser.updatePassword(password);
    }

    function ForgotPassword(email){
        return auth.sendPasswordResetEmail(email);
    }

    function logout (){
        return auth.signOut();
    }

    useEffect(() => {
       const unsubscribe =  auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe
    },[])


    const value = {
        currentUser,
        login,
        signup,
        logout,
        ForgotPassword,
        updatePassword,
        updateEmail
    }

    return (
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
    )
}