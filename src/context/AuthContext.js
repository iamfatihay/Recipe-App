import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { auth } from '../auth/firebase';
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from '../helpers/ToastNotify';

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        userObserver()
    }, [])
    console.log(currentUser);



    const createUser = async (email, password, displayName) => {
        try {
            let userCredential = await createUserWithEmailAndPassword(auth, email, password)
            //* Kullanicinin profilini guncellemek icin kullanilan firebase komutu
            await updateProfile(auth.currentUser, {displayName})
            toastSuccessNotify("Registered successfully!")
            console.log(userCredential);
        } catch (error) {
            console.log(error);
            toastErrorNotify(error.message)
        }
    }
    const signIn = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            toastSuccessNotify("Logged in successfully!");
        } catch (error) {
            toastErrorNotify(error.message)
        }
    }
    const logOut = () => {
        try {
            signOut(auth)
            toastSuccessNotify("Logged out successfully!")
        } catch (error) {
            toastErrorNotify(error.message)
        }
    }
    const userObserver = async () => {
        //! Kullanicinin signIn olup olmadigini kontrol edip, 
        //! kullanici degistiginde yeni kullaniciyi response eden firebase methodu 
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { email, displayName, photoURL } = user;
                setCurrentUser({ email, displayName, photoURL });
            } else {
                setCurrentUser(null);
            }
        });
    }
    const signUpProvider = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                toastSuccessNotify("Logged in successfully!")
            }).catch((error) => {
                console.log(error);
            });
    }
    const forgotPassword = (email) => {
        //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
        sendPasswordResetEmail(auth, email)
          .then(() => {
            // Password reset email sent!
            toastWarnNotify("Please check your mail box!");
            // alert("Please check your mail box!");
          })
          .catch((err) => {
            toastErrorNotify(err.message);
            // alert(err.message);
            // ..
          });
      };



    const values = { createUser, signIn, logOut, currentUser , signUpProvider, forgotPassword};
    return (
        <AuthContext.Provider value={values} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider