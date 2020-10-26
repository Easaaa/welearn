import React, { useEffect, useContext } from "react"
import { FirebaseContext } from "../../lib/firebase"
import { graphql } from "gatsby"

import { PageLoader } from "components/atoms/page-loader"

import { Layout } from "components/organism/layout"
import { Login } from "components/organism/login"
import { Home } from "components/organism/home"

const HomePage = () => {
  const { currentUser, firebase, dbLoading } = useContext(FirebaseContext)

  if (dbLoading)
    return (
      <Layout>
        <PageLoader />
      </Layout>
    )
  else {
    return (
      <Layout>
        <Home />
      </Layout>
    )
  }
}

export default HomePage
