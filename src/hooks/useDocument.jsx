import { useEffect } from "react"
import { useState } from "react"
import { db } from '../firebase/config'
import { doc, onSnapshot } from "firebase/firestore"


export const useDocument = (collection, id) =>{
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)
  // realtime data for document
  useEffect(() => {
    async function fetchData(){
      const ref = doc(db, collection, id);
        const unsub = onSnapshot( ref, (snapshot) => {
        if(snapshot.exists()){
          setDocument({...snapshot.data(), id: snapshot.id})
          setError(null)
        } else{
          setError('No such document exist')
        }
        
      }, (err) => {
        console.log(err.message);
        setError('Failed to get document')
      })
      return () => unsub()
    }
    fetchData()
  }, [collection, id])
  
  return { document, error}
}