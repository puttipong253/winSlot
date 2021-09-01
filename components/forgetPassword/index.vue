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
                                    class='text-white'>เข้าสู่ระบบ</span>
                            </div>
                            <div @click='closeModal' class='cursor-pointer'>
                                <svg-icon
                                    name='carbon_close-filled'
                                    width='25'
                                    height='25'
                                />
                            </div>
                        </div>

                        <div v-if='step === 1'>
                            <div class='text-xl text-white mb-1'>
                                ลืมรหัสผ่าน
                            </div>
                            <div class='text-sm text-white font-light'>
                                กรุณากรอกข้อมูลที่ท่านเคยลงทะเบียนไว้เพื่อรับรหัสผ่าน
                            </div>
                            <div class='mt-4'>
                                <ValidationObserver ref='form' v-slot='{ handleSubmit }'>
                                    <form @submit.prevent='handleSubmit(onSubmitStep1)'>
                                        <div class='relative mb-4'>
                                            <ValidationProvider
                                                name='เบอร์โทรศัพท์'
                                                rules='required'
                                                v-slot='{ errors }'
                                            >
                                                <input type='number'
                                                       class='w-full bg-gray-1 text-white font-light py-2 pl-12 rounded-md focus:outline-none'
                                                       v-model='tel'
                                                       placeholder='เบอร์โทรศัพท์'>
                                                <div class='absolute top-2 left-3'>
                                                    <svg-icon
                                                        name='fluent_phone-checkmark-20-regular'
                                                        width='25'
                                                        height='25'
                                                    />
                                                </div>
                                                <small class='text-[red] text-xs'>
                                                    {{ errors[0] }}
                                                </small>
                                            </ValidationProvider>
                                        </div>

                                        <div class='relative mb-4'>
                                            <ValidationProvider
                                                name='ธนารคาร'
                                                rules='required'
                                                v-slot='{ errors }'
                                            >
                                                <v-select :options='options' placeholder='เลือกธนาคารของคุณ'
                                                          v-model='bank'
                                                          class='style-chooser pl-[38px] bg-gray-1 text-white rounded-md py-[4px]'></v-select>
                                                <div class='absolute top-2 left-3'>
                                                    <svg-icon
                                                        name='fluent_building-bank-link-48-regular'
                                                        width='25'
                                                        height='25'
                                                    />
                                                </div>
                                                <small class='text-[red] text-xs'>
                                                    {{ errors[0] }}
                                                </small>
                                            </ValidationProvider>
                                        </div>

                                        <div class='relative mb-7'>
                                            <ValidationProvider
                                                name='เลขที่บัญชี'
                                                rules='required'
                                                v-slot='{ errors }'
                                            >
                                                <input type='number'
                                                       class='w-full bg-gray-1 text-white font-light py-2 pl-12 rounded-md focus:outline-none'
                                                       v-model='bank_number'
                                                       placeholder='เลขที่บัญชี'>
                                                <div class='absolute top-2 left-3'>
                                                    <svg-icon
                                                        name='icons8_bank-card'
                                                        width='25'
                                                        height='25'
                                                    />
                                                </div>
                                                <small class='text-[red] text-xs'>
                                                    {{ errors[0] }}
                                                </small>
                                            </ValidationProvider>
                                        </div>

                                        <button
                                            type='submit'
                                            class='w-full text-white text-xl bg-gradient-to-b from-gold-1 to-gold-2 px-7 py-2 rounded-full'>
                                            ยืนยัน
                                        </button>
                                    </form>
                                </ValidationObserver>
                            </div>
                        </div>

                        <div v-if='step === 2'>
                            <ChangePassword />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ChangePassword from '../changePassword'

export default {
    name: 'forgetPassword',
    components: { ChangePassword },
    data() {
        return {
            toggleModal: true,
            step: 1,
            tel: '',
            bank: '',
            bank_number: '',
            password: '',
            confirm_password: '',
            options: [
                'ธนาคารกรุงไทย',
                'ธนาคารกสิกรไทย',
                'ธนาคารกรุงเทย'
            ]
        }
    },
    methods: {
        onSubmitStep1() {
            try {
                if (this.tel !== '') {
                    this.step = 2
                }
            } catch (e) {
                return e
            }
        },

        closeModal() {
            this.toggleModal = !this.toggleModal
            this.$emit('modal', this.toggleModal)
            document.body.classList.remove('overflowHidden')
        },

        onSubmit() {

        }
    }

}
</script>

<style lang='scss'>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.style-chooser .vs__search::placeholder {
    color: #9b9ba3;
}

.style-chooser .vs__dropdown-toggle {
    border: none;
}

.style-chooser .vs__selected {
    color: white;
}

.style-chooser .vs__open-indicator {
    fill: #9b9ba3;
}

.style-chooser .vs__actions {
    padding: 4px 12px 0 3px
}

.style-chooser .vs__clear {
    fill: #9b9ba3;
}

</style>
