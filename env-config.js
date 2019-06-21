const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod
    ? 'http://web-profi.site'
    : 'http://localhost:3000',
  'process.env.NAMESPACE': 'http://web-profi.site',
  'process.env.CLIENT_ID': 'T22UAGUlBeeyWuQiFgkPyMevyqy04tNg',
};
