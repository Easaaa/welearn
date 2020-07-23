import React, { useContext } from "react"
import { navigate } from "gatsby"
import { FirebaseContext } from "lib/firebase"
import * as ROUTES from "constants/routes"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { currentUser } = useContext(FirebaseContext)
  if (!currentUser && location.pathname !== ROUTES.LANDING) {
    navigate(ROUTES.LANDING)
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
