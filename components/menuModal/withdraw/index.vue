<template>
    <div
        class='absolute inset-0 z-40 bg-opacity-[0.8] bg-black transition duration-150 ease-in-out'>
        <div
            class='animate-fade-ping fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center'>
            <div class='relative mx-auto'>
                <div class='bg-[#1E1E1E]  min-h-full max-h-[35rem] overflow md:w-[30rem] rounded-lg px-7 py-4'>
                    <div class='flex justify-between items-center mb-6'>
                        <div class='text-2xl flex items-center'>
                            <span class='text-white'>
                                ถอนเงิน
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

                        <div class='mt-3 bg-[#242424] rounded-lg p-4'>
                            <div class='flex items-center border-b border-gray-4 pb-3'>
                                <img src='~/assets/image/ktb.png' alt='' width='30' class=''>
                                <span class='ml-3 font-light text-base text-white'>ธนาคารกรุงไทย</span>
                            </div>
                            <div class='flex justify-between font-light text-white border-b border-gray-4 py-2'>
                                <div>
                                    เลขที่บัญชี
                                </div>
                                <div>
                                    {{ bank_number }}
                                </div>
                            </div>
                            <div class='flex justify-between font-light text-white py-2'>
                                <div>
                                    ชื่อบัญชี
                                </div>
                                <div>
                                    {{ bank_account_name }}
                                </div>
                            </div>
                        </div>

                        <div class='mt-3 bg-[#242424] rounded-lg p-4'>
                            <div class='font-light text-white border-b border-gray-4 py-2'>
                                <div class=''>
                                    จำนวนเงิน
                                </div>
                                <div class='flex justify-end text-2xl '>
                                    <input type='text' v-model='price'
                                           class='w-40 bg-[#242424] text-xl focus:outline-none text-right pt-1'
                                           placeholder='กรอกจำนวนเงิน'>
                                    <span class='ml-3'>บาท</span>
                                </div>
                            </div>
                            <div class='text-sm mt-2 font-light text-white'>
                                จำนวนเงิน (บาท) **ขั้นต่ำ 300 บาท / สูงสุด 20,000 บาท
                            </div>
                        </div>

                        <div class='text-[#F0B909] font-light mt-3'>
                            หากรับโบนัส กรุณาโยกเงินทั้งหมดไปที่กระเป๋าตังค์หลัก ก่อนการกดถอนเงินทุกครั้ง
                        </div>

                        <div class='flex gap-3 mt-4'>
                            <button
                                @click="closeModal"
                                class='bg-gray-4 px-5 py-2 text-white rounded-full w-full'>
                                ยกเลิก
                            </button>
                            <button
                                class='bg-gradient-to-b from-gold-1 to-gold-2 px-5 py-2 text-white rounded-full w-full'>
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
    name: 'withdraw',
    mixins: [global],
    data() {
        return {
            showModal: false,
            wallet: 950,
            bank_number: '485-331-3463',
            bank_account_name: 'สายฟ้า โยธา',
            price: ''
        }
    },

    watch: {
        price: function(newValue) {
            const result = newValue.replace(/\D/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            this.$nextTick(() => this.price = result)
        }
    },

    methods: {
        closeModal() {
            this.$emit('modal', this.showModal)
        }
    }
}
</script>

<style lang='scss' scoped>
.overflow {
    overflow: auto;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: #1D2936;
        border-radius: 20px;
    }
}
</style>
