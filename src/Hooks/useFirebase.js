import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import {useState, useEffect} from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const createAccountWithGoogle = (email, password) => {
    return createAccountWithGoogle(auth, email, password);
  };

  const updateName = name => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
      .then(() => {
        const newUser = {...user, displayName: name};
        setUser(newUser);
      })
      .catch(err => {
        //error message
      });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(err => {
        //error message
      });
  };

  return {
    user,
    setUser,
    signInWithGoogle,
    createAccountWithGoogle,

    isLoading,
    setIsLoading,
    logOut,
    updateName
  };
};

export default useFirebase;
