import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const AuthProviders = ({children}) => {
  const [user,setUser] =useState(null);
  const [loading ,setLoading] =useState(true);
  

  //  social provider
  const googleProvider = new GoogleAuthProvider();
      // -------------------
      const googleLogin =() =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
     }
  //create user
  const createUser =(email, password)=>{
     setLoading(true)
     return createUserWithEmailAndPassword(auth, email, password);
   
  }
  
   //GitHub
   
  



  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  const logOut = () => {
    setUser(null);
    // setLoading(false);
    return signOut(auth);
  
   }


   useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
         
          
        });
        return () => {
            unSubscribe();
        }
    }, [])

    //SignIn
    const signIn = (email, password) => {
      
      return signInWithEmailAndPassword(auth, email, password);
     }

  const authInfo ={
    user,
    setUser,
    createUser,
    updateUserProfile,
    logOut,
    signIn,
    googleLogin,
  
    loading
  }
  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;