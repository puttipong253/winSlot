<template>
    <div
        class='absolute inset-0 z-40 bg-opacity-[0.8] bg-black transition duration-150 ease-in-out'>
        <div
            class='animate-fade-ping fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center'>
            <div class='relative mx-auto'>
                <div class='bg-[#1E1E1E] min-h-full max-h-[40rem] overflow md:w-[32rem] rounded-lg px-7 py-4'>
                    <div class='flex justify-between items-center mb-4'>
                        <div class='text-2xl flex items-center'>
                            <span class='text-white'>
                                โปรโมชัน
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
                        <div>
                            <img src='~/assets/image/promotion_modal.png' alt=''>
                        </div>
                        <div class='text-xl mt-3 text-white'>
                            VIP เครดิตหมดกดรับที่นี
                        </div>
                        <div class='text-sm mt-2 text-[#FFCF5A] font-light'>
                            *** การยกเลิกโบนัส หากยอดเงินฝากรวมโบนัสต่ำกว่า 10% สมาชิกต้องกดยกเลิกโบนัสก่อนทำรายการฝากครั้งต่อไป ไม่กดเงินฝากจะติดเทิร์น ***
                        </div>
                        <div class='text-sm text-white font-light mt-2 font-light'>
                            ฟรีโบนัส 30% เมื่อฝากบิลแรกของวัน ฝากขั้นต่ำ 100 บาททำยอดเทริน 5 เท่า ถอนได้ แต่ถอนได้ไม่เกิน 15 เท่าของยอดฝาก กดรับโบนัสได้ วันละ1 ครั้ง
                        </div>

                        <button class='w-full mt-3 rounded-full bg-gradient-to-b from-gold-1 to-gold-2 text-sm text-white py-2'>
                            รับโปรโมชั่น
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'event_modal',
    data() {
        return {
            showModal: false
        }
    },

    mounted() {
        document.body.classList.add('overflowHidden')
    },

    methods: {
        closeModal() {
            this.$emit('modal', this.showModal)
            document.body.classList.remove('overflowHidden')
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
