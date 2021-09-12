<template>
    <div
        class='absolute inset-0 z-40 bg-opacity-[0.8] bg-black transition duration-150 ease-in-out'>
        <div
            class='animate-fade-ping fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center'>
            <div class='relative mx-auto'>
                <div class='bg-[#1E1E1E] min-h-full max-h-[35rem] w-[22rem] overflow md:w-[32rem] rounded-lg px-7 py-4'>
                    <div class='flex justify-between items-center mb-4'>
                        <div class='text-xl md:text-2xl flex items-center'>
                            <span class='text-white'>
                                คืนยอดเสีย
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

                    <div class='mb-4'>
                        <div class='border border-gold-2 rounded-lg p-5 bg-[#FFCF5A] bg-opacity-10 w-full'>
                            <div class='text-xl text-white text-center'>
                                กติกาการรับยอดเสียคืน
                            </div>

                            <div class='text-white text-xs font-extralight py-3'>
                                <div class='pb-3'>
                                    - ท่านสามารถกดรับ ยอดเสียคืน ได้ในช่วงเวลา 00.00 - 23.59 น. (รับได้ 1 ครั้งต่อ 1
                                    วัน) บาท
                                </div>
                                <div class='pb-3'>
                                    - ระบบจะคำนวณทุกยอดเสียของท่านอัตโนมัติ
                                </div>
                                <div class='pb-3'>
                                    - สมาชิกจะต้องมียอดเครดิตคงเหลือในระบบต่ำกว่า 10 บาท จึงจะสามารถกดรับยอดเสียคืนได้
                                </div>
                                <div class='pb-3'>
                                    - รับยอดเสียคืนสามารถแจ้งถอนได้แค่เพียง 100 บาทเท่านั้น
                                </div>
                                <div class=''>
                                    - วิธีการคำนวณ ยอดเสีย = ยอดฝากรวมของวัน - ยอดถอนรวมของวัน - เครดิตคงเหลือปัจจุบัน
                                </div>
                            </div>
                            <div class='text-base text-gold-2'>
                                *กรุณากด 'ปิดแอพพลิเคชันเกม' เพื่อตรวจสอบยอดเงินว่าตรงกับภายในเกมหรือไม่
                            </div>
                        </div>
                    </div>

                    <div class='rounded-lg px-5 py-3 w-full bg-[#242424] mb-4'>
                        <div class='py-2 border-b border-white flex justify-between text-lg text-white font-light'>
                            <span> เครดิตคงเหลือปัจจุบัน: </span>
                            <span>  0.00 บาท </span>
                        </div>

                        <div class='py-2 border-b border-white flex justify-between text-lg text-white font-light'>
                            <span> จำนวนครั้งที่ฝาก: </span>
                            <span> 0 ครั้ง </span>
                        </div>

                        <div class='py-2 border-b border-white flex justify-between text-lg text-white font-light'>
                            <span> จำนวนที่ฝากเยอะสุด: </span>
                            <span> 0.00 บาท </span>
                        </div>

                        <div class='py-2 border-b border-white flex justify-between text-lg text-white font-light'>
                            <span> จำนวนที่ฝากน้อยสุด: </span>
                            <span> 0.00 บาท </span>
                        </div>
                    </div>

                    <button class='text-white w-full bg-[#A0A0A0] rounded-full py-2 text-sm md:text-base'>
                        จำนวนรายการฝาก ยังไม่ถึงเงื่อนไขกดรับ
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'result',
    data() {
        return {
            showModal: false
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
