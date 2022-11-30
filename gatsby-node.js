const pageExtensions = require("./hummhive-extensions.json")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  if (!pageExtensions) return

  pageExtensions.forEach(ext => {
    const page = {
      path: ext.baseRoute,
      matchPath: `${ext.baseRoute}/*`,
      component: require.resolve("./src/templates/extension.tsx"),
      context: ext,
      // defer: true,
    }
    createPage(page)
  })
}

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === "production") {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}
