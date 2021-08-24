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
                            <div class='flex py-5 px-3'>
                                <img src='~/assets/image/scb.png' alt='' width='120' class=''>
                                <div class='text-white ml-3 w-full'>
                                    <div class='text-2xl'>
                                        ธนาคารไทยพาณิชย์
                                    </div>
                                    <div class='text-xs font-light'>
                                        Siam Commerciak Bank
                                    </div>
                                    <div class='flex justify-between mt-5'>
                                        <div class='font-light'>
                                            <div class='mb-1'>
                                                สายฟ้า โยธา
                                            </div>
                                            <div>
                                                485-331-3463
                                            </div>
                                        </div>
                                        <div class='flex items-end '>
                                            <button class='flex bg-gradient-to-b from-gold-1 to-gold-2 px-5 py-2 rounded-md'>
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
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'topUp',
    data() {
        return {
            showModal: false
        }
    },

    methods: {
        closeModal() {
            this.$emit('modal', this.showModal)
        }
    }
}
</script>

<style scoped>

</style>
