<template>
    <div class='bg-opacity-[0.95] bg-background min-h-screen max-h-full relative pb-10'>
        <img src='../assets/image/money.png' alt='' class='opacity-[0.8] h-screen absolute z1'>
        <div class='container mx-auto px-2'>
            <header class='bg-gradient-to-b from-gold-1 to-gold-2 py-2 md:py-3 px-3 md:px-7 rounded-b-xl'>
                <div class='flex justify-between items-center'>
                    <div class='cursor-pointer'>
                        <svg-icon
                            name='bx_bxs-user-circle'
                            width='32'
                            height='32'
                        />
                    </div>
                    <div class='text-xl lg:text-2xl text-white'>
                        {{ title() }}
                    </div>
                    <div class='cursor-pointer' @click='logout'>
                        <svg-icon
                            name='ls_logout'
                            width='25'
                            height='25'
                        />
                    </div>
                </div>
            </header>

            <div class='container mx-auto py-2 md:py-5 xl:py-9'>
                <Nuxt />
            </div>

            <footer class='text-white fixed bottom-0 right-0 left-0 w-full'>
                <div class='container mx-auto md:px-2'>
                    <div class='bg-[#1A1A1A] flex justify-around rounded-t-xl'>
                        <div v-for='(items, index) in footer' :key='index' class='relative cursor-pointer'>
                            <div class='hidden md:block '>
                                <div @click='menuFooter(items.path)'
                                     class='w-[6rem] hover:bg-gradient-to-b from-gold-1 to-gold-2 '
                                     :class="index === 2 ? 'bg-gradient-to-b from-gold-1 to-gold-2 py-6 mt-[-20px] mb-[-30px] rounded-full' : 'pt-[4px]'">
                                    <svg-icon
                                        :name='items.icon'
                                        width='25'
                                        height='25'
                                        class='w-full'
                                    />
                                    <div class='text-sm mt-1 flex justify-center'>
                                        {{ items.name }}
                                    </div>
                                </div>
                            </div>

                            <div class='md:hidden'>
                                <div class='py-[12px] w-[60px]' @click='menuFooter(items.path)'
                                     :class="index === 2 ? 'bg-gradient-to-b from-gold-1 to-gold-2 rounded-full' : ''">
                                    <svg-icon
                                        :name='items.icon'
                                        width='18'
                                        height='18'
                                        class='w-full'
                                    />
                                    <div class='text-[10px] mt-1 flex justify-center'>
                                        {{ items.name }}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div v-if='showModal' class='text-black'>
                    <Contact @modal='setModal' />
                </div>
            </footer>
        </div>
    </div>
</template>

<script>

import Contact from '../components/menuModal/contact'

export default {
    name: 'home',
    components: { Contact },
    data() {
        return {
            showModal: false,
            footer: [
                {
                    name: 'กิจกรรม',
                    icon: 'ic_round-local-activity',
                    path: '/member/events'
                },
                {
                    name: 'โปรโมชัน',
                    path: '/member/promotions',
                    icon: 'eos-icons_product-subscriptions'
                },
                {
                    name: 'หน้าหลัก',
                    icon: 'ant-design_home-filled',
                    path: '/member'
                },
                {
                    name: 'สร้างรายได้',
                    icon: 'fluent_people-money-24-filled'
                },
                {
                    name: 'ติดต่อแอดมิน',
                    icon: 'clarity_administrator-solid',
                    path: 'contact'
                }
            ]
        }
    },

    mounted() {
        const key = process.env.TOKEN_NAME
        const token = localStorage.getItem(key)
        if (!token) {
            this.$router.push('/')
        }
        // const date = new Date()
        // if (this.$store.state.token_expiration <= date) {
        //     console.log(date)
        // }
    },

    methods: {
        title() {
            return process.env.TOKEN_NAME
        },

        menuFooter(value) {
            if (value === 'contact') {
                this.showModal = true
                document.body.classList.add('overflowHidden')
            } else {
                this.$router.push(value)
            }
        },

        setModal(value) {
            this.showModal = value
        },

        logout() {
            this.$store.dispatch("logout")
        }
    }
}
</script>

<style lang='scss' scoped>
.z1 {
    z-index: -1;
}
</style>
