const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod
    ? 'https://web-profi.site'
    : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://web-profi.site',
  'process.env.CLIENT_ID': 'T22UAGUlBeeyWuQiFgkPyMevyqy04tNg',
};
