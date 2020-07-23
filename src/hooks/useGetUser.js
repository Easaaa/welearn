import { useEffect, useContext } from "react"
import { useQuery, gql } from "@apollo/client"
import { FirebaseContext } from "lib/firebase"

export const GET_USER = gql`
  query($uid: ID!) {
    getUser(uid: $uid) {
      email
      firstName
      lastName
      skype
      schoolName
      schoolId
      role
      uid
    }
  }
`

const useGetUser = () => {
  const { currentUser } = useContext(FirebaseContext)

  const { error: userErr, loading: userLoad, data: userData } = useQuery(
    GET_USER,
    {
      variables: { uid: currentUser && currentUser.uid },
      refetchQueries: [{ query: GET_USER }],
    }
  )

  useEffect(() => {
    if (userData) {
      typeof window !== "undefined" &&
        window.localStorage.setItem(
          "userRole",
          JSON.stringify(userData.getUser.role)
        )
    }
  }, [userData])

  return { userErr, userLoad, userData }
}

export default useGetUser
