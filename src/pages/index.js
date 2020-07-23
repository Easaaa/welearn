import React from "react"
import { graphql } from "gatsby"

import { Layout } from "components/organism/layout"
import { Header } from "components/landing-page/header"
import { HowItWorks } from "components/landing-page/how-it-works"
import { Dashboard } from "components/landing-page/dashboard"
import { Product } from "components/landing-page/product"
import { Development } from "components/landing-page/development"
import { Pricing } from "components/landing-page/pricing"
import { ContactForm } from "components/landing-page/contact-form"
import { Footer } from "components/organism/footer"
import { Login } from "components/organism/login"

const LandingPage = () => {
  return (
    <Layout>
      {/* <Header /> */}
      {/* <HowItWorks /> */}
      {/* <Dashboard />
      <Product />
      <Development /> */}
      {/* <Pricing /> */}
      {/* <ContactForm /> */}
      {/* <Footer /> */}

      <Login />
    </Layout>
  )
}

export default LandingPage
