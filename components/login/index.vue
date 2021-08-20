<template>
    <div>
        <div class='text-xl text-white mb-1'>
            ล๊อคอิน เข้าสู่ระบบ
        </div>
        <div class='text-sm text-white font-light'>
            ระบุเบอร์โทรศัพท์ / Pincode
        </div>
        <div class='mt-4'>
            <ValidationObserver ref='form' v-slot='{ handleSubmit }'>
                <form @submit.prevent='handleSubmit(onSubmit)'>
                    <div class='relative mb-4'>
                        <ValidationProvider
                            name='เบอร์โทรศัพท์'
                            rules='required'
                            v-slot='{ errors }'
                        >
                            <input type='text'
                                   class='w-full bg-gray-1 text-white font-light py-2 pl-12 rounded-md focus:outline-none'
                                   v-model='tel'
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

                    <div class='relative mb-4'>
                        <ValidationProvider
                            name='Pincode'
                            rules='required'
                            v-slot='{ errors }'
                        >
                            <input type='text'
                                   class='w-full bg-gray-1 text-white font-light py-2 pl-12 rounded-md focus:outline-none'
                                   v-model='pin'
                                   placeholder='Pincode'>
                            <div class='absolute top-2 left-3'>
                                <svg-icon
                                    name='ri_lock-password-line'
                                    width='25'
                                    height='25'
                                />
                            </div>
                            <small class='text-[red] text-xs'>
                                {{ errors[0] }}
                            </small>
                        </ValidationProvider>
                    </div>

                    <div class='flex justify-end text-white mb-4 cursor-pointer'>
                        ลืม Pincode ?
                    </div>

                    <button
                        class='w-full text-white text-xl bg-gradient-to-b from-gold-1 to-gold-2 px-7 py-2 rounded-full'>
                        ยืนยัน
                    </button>
                </form>
            </ValidationObserver>

            <div class='mt-5'>
                <div class='flex justify-center'>
                    <div class='text-white bg-[#1E1E1E] px-2 font-light'>
                        หรือ
                    </div>
                </div>
                <div class='border-b h-[5px] border-white w-full -mt-4 z1'></div>
            </div>

            <div class='mt-6 flex justify-center'>
                <div class='text-white mr-3'>
                    คุณยังไม่มีบัญชี?
                </div>
                <div class='underline text-yellow font-light cursor-pointer'>
                    สมัครสมาชิกใหม่
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            tel: '',
            pin: '',
        }
    }
}
</script>

<style scoped>

</style>
