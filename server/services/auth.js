const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')

//MIDDLEWARE
// Возвращает генерируемое значение в request конечного запроса сервера, к которму этот
// middlware применяется

/**
 * Берем данные из services/auth0
 * jwksClient пакета jwks-rsa создает сертификат - аналогично тому, 
 * что и в services/auth0 в функции verifyToken
 */
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: 'https://dev-gfxis29r.eu.auth0.com/.well-known/jwks.json'
  }),
  
  audience: 'T22UAGUlBeeyWuQiFgkPyMevyqy04tNg',
  issuer: 'https://dev-gfxis29r.eu.auth0.com/' ,
  algorithms: ['RS256']
})

