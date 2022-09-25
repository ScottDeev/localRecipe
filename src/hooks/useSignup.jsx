import { useState, useEffect } from "react";
import { useAuthContext } from './useAuthContext'

// firebase imports
import { auth, db } from '../firebase/config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState()
  const [isPending, setIsPending] = useState(false)
  const [isCancelled, setIsCancelled] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)
    try{
      const res = createUserWithEmailAndPassword(auth, email, password)
      if(!res){
        throw new Error('Could not complete signup')
      }
      // add Display name
      await updateProfile((await res).user, { displayName})

      // Create new user document
      const ref = doc(db, 'user', (await res).user.uid)
      await setDoc(ref, {displayName})

      
      dispatch({ type: 'LOGIN', payload: (await res).user })
      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    }
    catch(err) {
      if (!isCancelled) {
        setError('Something went wrong, Try again')
        setIsPending(false)
      }
    }
  }
  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return {error, signup, isPending}
}