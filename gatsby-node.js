const pageExtensions = require("./hummhive-extensions.json")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  if (!pageExtensions) return
  console.log(pageExtensions)
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

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const defaultPage = pageExtensions.find(extension => extension.isDefault === false);
  console.log(defaultPage)
  if (page.path === '/' && defaultPage) {

  const indexPageComponentPath = require.resolve(
    './src/pages/index.js',
  );

  deletePage({
    path: '/',
    component: indexPageComponentPath,
  });

  createPage({
    path: '/',
    matchPath: `/`,
    component: require.resolve("./src/templates/extension.tsx"),
    context: defaultPage,
    });

    }
}

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === "production") {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}
