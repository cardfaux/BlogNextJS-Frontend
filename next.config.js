const path = require('path');

module.exports = {
  webpack: (config) => {
    return config;
  },
  publicRuntimeConfig: {
    APP_NAME: process.env.APP_NAME,
    API_DEVELOPMENT: process.env.API_DEVELOPMENT,
    API_PRODUCTION: process.env.API_PRODUCTION,
    CLIENT_DEVELOPMENT: process.env.CLIENT_DEVELOPMENT,
    PRODUCTION: process.env.PRODUCTION,
    FB_APP_ID: process.env.FB_APP_ID,
    DOMAIN_PRODUCTION: process.env.DOMAIN_PRODUCTION,
    DOMAIN_DEVELOPMENT: process.env.DOMAIN_DEVELOPMENT,
    DISQUS_SHORTNAME: process.env.DISQUS_SHORTNAME,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },
};
