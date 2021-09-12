<template>
    <div
        class='absolute inset-0 z-40 bg-opacity-[0.8] bg-black transition duration-150 ease-in-out'>
        <div
            class='animate-fade-ping fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center'>
            <div class='relative mx-auto'>
                <div class='bg-[#1E1E1E] min-h-full max-h-[35rem] w-[22rem] overflow md:w-[32rem] rounded-lg px-7 py-4'>
                    <div class='flex justify-between items-center mb-6'>
                        <div class='text-xl md:text-2xl flex items-center'>
                            <span class='text-white'>
                                เพิ่มเติม
                            </span>
                        </div>
                        <div @click='closeModal' class='cursor-pointer'>
                            <svg-icon
                                name='carbon_close-filled'
                                width='25'
                                height='25'
                            />
                        </div>
                    </div>

                    <div class='flex mb-3'>
                        <div class='grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-5 w-full'>
                            <div v-for='(items,index) in more' :key='index'>
                                <div @click="$router.push(items.path)" class='bg-[#242424] py-4 px-3 rounded-lg cursor-pointer shadow-lg transform transition duration-300 ease-in-out hover:-translate-y-3 border-2 border-[#242424] hover:border-gold-2'>
                                    <div class='flex justify-center'>
                                        <img :src='items.image' alt='' class='h-[45px]'>
                                    </div>
                                    <div class='text-white text-sm text-center pt-2 pb-1'>{{ items.title }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'more',
    data() {
        return {
            showModal: false,
            more: [
                {
                    image: require('~/assets/image/ic_twotone-manage-search.png'),
                    title: 'ประวัติ',
                    path: ''
                },
                {
                    image: require('~/assets/image/mdi_database-check-outline.png'),
                    title: 'เช็คอิน',
                    path: '/member/check-in'
                },
                {
                    image: require('~/assets/image/uil_fidget-spinner.png'),
                    title: 'วงล้อ',
                    path: ''
                },
                {
                    image: require('~/assets/image/ic_outline-shopping-cart.png'),
                    title: 'แลกรางวัล',
                    path: ''
                },
                {
                    image: require('~/assets/image/user.png'),
                    title: 'ลำดับ',
                    path: ''
                },
                {
                    image: require('~/assets/image/mdi_cards.png'),
                    title: 'เปิดไพ่',
                    path: ''
                }
            ]
        }
    },

    methods: {
        closeModal() {
            this.$emit('modal', this.showModal)
            document.body.classList.remove('overflowHidden')
        }
    }
}
</script>

<style scoped>

</style>
