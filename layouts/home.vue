<template>
    <div class='bg-opacity-[0.95] bg-background min-h-screen max-h-full relative'>
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
                        {{ baseName() }}
                    </div>
                    <div class='cursor-pointer'>
                        <svg-icon
                            name='ls_logout'
                            width='25'
                            height='25'
                        />
                    </div>
                </div>
            </header>

            <div class='py-6 md:py-9'>
                <Nuxt />
            </div>

            <footer class='text-white fixed bottom-0 right-0 left-0 w-full'>
                <div class='container mx-auto px-2'>
                    <div class='bg-[#1A1A1A] flex justify-around py-2'>
                        <div v-for='(items, index) in footer' :key='index'>
                            <div class='border'>
                                <svg-icon
                                    :name='items.icon'
                                    width='30'
                                    height='30'
                                    class='border w-full'
                                />
                                <span>
                                    {{items.name}}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>

export default {
    name: 'home',
    data() {
        return {
            footer: [
                {
                    name: 'กิจกรรม',
                    icon: 'ic_round-local-activity'
                },
                {
                    name: 'โปรโมชัน',
                    icon: 'eos-icons_product-subscriptions'
                },
                {
                    name: 'หน้าหลัก',
                    icon: 'ant-design_home-filled'
                },
                {
                    name: 'สร้างรายได้',
                    icon: 'fluent_people-money-24-filled'
                },
                {
                    name: 'ติดต่อแอดมิน',
                    icon: 'clarity_administrator-solid'
                }
            ]
        }
    },

    methods: {
        baseName() {
            return process.env.baseName
        }
    }
}
</script>

<style lang='scss' scoped>
.z1 {
    z-index: -1;
}
</style>
