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

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'withdraw',
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
