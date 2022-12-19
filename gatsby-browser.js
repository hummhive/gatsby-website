import React from "react"
import "@fontsource/muli"
import "@fontsource/work-sans"
import Layout from "./src/components/layout"
import api from "./src/api"
window.hummhiveApi = api

export const wrapPageElement = ({element, props}) => {
  return <Layout {...props}>{element}</Layout>
}
