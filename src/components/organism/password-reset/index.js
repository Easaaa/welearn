import React, { useState, useRef, useContext } from "react"
import { FirebaseContext } from "../../../lib/firebase"
import { useForm } from "react-hook-form"
import { ResultModal, useResultModal } from "components/organism/modals"
import useGetUser from "hooks/useGetUser"

import { ProfileContainer } from "../profile/style.js"
import { IoMdEye } from "react-icons/io"
import { Button } from "components/atoms/button"

export const PasswordReset = () => {
  const { firebase } = useContext(FirebaseContext)
  const { handleSubmit, register, errors, watch } = useForm()
  const [togglePassw, setTogglePassw] = useState(false)

  const { resultMsg, setResultMsg } = useResultModal()
  const [isBtnLoading, setIsBtnLoading] = useState(false)
  const { userErr, userLoad, userData } = useGetUser()

  // password confirmation
  const password = useRef({})
  password.current = watch("password", "")

  const onSubmit = async (values, e) => {
    e.preventDefault()
    await setIsBtnLoading(true)
    await setTogglePassw(false)

    await firebase
      .updatePassword(values.password)
      .then(() => {
        setResultMsg({
          type: "success",
          title: "User password updated.",
        })
        setIsBtnLoading(false)
      })
      .catch(error => {
        setResultMsg({
          type: "error",
          title: "Failed updating password.",
        })
        setIsBtnLoading(false)
      })

    await e.target.reset()
  }

  return (
    <ProfileContainer>
      <header>
        <h3>Cambia la Password</h3>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Password
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
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

        <label>
          Conferma Password
          {errors.password_repeat && (
            <p style={{ color: "red" }}>{errors.password_repeat.message}</p>
          )}
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

        <Button type="submit" spinnerOn={isBtnLoading}>
          Salva
        </Button>
      </form>
      {resultMsg ? (
        <ResultModal type={resultMsg.type} title={resultMsg.title} />
      ) : null}
    </ProfileContainer>
  )
}
