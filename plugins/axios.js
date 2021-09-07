export default async ({ $axios, store }) => {
    $axios.defaults.withCredentials = true
    $axios.defaults.baseURL = process.env.API_URL
}
