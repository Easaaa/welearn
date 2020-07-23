import React from "react"
import { Router } from "@reach/router"
import * as ROUTES from "constants/routes"

import PrivateRoute from "components/atoms/privateRoute"
import HomePage from "./app/home/index"
import VideosPage from "./app/videos/index"
import CoursesPage from "./app/courses/index"
import ProfilePage from "./app/profile/index"

const App = () => {
  return (
    <Router>
      <PrivateRoute path={ROUTES.HOME} component={HomePage} />
      <PrivateRoute path={ROUTES.COURSES} component={CoursesPage} />
      <PrivateRoute path={ROUTES.VIDEOS} component={VideosPage} />
      <PrivateRoute path={ROUTES.PROFILE} component={ProfilePage} />
    </Router>
  )
}
export default App
