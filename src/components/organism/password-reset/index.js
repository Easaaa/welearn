import React, { useState, useRef, useContext } from "react"
import { FirebaseContext } from "../../../lib/firebase"
import { useForm } from "react-hook-form"

import useGetUser from "hooks/useGetUser"

import { ProfileContainer } from "../profile/style.js"
import { IoMdEye } from "react-icons/io"
import { Button } from "components/atoms/button"

export const PasswordReset = () => {
  const { firebase } = useContext(FirebaseContext)
  const { handleSubmit, register, errors, watch } = useForm()
  const [togglePassw, setTogglePassw] = useState(false)

  const { userErr, userLoad, userData } = useGetUser()

  // password confirmation
  const password = useRef({})
  password.current = watch("password", "")

  const onSubmit = async (values, e) => {
    e.preventDefault()
    try {
      await setTogglePassw(false)
      firebase.updatePassword(values.password)

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
