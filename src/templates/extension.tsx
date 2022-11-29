import React from "react"
import Layout from "../components/layout"

const Extension = ({ pageContext }) => {
  const divRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    init()
  }, [])

  const init = async () => {
    if (!divRef.current) return
    console.log(pageContext)
    const _module = await import(
      // @ts-ignore
      `!!raw-loader!../../injectables/UIs/${pageContext.id}/index.html`
    )

    const fragment = document
      .createRange()
      .createContextualFragment(_module.default)

    divRef.current.append(fragment)
  }

  return (
    <Layout>
      <div ref={divRef}></div>
    </Layout>
  )
}

export default Extension
