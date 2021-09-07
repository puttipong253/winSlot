<template>
    <div
        class='absolute inset-0 z-40 bg-opacity-[0.8] bg-black transition duration-150 ease-in-out'>
        <div
            class='animate-fade-ping fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center'>
            <div class='relative mx-auto'>
                <div class='bg-[#1E1E1E] min-h-full max-h-[35rem] overflow md:w-[32rem] rounded-lg px-5 py-4'>
                    <div class='flex justify-between items-center mb-6'>
                        <div class='text-2xl flex items-center'>
                            <span class='text-white'>
                                เล่นเกมส์
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
                        <div class='w-full h-full relative '>
                            <div class=''>
                                <img src='~/assets/image/gameBackground.png' alt='' class='h-full'>
                            </div>

                            <div class='absolute top-0 py-3 px-5 md:py-5 md:px-8 border w-full h-full'>
                                <div>
                                    <div class='text-white text-2xl'>
                                        JOCKER GAMING
                                    </div>
                                    <div class='text-white text-xl mt-4 '>
                                        Username : 3435552234
                                    </div>
                                    <div class='text-white text-xl mt-4 '>
                                        Password : 3435552234
                                    </div>
                                </div>
                                <div class='flex'>
                                    ...
                                </div>
                            </div>
                        </div>

                        <div class='flex'>
                            <div class=''>
                                <svg-icon
                                    name='circle'
                                    width='25'
                                    height='25'
                                />
                            </div>
                            <div class='ml-2 cursor-pointer'>
                                <span class='text-gold-2 underline'>รีเซ็ตรหัสผ่าน</span>
                                <span class='text-white'>(เมื่อเข้าเล่นเกมส์ไม่ได้)</span>
                            </div>
                        </div>

                        <div class='mt-4 px-2 md:px-4'>
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
export default {
    name: 'playGame',
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
