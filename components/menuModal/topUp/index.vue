<template>
    <div
        class='absolute inset-0 z2 bg-opacity-[0.8] bg-black transition duration-150 ease-in-out'>
        <div
            class='animate-fade-ping fixed overflow-x-hidden overflow-y-hidden inset-0 flex justify-center items-center'>
            <div class='relative mx-auto'>
                <div class='bg-[#1E1E1E] min-h-full max-h-[35rem] w-[22rem] overflow md:w-[32rem] rounded-lg px-7 py-4'>
                    <div class='flex justify-between items-center mb-4'>
                        <div class='text-xl md:text-2xl flex items-center'>
                            <span class='text-white'>
                                บัญชีสำหรับเติมเงิน
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
                        <div class='w-full bg-gradient-to-b from-[#532882] to-[#2F0062] rounded-lg'>
                            <div class='flex py-2 md:py-5 px-3'>
                                <div class='hidden md:block'>
                                    <img src='~/assets/image/scb.png' alt='' class='w-[180px]'>
                                </div>

                                <div class='text-white md:ml-3 w-full'>
                                    <div class='flex items-center'>
                                        <div class='md:hidden'>
                                            <img src='~/assets/image/scb.png' alt='' class='w-[90px] md:w-[180px]'>
                                        </div>

                                        <div class='ml-2'>
                                            <div class='text-xl md:text-2xl'>
                                                ธนาคารไทยพาณิชย์
                                            </div>
                                            <div class='text-xs font-light'>
                                                Siam Commerciak Bank
                                            </div>
                                        </div>
                                    </div>

                                    <div class='flex justify-between mt-2 md:mt-5'>
                                        <div class='font-light'>
                                            <div class='mb-1'>
                                                สายฟ้า โยธา
                                            </div>
                                            <div>
                                                {{ bank_number }}
                                            </div>
                                        </div>
                                        <div class='flex items-end '>
                                            <button
                                                @click='copyBankNumber'
                                                class='flex bg-gradient-to-b from-gold-1 to-gold-2 px-5 py-2 rounded-md'>
                                                <svg-icon
                                                    name='feather_save'
                                                    width='16'
                                                    height='16'
                                                />
                                                <span class='text-xs ml-1'>คัดลอก</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class='w-full bg-gradient-to-b from-[#f47f1f] to-[#f26320] rounded-lg mt-4'>
                            <div class='flex py-2 md:py-5 px-3'>
                                <div class='hidden md:block'>
                                    <img src='~/assets/image/qrcode.png' alt='' class='w-[180px]'>
                                </div>

                                <div class='text-white md:ml-3 w-full'>
                                    <div class='flex items-center'>
                                        <div class='md:hidden'>
                                            <img src='~/assets/image/qrcode.png' alt='' class='w-[90px] md:w-[180px]'>
                                        </div>

                                        <div class='ml-2'>
                                            <div class='text-xl md:text-2xl'>
                                                True Wallet
                                            </div>
                                            <div class='text-xs font-light'>
                                                Wallet by Truemoney Wallet
                                            </div>
                                        </div>
                                    </div>

                                    <div class='flex justify-between mt-2 md:mt-5'>
                                        <div class='font-light'>
                                            <div class='mb-1'>
                                                สายฟ้า โยธา
                                            </div>
                                            <div>
                                                {{ wallet_number }}
                                            </div>
                                        </div>
                                        <div class='flex items-end '>
                                            <button
                                                @click='copyWalletNumber'
                                                class='flex bg-gradient-to-b from-gold-1 to-gold-2 px-5 py-2 rounded-md'>
                                                <svg-icon
                                                    name='feather_save'
                                                    width='16'
                                                    height='16'
                                                />
                                                <span class='text-xs ml-1'>คัดลอก</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <notifications group='foo' position='bottom right' />

                        <button class='w-full font-light mt-3 text-sm md:text-base text-white bg-[#53A451] py-2 rounded-full'>
                            รับการแจ้งเตือน ฝาก-ถอน ผ่าน LINE
                        </button>

                        <button @click='reportToggle'
                                class='w-full font-light mt-3 text-sm md:text-base text-white bg-[#FF4359] py-2 rounded-full'>
                            หากเงินไม่เข้าภายใน 5 นาที กดแจ้งที่นี่
                        </button>

                        <div v-if='report' class='mt-5 bg-[#242424] rounded-lg p-4'>
                            <Report @modal='setModal'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Report from '../report'
export default {
    name: 'topUp',
    components: { Report },
    data() {
        return {
            price: '',
            showModal: false,
            bank_number: '485-331-3463',
            wallet_number: '485-331-3463',
            report: false,
            imageFile: ''
        }
    },

    watch: {
        price: function(newValue) {
            const result = newValue.replace(/\D/g, '')
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            this.$nextTick(() => this.price = result)
        }
    },

    methods: {
        closeModal() {
            this.$emit('modal', this.showModal)
            document.body.classList.remove('overflowHidden')
        },

        setModal(value) {
            this.report = value
        },

        copyBankNumber() {
            this.$copyText(this.bank_number).then((e) => {
                this.$notify({
                    group: 'foo',
                    type: 'success',
                    text: 'คัดลอกเรียบร้อย !',
                    duration: 1000
                });
            }).catch(e => {
                this.$notify({
                    group: 'foo',
                    type: 'error',
                    text: 'คัดลอกล้มเหลว !',
                    duration: 1000
                });
            })
        },

        reportToggle() {
            this.report = !this.report
        },

        copyWalletNumber() {
            this.$copyText(this.bank_number).then((e) => {
                this.$notify({
                    group: 'foo',
                    type: 'success',
                    text: 'คัดลอกเรียบร้อย !',
                    duration: 1000
                });
            }).catch(e => {
                this.$notify({
                    group: 'foo',
                    type: 'error',
                    text: 'คัดลอกล้มเหลว !',
                    duration: 1000
                });
            })
        },

        onFileChange(e) {
            if (e.target.files[0] !== undefined) {
                this.imageFile = e.target.files[0]
                console.log(e.target.files[0])
            }
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
