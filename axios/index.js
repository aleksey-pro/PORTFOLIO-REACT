import axios from 'axios'

import Cookies from 'js-cookie'
import { getCookieFromReq } from '../helpers/utils' 

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 3000
})

const rejectPromise = (resError) => {
    let error = {}
    if(resError && resError.response && resError.response.data) {
        error = resError.response.data
    } else {
        error = resError
    }
    return Promise.reject(error)
}

/**
 * Если мы у нас запрос с сервера (есть req), то вызываем функцию getCookieFromReq
 * иначе берем токен из кукисов и в запрос на сервер добавляем заголовок с токеном
 */
const setAuthHeader = (req) => {
    const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt')
    if(token) {
        return {headers: {'authorization': `Bearer ${token}`}}
    }
    return undefined
}

export const getSecretData = async (req) => {
    const url = '/secret'
    return await axiosInstance.get(url, setAuthHeader(req)).then(response => response.data)

}

// PORTFOLIOS

export const getPortfolios = async () => {
    return await axiosInstance.get('/portfolios').then(response => response.data)
}

export const getPortfolioById = async (id) => {
    return await axiosInstance.get(`/portfolios/${id}`).then(response => response.data)
}

export const createPortfolio = async (portfolioData) => {
    // return await axiosInstance.get('/portfolios', PortfolioData, setAuthHeader())...
    return await axiosInstance.post('/portfolios', portfolioData)
    .then(response => response.data)
    .catch(error => rejectPromise(error))
}

export const updatePortfolio = async (portfolioData) => {
    // return await axiosInstance.get('/portfolios', PortfolioData, setAuthHeader())...
    return await axiosInstance.patch(`/portfolios/${portfolioData._id}`, portfolioData)
    .then(response => response.data)
    .catch(error => rejectPromise(error))
}

export const deletePortfolio = (portfolioId) => {
    return axiosInstance.delete(`/portfolios/${portfolioId}`).then(response => response.data)
}














