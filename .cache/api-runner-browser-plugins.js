module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Edgar Martínez's Personal Site","short_name":"Edgar","description":"This is my personal site.","start_url":"/","background_color":"#fff","theme_color":"#fff","display":"standalone","icon":"/media/edgarmartinez/DATA/gatsbyStarters/useThisDefinitively/myPerfectSIteTemplate/myPersonalWebsite/static/favicon.ico","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"3a318e3ceb32f2e06b497c0795ae14cb"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"tomato","showSpinner":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
