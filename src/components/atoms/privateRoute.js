import React, { useContext } from "react"
import { navigate } from "gatsby"
import { FirebaseContext } from "lib/firebase"
import * as ROUTES from "constants/routes"
import { PageLoader } from "../atoms/page-loader"

const PrivateRoute = ({ children }) => {
  const { isDbLoading, currentUser, firebase } = useContext(FirebaseContext)

  if (isDbLoading) {
    return <PageLoader />
  } else if (!currentUser) {
    navigate(ROUTES.LOGIN)
    return null
  } else {
    return children
  }
}

export default PrivateRoute
