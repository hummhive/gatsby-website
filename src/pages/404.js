import * as React from "react"
import Container from "../components/container"

const NotFoundPage = () => {
  if (typeof window === "undefined") return null
  return (
    <Container>
      <h1 className="page-heading"><span>Not Found</span></h1>
      <p>
      The page you were looking for can't be found
      </p>
      </Container>
    )
  }

export default NotFoundPage
