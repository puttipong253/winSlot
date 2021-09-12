<template>
    <div class='text-white'>
        <div v-if='isLoading'>
            <Loading />
        </div>
        <div>
            สร้างรายได้
        </div>

    </div>
</template>

<script>
export default {
    name: 'income',
    layout: 'home',
    data() {
        return {
            isLoading: true
        }
    },

    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 1000)
    },
}
</script>

<style scoped>

</style>
