var plugins = [{
      plugin: require('/media/edgarmartinez/DATA/gatsbyStarters/useThisDefinitively/myPerfectSIteTemplate/myPersonalWebsite/node_modules/gatsby-plugin-preload-link-crossorigin/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/media/edgarmartinez/DATA/gatsbyStarters/useThisDefinitively/myPerfectSIteTemplate/myPersonalWebsite/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Edgar Martínez's Personal Site","short_name":"Edgar","description":"This is my personal site.","start_url":"/","background_color":"#fff","theme_color":"#fff","display":"standalone","icon":"/media/edgarmartinez/DATA/gatsbyStarters/useThisDefinitively/myPerfectSIteTemplate/myPersonalWebsite/static/favicon.ico","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"3a318e3ceb32f2e06b497c0795ae14cb"},
    },{
      plugin: require('/media/edgarmartinez/DATA/gatsbyStarters/useThisDefinitively/myPerfectSIteTemplate/myPersonalWebsite/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/media/edgarmartinez/DATA/gatsbyStarters/useThisDefinitively/myPerfectSIteTemplate/myPersonalWebsite/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/media/edgarmartinez/DATA/gatsbyStarters/useThisDefinitively/myPerfectSIteTemplate/myPersonalWebsite/node_modules/gatsby-plugin-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":["Raleway:300,400"],"display":"swap"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
