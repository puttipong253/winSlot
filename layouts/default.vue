<template>
    <div class='bg-opacity-[0.95] bg-background min-h-screen max-h-full relative'>
        <img src='../assets/image/money.png' alt='' class='opacity-[0.8] h-screen absolute z1'>
        <div class='container mx-auto px-2'>
            <header class='py-2 md:py-3 px-3 md:px-7 rounded-b-xl'>
                <div class='flex justify-between items-center'>
                    <div class='cursor-pointer'>
                        <img src='../assets/image/logo.png' alt='' class='w-[60px] h-[60px] md:w-[75px] md:h-[75px]'>
                    </div>
                    <div class='flex items-center text-base text-white'>
                        <div class='mr-7 cursor-pointer hidden md:block'>
                            กิจกรรม
                        </div>
                        <div class='mr-7 cursor-pointer hidden md:block'>
                            เปิดไพ่
                        </div>
                        <div class='mr-7 cursor-pointer hidden md:block'>
                            โปรโมชั่น
                        </div>
                        <div class='mr-7 cursor-pointer hidden md:block'>
                            ติดต่อเรา
                        </div>
                        <button
                            class='bg-gradient-to-b font-light from-gold-1 to-gold-2 px-7 py-1 rounded-full'
                            @click='toggleModal = !toggleModal'
                        >
                            เข้าสู่ระบบ
                        </button>
                    </div>
                </div>

                <div v-if='toggleModal' class='absolute inset-0 z-40 bg-opacity-[0.8] bg-black transition duration-150 ease-in-out'>
                    <div
                        class='animate-fade-ping fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center'>
                        <div class='relative mx-auto'>
                            <div class='bg-[#1E1E1E] w-[30rem] rounded-lg px-7 py-4'>
                                <div class='flex justify-between items-center mb-6'>
                                    <div class='text-xl flex items-center'>
                                        <div @click='toggleModal = !toggleModal' class='cursor-pointer'>
                                            <svg-icon
                                                name='eva_arrow-back-fill'
                                                width='35'
                                                height='35'
                                            />
                                        </div>
                                        <span class='ml-2 text-white'>เข้าสู่ระบบ</span>
                                    </div>
                                    <div @click='toggleModal = !toggleModal' class='cursor-pointer'>
                                        <svg-icon
                                            name='carbon_close-filled'
                                            width='25'
                                            height='25'
                                        />
                                    </div>
                                </div>

                                <div class=''>
                                    <div class='text-xl text-white mb-1'>
                                        ล๊อคอิน เข้าสู่ระบบ
                                    </div>
                                    <div class='text-sm text-white font-light'>
                                        ระบุเบอร์โทรศัพท์ / Pincode
                                    </div>

                                    <div class='mt-4'>
                                        <div class=''>
                                            <div class='mb-4 relative'>
                                                <ValidationObserver ref='form' v-slot='{ handleSubmit }'>
                                                    <form @submit.prevent='handleSubmit(onSubmit)'>
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
                                                    </form>
                                                </ValidationObserver>
                                            </div>

                                            <div class='mb-4 relative'>
                                                <ValidationObserver ref='form' v-slot='{ handleSubmit }'>
                                                    <form @submit.prevent='handleSubmit(onSubmit)'>
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
                                                    </form>
                                                </ValidationObserver>
                                            </div>

                                            <div class='flex justify-end text-white mb-4 cursor-pointer'>
                                                ลืม Pincode ?
                                            </div>

                                            <button
                                                class='w-full text-white text-xl bg-gradient-to-b from-gold-1 to-gold-2 px-7 py-2 rounded-full'>
                                                ยืนยัน
                                            </button>

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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class='flex justify-center items-center text-sm text-white mt-2'>
                    <div class='mr-7 cursor-pointer md:hidden'>
                        ข่าวสาร
                    </div>
                    <div class='mr-7 cursor-pointer md:hidden'>
                        โปรโมชั่น
                    </div>
                    <div class='cursor-pointer md:hidden'>
                        ติดต่อเรา
                    </div>
                </div>
            </header>
        </div>

        <div class='container mx-auto px-2 py-2 md:py-5 xl:py-9'>
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
            <div class='bg-gradient-to-b font-light from-gold-1 to-gold-2'>
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

export default {
    name: 'default',
    data() {
        return {
            tel: '',
            pin: '',
            toggleModal: true,
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

    methods: {
        baseName() {
            return process.env.baseName
        },
        onSubmit() {
            try {

            } catch (e) {
                return e
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.z1 {
    z-index: -1;
}
</style>
