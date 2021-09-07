<template>
    <div class='bg-opacity-[0.95] bg-background min-h-screen max-h-full relative'>
        <img src='../assets/image/money.png' alt='' class='opacity-[0.8] h-screen absolute z1'>
        <div class='container mx-auto px-2'>
            <header class='py-2 md:py-3 px-3 md:px-7 rounded-b-xl'>
                <div class='flex justify-between items-center'>
                    <div class='cursor-pointer'>
                        <img src='../assets/image/logo.png' alt='' class='w-[60px] h-[60px] md:w-[75px] md:h-[75px]'
                             @click="$router.push('/')">
                    </div>
                    <div class='flex items-center'>
                        <div class='text-base text-white mr-7 cursor-pointer hidden md:block'
                             @click="$router.push('events')">
                            กิจกรรม
                        </div>
                        <div class='text-base text-white mr-7 cursor-pointer hidden md:block'
                             @click="$router.push('randomCard')">
                            เปิดไพ่
                        </div>
                        <div class='text-base text-white mr-7 cursor-pointer hidden md:block'
                             @click="$router.push('promotions')">
                            โปรโมชั่น
                        </div>
                        <div class='text-base text-white mr-7 cursor-pointer hidden md:block'>
                            ติดต่อเรา
                        </div>
                        <button
                            class='text-xs md:text-base text-white bg-gradient-to-b font-light from-gold-1 to-gold-2 px-7 py-1 rounded-full'
                            @click='login'
                        >
                            เข้าสู่ระบบ
                        </button>
                    </div>
                </div>

                <div v-if='toggleModal'>
                    <div v-if="loginStatus === 'login'"
                         class='absolute inset-0 z-50 bg-opacity-[0.8] bg-black transition duration-150 ease-in-out'>
                        <div
                            class='animate-fade-ping fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center'>
                            <div class='relative mx-auto'>
                                <div class='bg-[#1E1E1E] w-[22rem] md:w-[30rem] rounded-lg px-7 py-4'>
                                    <div class='flex justify-between items-center mb-6'>
                                        <div class='text-2xl flex items-center'>
                                            <span
                                                class='text-white'>เข้าสู่ระบบ</span>
                                        </div>
                                        <div @click='closeModal' class='cursor-pointer'>
                                            <svg-icon
                                                name='carbon_close-filled'
                                                width='25'
                                                height='25'
                                            />
                                        </div>
                                    </div>

                                    <div class='text-xl text-white mb-1'>
                                        ล๊อคอิน เข้าสู่ระบบ
                                    </div>
                                    <div class='text-sm text-white font-light'>
                                        ระบุเบอร์โทรศัพท์ / รหัสผ่าน
                                    </div>
                                    <div class='mt-4'>
                                        <ValidationObserver ref='form' v-slot='{ handleSubmit }'>
                                            <form @submit.prevent='handleSubmit(onSubmit)'>
                                                <div class='relative mb-4'>
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

                                                <div @click="loginStatus = 'forgetPassword'"
                                                     class='flex justify-end text-white mb-4 cursor-pointer'>
                                                    ลืมรหัสผ่าน ?
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
                                            <div @click="loginStatus = 'register'"
                                                 class='underline text-yellow font-light cursor-pointer'>
                                                สมัครสมาชิกใหม่
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="loginStatus === 'forgetPassword'">
                        <ForgetPassword @modal='setModal' />
                    </div>
                    <div v-if="loginStatus === 'register'">
                        <Register @modal='setModal' />
                    </div>
                </div>
                <div class='flex justify-center items-center text-sm text-white mt-2'>
                    <div class='mr-7 cursor-pointer md:hidden' @click="$router.push('events')">
                        กิจกรรม
                    </div>
                    <div class='mr-7 cursor-pointer md:hidden' @click="$router.push('randomCard')">
                        เปิดไพ่
                    </div>
                    <div class='mr-7 cursor-pointer md:hidden' @click="$router.push('promotions')">
                        โปรโมชั่น
                    </div>
                    <div class='cursor-pointer md:hidden'>
                        ติดต่อเรา
                    </div>
                </div>
            </header>

        </div>

        <div class='container mx-auto px-3 md:px-7 py-2 md:py-5 xl:py-9'>
            <Nuxt />
        </div>

        <footer class='bg-gray-2 mt-10'>
            <div class='hidden md:block'>
                <div class='flex justify-between container mx-auto px-2'>
                    <div v-for='(items,index) in bank' :key='index' class='py-5'>
                        <div class='bg-[#4f4f4f] px-1 py-1 rounded-full'>
                            <div class='bg-[#5f6161] px-2 py-2 rounded-full'>
                                <img :src='items.image' alt='' width='25' height='25' class='bg-[#5f6161]'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='bg-gradient-to-b from-gold-1 to-gold-2 font-light'>
                <div class='container mx-auto p-2 text-center'>
                    <span class='text-white font-normal text-sm'>
                        © COPYRIGHT 2020 COMPANYNAME ALL RIGHTS RESERVED
                    </span>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import Register from '../components/register'
import ForgetPassword from '../components/forgetPassword'

export default {
    name: 'default',
    components: { ForgetPassword, Register },
    data() {
        return {
            phone_number: '',
            password: '',
            loginStatus: 'login',
            toggleModal: false,
            bank: [
                {
                    image: require('../assets/image/bank-1.png')
                },
                {
                    image: require('../assets/image/bank-2.png')
                },
                {
                    image: require('../assets/image/bank-3.png')
                },
                {
                    image: require('../assets/image/bank-4.png')
                },
                {
                    image: require('../assets/image/bank-5.png')
                },
                {
                    image: require('../assets/image/bank-6.png')
                },
                {
                    image: require('../assets/image/bank-7.png')
                },
                {
                    image: require('../assets/image/bank-8.png')
                },
                {
                    image: require('../assets/image/bank-9.png')
                },
                {
                    image: require('../assets/image/bank-10.png')
                },
                {
                    image: require('../assets/image/bank-11.png')
                },
                {
                    image: require('../assets/image/bank-12.png')
                }
            ]
        }
    },

    mounted() {
        this.$store.dispatch('logout')
    },

    methods: {
        async onSubmit() {
            try {
                await this.$store.dispatch('login', { phone_number: this.phone_number, password: this.password })
            } catch (e) {
                return e
            }
        },

        closeModal() {
            this.toggleModal = !this.toggleModal
            this.loginStatus = 'login'
            this.phone_number = ''
            this.password = ''
            document.body.classList.remove('overflowHidden')
        },

        setModal(value) {
            this.loginStatus = 'login'
            this.toggleModal = value
        },

        login() {
            this.toggleModal = !this.toggleModal
            document.body.classList.add('overflowHidden')
        }
    }
}
</script>

<style lang='scss' scoped>
.z1 {
    z-index: -1;
}
</style>
