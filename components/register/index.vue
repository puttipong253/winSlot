<template>
    <div>
        <div v-if='toggleModal'
             class='absolute inset-0 z-40 bg-opacity-[0.8] bg-black transition duration-150 ease-in-out'>
            <div
                class='animate-fade-ping fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center'>
                <div class='relative mx-auto'>
                    <div class='bg-[#1E1E1E] w-full md:w-[30rem] rounded-lg px-7 py-4'>
                        <div class='flex justify-between items-center mb-6'>
                            <div class='text-2xl flex items-center'>
                                <!--                                        <div @click='closeModal' class='cursor-pointer'>-->
                                <!--                                            <svg-icon-->
                                <!--                                                name='eva_arrow-back-fill'-->
                                <!--                                                width='35'-->
                                <!--                                                height='35'-->
                                <!--                                            />-->
                                <!--                                        </div>-->
                                <span
                                    class='text-white'>สมัครสมาชิก</span>
                            </div>
                            <div @click='closeModal' class='cursor-pointer'>
                                <svg-icon
                                    name='carbon_close-filled'
                                    width='25'
                                    height='25'
                                />
                            </div>
                        </div>
                        <div class='mb-[4.5rem]'>
                            <div class='flex justify-between'>
                                <div class='text-white bg-[#1E1E1E] px-2 font-light'>
                                    <div class='flex justify-center'>
                                        <div class='p-2 rounded-full'
                                             :class="step <= 2 ? 'bg-gradient-to-b from-gold-1 to-gold-2' : 'bg-[#A0A0A0]'">
                                            <svg-icon
                                                name='emojione-monotone_mobile-phone'
                                                width='25'
                                                height='25'
                                            />
                                        </div>
                                    </div>
                                    <span class='text-xs'>ยืนยันเบอร์โทร</span>
                                </div>

                                <div class='text-white bg-[#1E1E1E] px-2 font-light'>
                                    <div class='flex justify-center '>
                                        <div class='p-2 rounded-full'
                                             :class="step === 3 ? 'bg-gradient-to-b from-gold-1 to-gold-2' : 'bg-[#A0A0A0]'">
                                            <svg-icon
                                                name='ri_bank-card-fill'
                                                width='25'
                                                height='25'
                                            />
                                        </div>

                                    </div>
                                    <span class='text-xs'>บัญชีธนาคาร</span>
                                </div>

                                <div class='text-white bg-[#1E1E1E] px-2 font-light'>
                                    <div class='flex justify-center'>
                                        <div class='p-2 rounded-full'
                                             :class="step === 4 ? 'bg-gradient-to-b from-gold-1 to-gold-2' : 'bg-[#A0A0A0]'">
                                            <svg-icon
                                                name='ri_lock-password-fill'
                                                width='25'
                                                height='25'
                                            />
                                        </div>
                                    </div>
                                    <span class='text-xs'>ตั้งรหัสผ่าน</span>
                                </div>
                            </div>
                            <div class='border-b h-[5px] border-white w-full -mt-12 z1'></div>
                        </div>

                        <div v-if='step === 1'>
                            <FormStep1 @handleStep1='onSubmitStep1' />
                        </div>

                        <div v-if='step === 2'>
                            <FormStep2 @handleStep2='onSubmitStep2'/>
                        </div>

                        <div v-if='step === 3'>
                            <FormStep3 @handleStep3='onSubmitStep3'/>
                        </div>

                        <div v-if='step === 4'>
                            <FormStep4 @handleStep3='onSubmitStep4'/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormStep1 from './formStep1'
import FormStep2 from './formStep2'
import FormStep3 from './formStep3'
import FormStep4 from './formStep4'

export default {
    name: 'register',
    components: {
        FormStep1,
        FormStep2,
        FormStep3,
        FormStep4
    },
    data() {
        return {
            step: 1,
            toggleModal: true,
        }
    },
    methods: {
        closeModal() {
            this.toggleModal = !this.toggleModal
            this.$emit('modal', this.toggleModal)
        },

        onSubmitStep1(value) {
            this.step = value
        },

        onSubmitStep2(value) {
            this.step = value
        },

        onSubmitStep3(value) {
            this.step = value
        },

        onSubmitStep4(value) {
            this.step = value
        },
    }
}
</script>

<style lang='scss' scoped>
.z1 {
    z-index: -1;
}
</style>
