<template>
    <div class='py-7'>
        <div class='w-full flex justify-center'>
            <button class='flex items-center bg-gradient-to-b from-gold-1 to-gold-2 py-2 px-10 rounded-full font-bold'>
                <svg-icon
                    name='icon-park-outline_check-in'
                    width='25'
                    height='25'
                />
                <span class='text-white ml-2'>CHECK-IN</span>
            </button>
        </div>

        <div class='mt-10'>
            <div class='grid grid-cols-6 gap-5 w-full'>
                <div v-for='(items,index) in dayPerMonth' :key='index' class=''>
                    <div class='text-white text-center border-[3px] border-white rounded-md cursor-pointer py-5'>
                        <div class='text-2xl font-bold'>
                            DAY
                        </div>
                        <div class='text-5xl mt-3 font-black'>
                            {{ index + 1 }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'check-in',
    layout: 'home',
    data() {
        return {
            dayPerMonth: 0
        }
    },

    mounted() {
        this.getDate()
    },

    methods: {
        async getDate() {
            // const dt = new Date()
            // const month = dt.getMonth() + 1
            // const year = dt.getFullYear()
            // const daysInMonth = new Date(year, month, 0).getDate()
            // this.dayPerMonth = Number(daysInMonth)
            await this.$axios.$post('/page/checkin/get-checkin').then(res => {
                console.log(res)
            })
        }
    }
}
</script>

<style scoped>

</style>
