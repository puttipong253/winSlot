<template>
    <div class='bg-opacity-[0.95] bg-background min-h-screen max-h-full relative'>
        <img src='../assets/image/money.png' alt='' class='opacity-[0.8] h-screen absolute z1'>
        <div class='container mx-auto px-2'>
            <header class='py-2 md:py-3 px-3 md:px-7 rounded-b-xl'>
                <div class='flex justify-between items-center'>
                    <div class='cursor-pointer'>
                        <img src='../assets/image/logo.png' alt='' class='w-[60px] h-[60px] md:w-[75px] md:h-[75px]'>
                    </div>
                    <div class='flex items-center text-base text-white'>
                        <div class='mr-7 cursor-pointer hidden md:block'>
                            ข่าวสาร
                        </div>
                        <div class='mr-7 cursor-pointer hidden md:block'>
                            โปรโมชั่น
                        </div>
                        <div class='mr-7 cursor-pointer hidden md:block'>
                            ติดต่อเรา
                        </div>
                        <button
                            class='bg-gradient-to-b font-light from-gold-1 to-gold-2 px-7 py-1 rounded-full'>
                            เข้าสู่ระบบ
                        </button>
                    </div>
                </div>
                <div class='flex justify-center items-center text-sm text-white mt-2'>
                    <div class='mr-7 cursor-pointer md:hidden'>
                        ข่าวสาร
                    </div>
                    <div class='mr-7 cursor-pointer md:hidden'>
                        โปรโมชั่น
                    </div>
                    <div class='cursor-pointer md:hidden'>
                        ติดต่อเรา
                    </div>
                </div>
            </header>

            <div class='py-2 md:py-5 xl:py-9'>
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
    name: 'default',
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
