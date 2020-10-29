import React, { useContext, useState } from "react"
import { FirebaseContext } from "../../../lib/firebase"
import { navigate } from "gatsby"
import { useForm, ErrorMessage } from "react-hook-form"
import * as ROUTES from "constants/routes"

import { Button } from "components/atoms/button"
import {
  LoginContainer,
  Line,
  WelcomeCol,
  LoginCol,
  StyledForm,
  Btn,
} from "./style"

import { BsShieldLockFill } from "react-icons/bs"

export const Login = () => {
  const { firebase } = useContext(FirebaseContext)
  const { handleSubmit, register, errors } = useForm()
  const [spinner, setSpinner] = useState(false)

  const onSubmit = (values, e) => {
    e.preventDefault()
    setSpinner(true)
    firebase
      .login(values)
      .then(() => {
        setSpinner(false)
        navigate(ROUTES.HOME)
        e.target.reset()
      })
      .catch(err => {
        setSpinner(false)
        alert(err)
      })
  }
  return (
    <LoginContainer>
      <LoginCol>
        <BsShieldLockFill />
        <h2>Entra nel tuo account</h2>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">
            Email
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              ref={register({ required: "This is required." })}
            />
            {errors.email?.type === "required" && "Your email is not valid"}
            <ErrorMessage errors={errors} name="email" as="p" />
          </label>

          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              ref={register({ required: "This is required." })}
            />
            <ErrorMessage errors={errors} name="password" as="p" />
          </label>

          <Button spinnerOn={spinner ? true : false} width="100%">
            Entra
          </Button>
        </StyledForm>
      </LoginCol>
      {/*  <Line />
      <WelcomeCol>
        <h2>👋 Ciao</h2>
        <p>
          Prima volta qua? Per ora siamo in versione beta e gli accessi sono
          limitati, scrivici per avere maggiori informazioni.
        </p>
        <Button onClick={() => navigate(ROUTES.LANDING)}>Contattaci</Button>
      </WelcomeCol> */}
    </LoginContainer>
  )
}
