export default async ({ $axios, store }) => {
    $axios.defaults.headers.common['Authorization'] = store.state.token ? `Bearer ${store.state.token}` : '';
}
