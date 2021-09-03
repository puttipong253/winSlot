<template>
    <div>
        <div class='text-xl text-white mb-1'>
            บัญชีธนาคารของคุณ
        </div>
        <div class='text-sm text-white font-light'>
            กรุณากรอกบัญชีธนาคารของท่านด้วยข้อมูลจริง เพื่อใช้ในการฝากและถอนเงิน
        </div>
        <div class='mt-4'>
            <ValidationObserver ref='form' v-slot='{ handleSubmit }'>
                <form @submit.prevent='handleSubmit(onSubmit)'>
                    <div class='grid grid-cols-2 gap-x-3'>
                        <div class='relative mb-4'>
                            <ValidationProvider
                                name='ชื่อจริง'
                                rules='required'
                                v-slot='{ errors }'
                            >
                                <input type='text'
                                       class='w-full bg-gray-1 text-white font-light py-2 pl-12 rounded-md focus:outline-none'
                                       v-model='first_name'
                                       placeholder='ชื่อจริง'>
                                <div class='absolute top-2 left-3'>
                                    <svg-icon
                                        name='carbon_user-avatar'
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
                                name='นามสกุล'
                                rules='required'
                                v-slot='{ errors }'
                            >
                                <input type='text'
                                       class='w-full bg-gray-1 text-white font-light py-2 pl-12 rounded-md focus:outline-none'
                                       v-model='last_name'
                                       placeholder='นามสกุล'>
                                <div class='absolute top-2 left-3'>
                                    <svg-icon
                                        name='uil_house-user'
                                        width='25'
                                        height='25'
                                    />
                                </div>
                                <small class='text-[red] text-xs'>
                                    {{ errors[0] }}
                                </small>
                            </ValidationProvider>
                        </div>
                    </div>

                    <div class='relative mb-4'>
                        <ValidationProvider
                            name='ธนารคาร'
                            rules='required'
                            v-slot='{ errors }'
                        >
                            <v-select :options='options'
                                      placeholder='เลือกธนาคารของคุณ'
                                      v-model='bank'
                                      label='bank_name'
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

                    <div class='relative mb-4'>
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

                    <div class='relative mb-4'>
                        <ValidationProvider
                            name='รหัสผู้แนะนำ'
                            rules=''
                            v-slot='{ errors }'
                        >
                            <input type='text'
                                   class='w-full bg-gray-1 text-white font-light py-2 pl-12 rounded-md focus:outline-none'
                                   v-model='refer_id'
                                   placeholder='รหัสผู้แนะนำ'>
                            <div class='absolute top-2 left-3'>
                                <svg-icon
                                    name='ant-design_user-add-outlined'
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
                        class='w-full text-white text-xl bg-gradient-to-b from-gold-1 to-gold-2 px-7 py-2 rounded-full'>
                        ยืนยัน
                    </button>
                </form>
            </ValidationObserver>
        </div>
    </div>
</template>

<script>
export default {
    name: 'step3',
    data() {
        return {
            last_name: '',
            first_name: '',
            bank: '',
            bank_number: '',
            refer_id: '',
            step: 3

        }
    },

    mounted() {
        console.log('test')
    },

    computed: {
        options() {
            return this.$store.state.bank

        }
    },

    methods: {
        onSubmit() {
            this.$emit('handleStep3', {
                step: this.step + 1,
                last_name: this.last_name,
                first_name: this.first_name,
                bank: this.bank,
                bank_number: this.bank_number,
                refer_id: this.refer_id
            })
        }
    }
}
</script>

<style scoped>

</style>
