import React, { useState, createContext, useEffect } from "react"
import { useStickyState } from "hooks/useStickyState"

const defaultState = null

export const CourseContext = createContext(null)

const CourseProvider = ({ children }) => {
  const [courseState, setCourseState] = useStickyState(
    defaultState,
    "courseState"
  )

  return (
    <CourseContext.Provider
      value={{
        courseState,
        setCourseState,
      }}
    >
      {children}
    </CourseContext.Provider>
  )
}

export default CourseProvider
