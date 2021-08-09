
const nextConfig = {
  target: 'serverless',


  env: {
    EMAIL_API: process.env.EMAIL_API,
    CAPTCHA_KEY: process.env.CAPTCHA_KEY,
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
  },
};

module.exports = nextConfig;
