
const withPWA = require('next-pwa')({
  dest:'public',
})

const nextConfig = {};

module.exports = withPWA(nextConfig);
