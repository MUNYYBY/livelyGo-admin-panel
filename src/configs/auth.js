import { API_URL } from '../../Client/request'

export default {
  meEndpoint: '/auth/me',
  adminLoginEndpoint: API_URL + 'login_admin',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'logout' // logout | refreshToken
}
