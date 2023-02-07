const pageExtensions = require("./hummhive-extensions.json")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  if (!pageExtensions) return

  pageExtensions.forEach(ext => {
    const page = {
      path: ext.slug,
      matchPath: `${ext.slug}/*`,
      component: require.resolve("./src/templates/extension.tsx"),
      context: ext,
      // defer: true,
    }
    createPage(page)
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const defaultPage = pageExtensions.find(extension => extension.isHomepage);

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
