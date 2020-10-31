import React from "react"
import { Layout } from "components/organism/layout"
import { SelectNew } from "components/organism/select-new"
import PrivateRoute from "components/atoms/privateRoute"

const AddNewContent = () => (
  <PrivateRoute>
    <Layout>
      <SelectNew />
    </Layout>
  </PrivateRoute>
)

export default AddNewContent
