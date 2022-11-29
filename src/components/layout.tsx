import React from "react"
import Header from "./Header"
import { Container } from "./styled"

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
      </div>
    </Container>
  )
}

export default Layout
