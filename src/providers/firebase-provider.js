import React, { useEffect, useState } from "react"
import getFirebaseInstance from "lib/firebase"
import loadFirebaseDependencies from "lib/firebase/loadFirebaseDependencies"
import { FirebaseContext } from "lib/firebase"

const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [firebase, setFirebase] = useState(null)
  const [isDbLoading, setIsDbLoading] = useState(true)

  useEffect(() => {
    let unsubscribe

    loadFirebaseDependencies.then(app => {
      const firebaseInstance = getFirebaseInstance(app)
      setFirebase(firebaseInstance)

      unsubscribe = firebaseInstance.auth.onAuthStateChanged(user => {
        setIsDbLoading(false)
        if (user) {
          setCurrentUser(user)
          window.localStorage.setItem("userUid", JSON.stringify(user.uid))
        } else {
          setCurrentUser(null)
          window.localStorage.setItem("userUid", JSON.stringify({}))
        }
      })

      return () => {
        setIsDbLoading(true)
        unsubscribe()
      }
    })
  }, [currentUser])

  return (
    <FirebaseContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        firebase,
        isDbLoading,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider
