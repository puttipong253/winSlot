export default function isAuth() {
    let key = process.env.TOKEN_NAME
    let token = localStorage.getItem(key)
    if (token) {
        return {
            'Authorization' : 'Bearer ' + token
        }
    } else {
        return {}
    }
}
