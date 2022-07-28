exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
  // default redirect
  createRedirect({ 
    fromPath: `/page-2`, 
    toPath: `/cl/page-2`, 
  }),
  // mexico redirect
  createRedirect({ 
    fromPath: `/page-2`, 
    toPath: `/blog/page-2`, 
    conditions: { 
      country: `MX` 
    } 
  }) 
}
