<template>
    <div>
        <div class='text-xl text-white mb-1'>
            ยืนยันเบอร์โทรศัพท์
        </div>
        <div class='text-sm text-white font-light'>
            กรุณากรอกเบอร์โทรศัพท์ของท่าน เพื่อใช้ในการเข้าสู่ระบบในครั้งต่อไป
        </div>
        <div class='mt-4'>
            <ValidationObserver ref='form' v-slot='{ handleSubmit }'>
                <form @submit.prevent='handleSubmit(onSubmit)'>
                    <div class='relative mb-7'>
                        <ValidationProvider
                            name='OTP'
                            rules='required'
                            v-slot='{ errors }'
                        >
                            <input type='number'
                                   class='w-full bg-gray-1 text-white font-light py-2 pl-12 rounded-md focus:outline-none'
                                   v-model='otp'
                                   placeholder='OTP'>
                            <div class='absolute top-2 left-3'>
                                <svg-icon
                                    name='fluent_phone-checkmark-20-regular'
                                    width='25'
                                    height='25'
                                />
                            </div>
                            <small class='text-[red] text-xs'>
                                {{ errors[0] }}
                            </small>
                        </ValidationProvider>
                        <div class='text-white mt-2'>otp_ref: {{ otp_request }}</div>
                    </div>

                    <button
                        type='submit'
                        class='w-full text-white text-xl bg-gradient-to-b from-gold-1 to-gold-2 px-7 py-2 rounded-full'>
                        ยืนยัน
                    </button>
                </form>
            </ValidationObserver>
        </div>
    </div>
</template>

<script>
export default {
    name: 'step2',
    data() {
        return {
            otp: '',
            step: 2
        }
    },

    computed: {
        otp_request() {
            return this.$store.state.otp_ref
        },
        phone() {
            return this.$store.state.phone_number
        }
    },

    methods: {
        async onSubmit() {
            try {
                let res = await this.$axios.$post('/auth/submit-verify-otp', {
                    phone_number: this.phone,
                    otp_number: this.otp,
                    otp_ref: this.otp_request
                })
                if (res) {
                    if (res.next_register === false) {
                        this.$swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: res.message,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    } else {
                        this.$swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: res.message,
                            showConfirmButton: false,
                            timer: 1500
                        }).then(() => {
                            this.$emit('handleStep2', this.step + 1)
                        })
                    }
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
        }
    }
}
</script>

<style scoped>

</style>
