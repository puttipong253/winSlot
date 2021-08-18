<template>
    <div class='bg-opacity-[0.95] bg-background min-h-screen max-h-full relative'>
        <img src='../assets/image/money.png' alt='' class='opacity-[0.8] h-screen absolute z1'>
        <div class='container mx-auto px-2'>
            <header class='bg-gradient-to-b from-gold-1 to-gold-2 py-2 md:py-3 px-3 md:px-7 rounded-b-xl'>
                <div class='flex justify-between items-center'>
                    <div class='cursor-pointer'>
                        <svg-icon
                            name='bx_bxs-user-circle'
                            width='32'
                            height='32'
                        />
                    </div>
                    <div class='text-xl lg:text-2xl text-white'>
                        {{ baseName() }}
                    </div>
                    <div class='cursor-pointer'>
                        <svg-icon
                            name='ls_logout'
                            width='25'
                            height='25'
                        />
                    </div>
                </div>
            </header>

            <div class='py-6 md:py-9'>
                <Nuxt />
            </div>

<!--            <footer class='text-white fixed bottom-0'>-->
<!--                footer-->
<!--            </footer>-->
        </div>
    </div>
</template>

<script>

export default {
    name: 'home',
    data() {
        return {}
    },

    methods: {
        baseName() {
            return process.env.baseName
        }
    }
}
</script>

<style lang='scss' scoped>
.z1 {
    z-index: -1;
}
</style>
