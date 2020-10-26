import { useEffect, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FirebaseContext } from "lib/firebase"

const useGetUser = () => {
  const { currentUser } = useContext(FirebaseContext)
  const userErr = false
  const userLoad = false
  const data = useStaticQuery(graphql`
    {
      allUser(filter: { email: { eq: "leonardotononi@gmail.com" } }) {
        edges {
          node {
            createdAt(fromNow: true)
            email
            firstName
            id
            lastName
            role
            schoolId
            schoolName
            skype
            uid
          }
        }
      }
    }
  `)

  useEffect(() => {
    if (data) {
      typeof window !== "undefined" &&
        window.localStorage.setItem("userRole", JSON.stringify("level_5"))
    }
  }, [data])

  return { userErr, userLoad, userData: data.allUser.edges[0].node }
}

export default useGetUser
