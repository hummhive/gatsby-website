import * as React from "react"
import Container from "../components/container"

const IndexPage = () => {
  if (typeof window === "undefined") return null
  return (
    <Container>
      <h1 className="page-heading"><span>Home Page</span></h1>
      <p>
        This will be empty for now. We should either allow an extension to
        override the homepage or figure out what to put here.
      </p>
      </Container>
  )
}

export default IndexPage
