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
                            name='เบอร์โทรศัพท์'
                            rules='required|min:10|max:10'
                            v-slot='{ errors }'
                        >
                            <input type='number'
                                   class='w-full bg-gray-1 text-white font-light py-2 pl-12 rounded-md focus:outline-none'
                                   v-model='phone_number'
                                   placeholder='เบอร์โทรศัพท์'>
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
    name: 'step1',
    data() {
        return {
            phone_number: '',
            step: 1
        }
    },

    methods: {
        async onSubmit() {
            this.$emit('handleStep1', this.step + 1)
            // await this.$store.dispatch('register', { phone_number: this.phone_number }).then((res) => {
            //     if (res) {
            //         if (res.next_register === true) {
            //             this.$swal.fire({
            //                 position: 'center',
            //                 icon: 'success',
            //                 title: res.message,
            //                 showConfirmButton: false,
            //                 timer: 1500
            //             }).then(() => {
            //                 this.$emit('handleStep1', this.step + 2)
            //             })
            //         } else if (res.next_step === true) {
            //             this.$swal.fire({
            //                 position: 'center',
            //                 icon: 'success',
            //                 title: res.message,
            //                 showConfirmButton: false,
            //                 timer: 1500
            //             })
            //             this.$emit('handleStep1', this.step + 1)
            //         } else if (res.next_register === false) {
            //             if (res.otp_ref === '') {
            //                 this.$swal.fire({
            //                     position: 'center',
            //                     icon: 'warning',
            //                     title: res.message,
            //                     showConfirmButton: false,
            //                     timer: 1500
            //                 })
            //             } else {
            //                 this.$swal.fire({
            //                     position: 'center',
            //                     icon: 'success',
            //                     title: res.message,
            //                     showConfirmButton: false,
            //                     timer: 1500
            //                 })
            //                 this.$emit('handleStep1', this.step + 1)
            //             }
            //         } else {
            //             this.$swal.fire({
            //                 position: 'center',
            //                 icon: 'error',
            //                 title: res.message,
            //                 showConfirmButton: false,
            //                 timer: 1500
            //             }).then(() => {
            //                 this.phone_number = ''
            //             })
            //         }
            //     }
            // })
        }
    }
}
</script>

<style scoped>

</style>
