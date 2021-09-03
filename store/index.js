import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
    token_expiration: '',
    token_start: '',
    otp_ref: '',
    phone_number: '',
    next_register: '',
    bank: []
})

export const mutations = {
    login(state, payload) {
        state.token_expiration = payload.token_expiration
        state.token_start = payload.token_start
    },

    register(state, payload) {
        state.otp_ref = payload.res.otp_ref
        state.phone_number = payload.phone_number
        state.next_register = payload.res.next_register
    },

    bank(state, payload) {
        state.bank = payload
    }
}

export const actions = {
    async login(context, data) {
        try {
            let res = await this.$axios.$post('/auth/submit-login', {
                phone_number: data.phone_number,
                password: data.password
            })
            if (res) {
                localStorage.setItem('winSlotToken', res.token)
                context.commit('login', res)
                this.$swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: res.message,
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    this.$router.push('/member')
                })
            }
        } catch (e) {
            this.$swal.fire({
                position: 'center',
                icon: 'error',
                title: e.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    },

    async register(context, data) {
        try {
            let res = await this.$axios.$post('/auth/submit-request-otp', { phone_number: data.phone_number })
            if (res) {
                context.commit('register', { res: res, phone_number: data.phone_number })
            }
        } catch (e) {
            return e
        }
    },

    async getBank(context, data) {
        try {
            let res = await this.$axios.$post('/general/get-bank')
            if (res) {
                context.commit('bank', res.data.map((item) => {
                    return {
                        id: item.id,
                        bank_code: item.bank_code,
                        bank_type: item.bank_type,
                        bank_name: item.bank_name,
                        bank_logo: item.bank_logo
                    }
                }))
            }
        } catch (e) {
            return e
        }
    }
}
