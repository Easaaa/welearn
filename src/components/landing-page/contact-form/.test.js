import React from "react"
import { render } from "@testing-library/react"
import { ContactForm } from "./index"

test("temp", () => {
  expect(true).toBe(true)
})

test("contact form renders full name and email", () => {
  const { getByLabelText, debug } = render(<ContactForm />)

  debug()

  expect(getByLabelText(/full name/i))
})
