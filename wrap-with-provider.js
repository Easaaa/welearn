import React from "react"
import FirebaseProvider from "./src/providers/firebase-provider"
import SchoolProvider from "./src/providers/school-provider"
import CourseProvider from "./src/providers/course-provider"

// eslint-disable-next-line import/prefer-default-export
export default ({ element }) => (
  <FirebaseProvider>
    <SchoolProvider>
      <CourseProvider>{element}</CourseProvider>
    </SchoolProvider>
  </FirebaseProvider>
)
