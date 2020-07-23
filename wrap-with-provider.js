import React from "react"
import FirebaseProvider from "./src/providers/firebase-provider"
import SchoolProvider from "./src/providers/school-provider"
import CourseProvider from "./src/providers/course-provider"
import { WrapperApolloProvider } from "./src/providers/apollo-provider"

// eslint-disable-next-line import/prefer-default-export
export default ({ element }) => (
  <WrapperApolloProvider>
    <FirebaseProvider>
      <SchoolProvider>
        <CourseProvider>{element}</CourseProvider>
      </SchoolProvider>
    </FirebaseProvider>
  </WrapperApolloProvider>
)
