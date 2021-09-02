<template>
    <div
        class='absolute inset-0 z-40 bg-opacity-[0.8] bg-black transition duration-150 ease-in-out'>
        <div
            class='animate-fade-ping fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center'>
            <div class='relative mx-auto'>
                <div class='bg-[#1E1E1E] w-full md:w-[30rem] rounded-lg px-7 py-4'>
                    <div class='flex justify-between items-center mb-6'>
                        <div class='text-2xl flex items-center'>
                            <span class='text-white'>
                                ติดต่อแอดมิน
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

                    <div class='bg-white rounded-lg'>
                        <div class='text-xl text-[#00BA13] font-bold px-5 py-2 border-b border-black'>
                            LINE
                        </div>
                        <div class='py-12'>
                            <div class='flex justify-center'>
                                <img src='~/assets/image/line.png' alt=''>
                            </div>
                            <div class='text-lg text-center mt-8 font-semibold'>เพิ่มเพื่อนใน LINE ด้วยคิวอาร์โค้ด</div>
                            <div class='text-center px-10 mt-3'>
                                เปิดแอพ LINE > เลือกแท็บเพื่อน > แตะไอคอนเพิ่มเพื่อนที่มุมขวาบน
                                แล้วเลือก "คิวอาร์โค้ด" จากนั้นจึงสแกนคิวอาร์โค้ด
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
    name: 'contact',
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

<style scoped>

</style>
