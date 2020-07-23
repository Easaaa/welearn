import React, { useRef } from "react"
import { useForm } from "react-hook-form"

import { useMutation, gql } from "@apollo/client"

import useGetUser, { GET_USER } from "hooks/useGetUser"
import * as ROLES from "constants/roles"
import { ProfileContainer } from "./style"
import { Button } from "components/atoms/button"

const UPDATE_USER_PROFILE = gql`
  mutation(
    $uid: ID!
    $email: String!
    $firstName: String!
    $lastName: String!
    $skype: String
  ) {
    updateUserProfileAndAuth(
      uid: $uid
      email: $email
      firstName: $firstName
      lastName: $lastName
      skype: $skype
    ) {
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

export const Profile = () => {
  const { handleSubmit, register, watch } = useForm()
  const { userErr, userLoad, userData } = useGetUser()
  const [
    updateUserProfileAndAuth,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(UPDATE_USER_PROFILE)

  // password confirmation
  const password = useRef({})
  password.current = watch("password", "")

  const onSubmit = async values => {
    const { email, firstName, lastName, skype } = values
    try {
      await updateUserProfileAndAuth({
        variables: {
          email,
          firstName,
          lastName,
          skype,
          uid: userData && userData.getUser.uid,
        },
        update(cache, { data: { updateUserProfileAndAuth } }) {
          const { getUser } = cache.readQuery({
            query: GET_USER,
            variables: { uid: userData.getUser.uid },
          })
          cache.writeQuery({
            query: GET_USER,
            variables: {
              email,
              firstName,
              lastName,
              skype,
              uid: userData.getUser.uid,
            },
            data: { getUser: updateUserProfileAndAuth },
          })
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  const user = userData ? userData.getUser : null

  if (userLoad) return <p>Loading</p>

  if (userErr) {
    return (
      <p>
        Sorry, It seems there is an error with your user data. Contact the
        support for more informations.
      </p>
    )
  }

  const notFieldUI = field => {
    return !field || field.length === 0
      ? { border: "2px solid var(--orange)" }
      : null
  }

  return (
    <ProfileContainer>
      <header>
        <h3>Impostazioni</h3>
        <h5>Profilo</h5>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">
          Nome
          <input
            type="text"
            name="firstName"
            defaultValue={user.firstName}
            ref={register}
            style={notFieldUI(user.firstName)}
          />
        </label>
        <label htmlFor="lastName">
          Cognome
          <input
            type="text"
            name="lastName"
            defaultValue={user.lastName}
            ref={register}
            style={notFieldUI(user.lastName)}
          />
        </label>
        <label htmlFor="skype">
          Nome Skype
          <input
            type="text"
            name="skype"
            defaultValue={user.skype}
            ref={register}
            style={notFieldUI(user.skype)}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            defaultValue={user.email}
            ref={register}
          />
        </label>
        <label htmlFor="schoolName">
          Nome Scuola
          <input
            type="string"
            name="schoolName"
            defaultValue={user.schoolName}
            disabled
          />
        </label>
        <label htmlFor="role">
          Ruolo
          <input
            type="text"
            name="role"
            disabled
            defaultValue={ROLES.convertRoleUI(user.role)}
          />
        </label>
        <Button type="submit" spinnerOn={mutationLoading ? true : false}>
          Salva
        </Button>
      </form>
    </ProfileContainer>
  )
}
