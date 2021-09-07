<template>
    <div>
        <div v-if='isLoading'>
            <Loading />
        </div>

        <div v-else class='py-7'>
            <div class='w-full flex justify-center'>
                <button @click='getDate'
                        class='flex items-center bg-gradient-to-b from-gold-1 to-gold-2 py-2 px-10 rounded-full font-bold'>
                    <svg-icon
                        name='icon-park-outline_check-in'
                        width='25'
                        height='25'
                    />
                    <span class='text-white ml-2'>CHECK-IN</span>
                </button>
                <div class='text-white'>
                    {{ this.$store.state.token }}
                </div>
            </div>

            <div class='mt-10'>
                <div class='grid grid-cols-4 md:grid-cols-7 gap-x-2 gap-y-2 md:gap-y-4 lg:gap-y-6 xl:gap-y-5 w-full xl:px-10'>
                    <div v-for='(items,index) in data' :key='index' class=''>
                        <div class='flex justify-center border-white cursor-pointer'>
                            <img :src='items.getImage' alt='' class='md:w-[90px] lg:w-[118px] xl:w-[155px]'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import isAuth from '~/middleware/isAuth'
import Loading from '../../../components/loading'

export default {
    name: 'check-in',
    components: { Loading },
    layout: 'home',
    data() {
        return {
            data: [],
            isLoading: false
        }
    },

    mounted() {
        this.getDate()
        document.body.classList.remove('overflowHidden')
    },

    methods: {
        async getDate() {
            this.isLoading = true
            await this.$axios.$get('/page/checkin/get-checkin', { headers: isAuth() }).then(res => {
                this.data = res.data.listDays
                this.isLoading = false
            })
        }
    }
}
</script>

<style lang='scss' scoped>

</style>
