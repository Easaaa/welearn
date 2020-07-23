import React from "react"
import { Layout } from "components/organism/layout"
import { Profile } from "components/organism/profile"
import { PasswordReset } from "components/organism/password-reset"

const ProfilePage = () => {
  return (
    <Layout>
      <Profile />
      <PasswordReset />
    </Layout>
  )
}

export default ProfilePage
