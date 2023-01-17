import React from "react"
import "@fontsource/muli"
import "@fontsource/work-sans"
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/700.css";
import Layout from "./src/components/layout"
import api from "./src/api"
window.hummhiveApi = api

export const wrapPageElement = ({element, props}) => {
  return <Layout {...props}>{element}</Layout>
}
