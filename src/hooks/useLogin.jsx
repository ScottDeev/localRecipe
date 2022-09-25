import { useState, useEffect } from "react";
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from './useAuthContext'


export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const {dispatch} = useAuthContext()

  const login = (email, password) => {
    setError(null)
    setIsPending(true)

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({type: 'LOGIN', payload: res.user})
            // update state
        if(!isCancelled){
          setIsPending(false)
          setError(null)
        }
      })
      .catch((err) => {
        if(!isCancelled){
          setError(err.message)
          setIsPending(false)
      }
      })

  }
  // clean up function
  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return {error, login, isPending}
}