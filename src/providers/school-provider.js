import React, { useState, useEffect, createContext } from "react"

import useGetUser from "hooks/useGetUser"

export const SchoolContext = createContext(null)

const SchoolProvider = ({ children }) => {
  const { userErr, userLoad, userData } = useGetUser()
  const [school, setSchool] = useState(null)

  useEffect(() => {
    if (userData) {
      setSchool({
        id: userData.schoolId,
        name: userData.schoolName,
      })
    }

    return () => {
      setSchool(null)
    }
  }, [userData, userLoad])

  return (
    <SchoolContext.Provider
      value={{
        school,
      }}
    >
      {children}
    </SchoolContext.Provider>
  )
}

export default SchoolProvider
