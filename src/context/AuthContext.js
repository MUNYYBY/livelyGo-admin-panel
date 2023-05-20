// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const initAuth = async () => {
      setLoading(true)
      const storedToken1 = window.localStorage.getItem(authConfig.storageTokenKeyName)
      const storedToken2 = JSON.parse(storedToken1)
      const userDataCheck = window.localStorage.getItem('userData')
      console.log(JSON.parse(userDataCheck))
      if (storedToken2 && userDataCheck) {
        setUser(JSON.parse(userDataCheck))
        setLoading(false)
      } else {
        setLoading(false)
        handleLogout()
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ** Call the following function when and check which type
  // ** Of user is trying to login
  const handleLogin = (params, errorCallback) => {
    axios
      .post(authConfig.adminLoginEndpoint, { email: params.email, password: params.password })
      .then(async response => {
        console.log(response.data)
        const res = response.data

        const userData = {
          id: res.id,
          userName: res.userName,
          name: res.first_name + ' ' + res.last_name,
          role: 'admin'
        }

        const tokenData = {
          token: response.data.token
        }
        window.localStorage.setItem(authConfig.storageTokenKeyName, JSON.stringify(tokenData))
        window.localStorage.setItem('userData', JSON.stringify(userData))
        const returnUrl = router.query.returnUrl
        setUser(userData)
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        router.replace(redirectURL)
      })
      .catch(err => {
        console.log(err)
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const handleRegister = (params, errorCallback) => {
    axios
      .post(authConfig.registerEndpoint, params)
      .then(res => {
        if (res.data.error) {
          if (errorCallback) errorCallback(res.data.error)
        } else {
          handleLogin({ email: params.email, password: params.password })
        }
      })
      .catch(err => (errorCallback ? errorCallback(err) : null))
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
