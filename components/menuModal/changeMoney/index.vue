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
                                โยกเงิน
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

                    <div>
                        <div class='w-full relative'>
                            <img src='~/assets/image/withdraw_background.png' alt='' class=''>
                            <div class='absolute top-0 p-3 md:p-5'>
                                <div class='text-white text-2xl'>
                                    Wallet
                                </div>
                                <div class='text-white text-3xl mt-5 md:mt-10'>
                                    ฿ {{ addComma(wallet.toFixed(2)) }}
                                </div>
                            </div>
                        </div>

                        <div class='w-full flex justify-center my-2'>
                            <svg-icon
                                name='fluent_arrow-sort-24-filled'
                                width='30'
                                height='30'
                            />
                        </div>

                        <div class='w-full relative'>
                            <img src='~/assets/image/gameBackground.png' alt='' class='bg-gray-1 rounded-md'>
                            <div class='absolute top-0 p-3 md:p-5'>
                                <div class='text-white text-2xl'>
                                    JOCKER GAMING
                                </div>
                                <div class='text-white text-3xl mt-5 md:mt-10'>
                                    ฿ {{ addComma(walletGame.toFixed(2)) }}
                                </div>
                            </div>
                        </div>

                        <div class='flex gap-3 mt-5 px-2 md:px-4'>
                            <button
                                @click="closeModal"
                                class='bg-gray-4 px-5 py-2 text-white rounded-full w-full text-sm md:text-base'>
                                ยกเลิก
                            </button>
                            <button
                                class='bg-gradient-to-b from-gold-1 to-gold-2 px-5 py-2 text-white rounded-full w-full text-sm md:text-base'>
                                ยืนยัน
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import global from '~/mixins/global'
export default {
    name: 'changeMoney',
    mixins: [global],
    data() {
        return {
            showModal: false,
            wallet: 950,
            bank_number: '485-331-3463',
            bank_account_name: 'สายฟ้า โยธา',
            price: '',
            walletGame: 360
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
