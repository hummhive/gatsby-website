import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  if (typeof window === "undefined") return null

  return (
    <Layout>
      <h1>Home Page </h1>
      <p>
        This will be empty for now. We should either allow an extension to
        override the homepage or figure out what to put here.
      </p>
      <h3>Theme Primary color</h3>
      <div
        style={{
          background: window.hummhiveApi.theme.light.primary,
          height: 50,
          width: 50,
          borderRadius: 25,
        }}
      />
    </Layout>
  )
}

export default IndexPage
