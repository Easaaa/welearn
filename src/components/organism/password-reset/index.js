import React, { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { useMutation, gql } from "@apollo/client"

import useGetUser from "hooks/useGetUser"

import { ProfileContainer } from "../profile/style.js"
import { IoMdEye } from "react-icons/io"
import { Button } from "components/atoms/button"

const UPDATE_USER_PASSWORD = gql`
  mutation($uid: ID!, $password: ID!) {
    updateUserPassword(uid: $uid, password: $password) {
      uid
    }
  }
`

export const PasswordReset = () => {
  const { handleSubmit, register, errors, watch } = useForm()
  const [togglePassw, setTogglePassw] = useState(false)

  const { userErr, userLoad, userData } = useGetUser()
  const [
    updateUserPassword,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(UPDATE_USER_PASSWORD)

  // password confirmation
  const password = useRef({})
  password.current = watch("password", "")

  const onSubmit = async (values, e) => {
    try {
      await setTogglePassw(false)
      await updateUserPassword({
        variables: {
          password: values.password,
          uid: userData && userData.getUser.uid,
        },
      })

      await e.target.reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ProfileContainer>
      <header>
        <h3>Cambia la Password</h3>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Password
          <input
            name="password"
            type={togglePassw ? "text" : "password"}
            placeholder="Password"
            ref={register({
              required: "You must specify a password",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          <i onClick={() => setTogglePassw(!togglePassw)}>{<IoMdEye />}</i>
        </label>

        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}

        <label>
          Conferma Password
          <input
            name="password_repeat"
            type={togglePassw ? "text" : "password"}
            placeholder="Conferma password"
            ref={register({
              validate: value =>
                value === password.current || "The passwords do not match",
            })}
          />
          <i onClick={() => setTogglePassw(!togglePassw)}>{<IoMdEye />}</i>
        </label>

        {errors.password_repeat && (
          <p style={{ color: "red" }}>{errors.password_repeat.message}</p>
        )}
        <Button type="submit">Salva</Button>
      </form>
    </ProfileContainer>
  )
}
