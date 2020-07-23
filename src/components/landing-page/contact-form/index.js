import React, { useState } from "react"
import { useForm, ErrorMessage } from "react-hook-form"
import { navigate } from "gatsby"
import { Container, StyledForm, FormWrapper, FormTitle } from "./style"
import ContactImg from "assets/contact.png"

export const ContactForm = () => {
  const { handleSubmit, register, errors } = useForm()

  const onSubmit = (values, e) => {
    console.log(values)
    e.target.reset()
  }

  return (
    <Container id="contact">
      <FormWrapper>
        <FormTitle>
          <h1 style={{ color: "var(--orange)" }}>👋 Ciao,</h1>

          <h5
            style={{ fontWeight: "400", lineHeight: "1.6em", color: "#cecece" }}
          >
            Entra se sai entrare <br />
            {/* 🗃 Vuoi ottimizzare il tuo business? <br />
            💰 Ti piacerebbe monetizzare i tuoi contenuti? <br />
            🤔 Non vorresti avere meno pensieri? <br />
            🤯 Sei stufo di usare un foglio excel per tenere i conti? <br />
            <br />
            <br />
            ✉️ Inserisci i tuoi data e ti contattermo in un batter d'occhio! */}
          </h5>
        </FormTitle>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {/* <label htmlFor="fullName">
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Nome e cognome"
              ref={register({ required: "This is required." })}
            />
            {errors.email?.type === "required" && "Your email is not valid"}
            <ErrorMessage errors={errors} name="email" as="p" />
          </label>

          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              ref={register({ required: "This is required." })}
            />
            <ErrorMessage errors={errors} name="email" as="p" />
          </label> */}

          <button type="submit" onClick={() => navigate("/app/school/home")}>
            Home
          </button>
        </StyledForm>
      </FormWrapper>
    </Container>
  )
}
