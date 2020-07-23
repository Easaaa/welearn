describe("app", () => {
  it("works", () => {
    cy.visit("/")
    cy.findByText(/demo/i).click()
  })
})
