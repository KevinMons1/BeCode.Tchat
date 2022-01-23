import Cookies from "js-cookie"
import axios from "axios"

class AuthClass {
    constructor() {
        // this.authenticated = false
        this.authenticated = true
    }

    checkAuth() {
        const request = async () => {
            const token = await Cookies.get('user')

            const result = await axios.post(`${process.env.REACT_APP_API}/`, token)

            if (result.data.auth) {
                this.authenticated = true
                return true
            }
            else return false

        }
        return request()
    }

    checkToken() {
        const request = async () => {
            const token = await Cookies.get('user')

            const result = await axios.post(`${process.env.REACT_APP_API}/`, token)

            if (result.data.auth) return true
            else return false

        }
        return request()
    }

    signIn(data) {
        const request = async () => {
            try {
                const result = await axios.post(`${process.env.REACT_APP_API}/`, data)

                if (result.data.auth) {
                    await Cookies.set('user', result.data.token)
                    this.authenticated = true

                    return true
                }
                else return false

            } catch (err) {
                return err
            }
        }
        return request()
    }

    signUp(data) {
        const request = async () => {
            try {
                const result = await axios.post(`${process.env.REACT_APP_API}/`, data)

                if (result.data.auth) return true
                else return false

            } catch (err) {
                return err
            }
        }
        return request()
    }

    isAuth() {
        return this.authenticated
    }
}

const Auth = new AuthClass()

export default Auth