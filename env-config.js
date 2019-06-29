const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod
    ? 'https://portfolio-nextjs-app.herokuapp.com'
    : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://portfolio-nextjs-app.herokuapp.com',
  'process.env.CLIENT_ID': 'T22UAGUlBeeyWuQiFgkPyMevyqy04tNg',
};
