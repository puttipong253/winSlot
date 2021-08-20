<template>
    <div>
        <div class='text-xl text-white mb-1'>
            ตั้งรหัสผ่าน
        </div>
        <div class='text-sm text-white font-light'>
            กรุณาตั้งรหัสผ่าน เพื่อใช้ในการเข้าสู่ระบบเว็บไซต์ครั้งต่อไป
        </div>
        <div class='mt-4'>
            <ValidationObserver ref='form' v-slot='{ handleSubmit }'>
                <form @submit.prevent='handleSubmit(onSubmit)'>
                    <div class='relative mb-4'>
                        <ValidationProvider
                            name='รหัสผ่าน'
                            rules='required'
                            v-slot='{ errors }'
                        >
                            <input type='password'
                                   class='w-full bg-gray-1 text-white font-light py-2 pl-12 rounded-md focus:outline-none'
                                   v-model='password'
                                   placeholder='รหัสผ่าน'>
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

                    <div class='relative mb-7'>
                        <ValidationProvider
                            name='ยืนยันรหัสผ่าน'
                            rules='required'
                            v-slot='{ errors }'
                        >
                            <input type='password'
                                   class='w-full bg-gray-1 text-white font-light py-2 pl-12 rounded-md focus:outline-none'
                                   v-model='confirm_password'
                                   placeholder='ยืนยันรหัสผ่าน'>
                            <div class='absolute top-2 left-3'>
                                <svg-icon
                                    name='whh_password'
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
    name: 'step4',
    data () {
        return {
            password: '',
            confirm_password: '',
            step: 4
        }
    },

    methods: {
        onSubmit() {
            this.$emit('handleStep2')
        },
    }
}
</script>

<style scoped>

</style>
