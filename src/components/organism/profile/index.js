import React, { useRef, useContext } from "react"
import { FirebaseContext } from "../../../lib/firebase"
import { useForm } from "react-hook-form"

import useGetUser from "hooks/useGetUser"
import * as ROLES from "constants/roles"
import { ProfileContainer } from "./style"
import { Button } from "components/atoms/button"

export const Profile = () => {
  const { firebase } = useContext(FirebaseContext)
  const { handleSubmit, register, watch } = useForm()
  const { userErr, userLoad, userData } = useGetUser()

  const password = useRef({})
  password.current = watch("password", "")

  const onSubmit = async values => {
    const { email, firstName, lastName, skype } = values

    await firebase.updateProfile({ email, firstName, lastName, skype })
  }

  const user = userData && userData

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
        <Button type="submit" spinnerOn={false}>
          Salva
        </Button>
      </form>
    </ProfileContainer>
  )
}
