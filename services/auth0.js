import auth0 from 'auth0-js'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import axios from 'axios'
import { getCookieFromReq } from '../helpers/utils'

class Auth0 {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'dev-gfxis29r.eu.auth0.com',
            clientID: 'T22UAGUlBeeyWuQiFgkPyMevyqy04tNg',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
        });
    }

    /**
     * Распарсим строку с query, если в ней есть значения accessToken и 
     * idToken - пишем в браузер куки с полченными данными
     */
    handleAuthentication = () => {        
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                  this.setSession(authResult)
                  resolve()
                } else if (err) {
                   reject(err) 
                   console.log(err)
                }
              })
        })

    }

    /**
     * Записываем  куки в браузер из полученного объекта
     *  с даннми о пользователе
     */
    setSession = (authResult) =>  { 
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())    
        Cookies.set('user', authResult.idTokenPayload)
        Cookies.set('jwt', authResult.idToken)
        Cookies.set('expiresAt', expiresAt)

    }
    /**
     * Метод объекта login - вызывает соответствущий метод auth0-js библиотеки 
     * удяляем куки и редиректимся на домашнюю страницу
     */
    logout = () => {
        Cookies.remove('user')
        Cookies.remove('jwt')
        Cookies.remove('expiresAt')   
        this.auth0.logout({
            redirectTo: '',
            clientID: 'T22UAGUlBeeyWuQiFgkPyMevyqy04tNg'
        })
    } 

    /**
     * Метод объекта login - вызывает соответствущий метод auth0-js библиотеки 
     */
    login = () => {
        this.auth0.authorize();
    }

    /**
     * Получим ключи, которые используются для верификации jwt-токена
     */
    getJWKS = async () => {
        const res = await axios.get('https://dev-gfxis29r.eu.auth0.com/.well-known/jwks.json', {
            crossDomain: true
        })
        const jwks = res.data;
        return jwks;
      }


    /**
     * Расшифруем токен, из полученного объекта берем дату окончания куки
     * Если она меньше текущей даты, то токен действителен и мы можем вернуть объект
     * с данными пользователя, хранящийся с токене
     * Поскольку она вызывает асинхронный запрос - делаем с ней async-await, и поэтому меняем и остальные
     * функции на async-await, которые её вызывают
     */
     verifyToken = async (token) => {
        if (token) {
            const decodedToken = jwt.decode(token, {complete: true}) // Получить  значения заголовка (complete)
            if(!decodedToken) { return undefined}
            const jwks = await this.getJWKS()            
            const jwk = jwks.keys[0]
            // build certificate
            let cert = jwk.x5c[0];
            cert = cert.match(/.{1,64}/g).join('\n'); // разбивает хеш на массив, в каждом значении по 64 символов            
            cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`; 
            //
            if(jwk.kid === decodedToken.header.kid) {
                try {
                    const verifiedToken = jwt.verify(token, cert)
                    const expiresAt = decodedToken.payload.exp * 1000                    
                    return ( verifiedToken && new Date().getTime() < expiresAt ) ? decodedToken : undefined
                } catch(err) {
                    return undefined
                }
            }            
        }
        return undefined
    }


    /**
     * Берем из куков браузера токен и верифицируем его
     */
    clientAuth = async () => {        
        const token = Cookies.getJSON('jwt')
        const verifiedToken = await this.verifyToken(token)
        return verifiedToken
    }

    /**
     * Берем из заголовков куку с токеном и верифицируем его
     */
    serverAuth = async (req) => {
        if (req.headers.cookie) {            
            const token = getCookieFromReq(req, 'jwt')
            const verifiedToken = await this.verifyToken(token)            
            return verifiedToken
        }
        return undefined
    }
}

const auth0Client = new Auth0()
export default auth0Client