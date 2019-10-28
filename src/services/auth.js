import axios from 'axios'
export default {
    setAuth(data){
      localStorage.setItem('auth', JSON.stringify(data))
    },
    getAuth(){
      return JSON.parse(localStorage.getItem('auth'))
    },
    setUser(data){
        localStorage.setItem('user', JSON.stringify(data))
    },
    getUser(){
        return JSON.parse(localStorage.getItem('user'))
    },
    login (credentials) {
        return axios.post(`${process.env.VUE_APP_MAIN_API}/api/login`, {
          email: credentials.email,
          password: credentials.password
        })
    },
    flush () {
      localStorage.removeItem('auth')
      localStorage.removeItem('user')
    },
    logout () {
        return axios.post(`${process.env.VUE_APP_MAIN_API}/api/logout`)
    }
}