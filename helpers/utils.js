

/**
 * Нашли нужную нам куку в загловке запроса? разбили на ключ-значение и выбрали ее значение 
 */
export const getCookieFromReq = (req, cookieType) => {
    const cookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${cookieType}=`))
    if (!cookie) { return undefined }
    return cookie.split('=')[1]
}