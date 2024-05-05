import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebaseConfig";
export const AuthContext = createContext();
const AuthProviders = ({children}) => {
  const [user,setUser] =useState(null);
  
  //create user
  const createUser =(email, password)=>{
     return createUserWithEmailAndPassword(auth, email, password);
   
  }
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
        
       
    });
    return () => {
        unSubscribe();
    }
}, [])

  const authInfo ={
    user,
    setUser,
    createUser,
    updateUserProfile,
    logOut
  }
  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;