import React from "react"
import hummhiveTheme from "../../hummhive-theme.json"

export default () => {
  const [theme, setTheme] = React.useState<any>(null)

  React.useEffect(() => {
    setTheme(hummhiveTheme)
  }, [])

  return theme
}
