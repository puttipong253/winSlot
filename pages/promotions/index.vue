<template>
    <div>
        <div v-if='isLoading'>
            <Loading />
        </div>
        <div class='text-white text-2xl xl:text-4xl mt-5 md:mt-0 mb-2 md:mb-4'>
            โปรโมชั่น ของเรา
        </div>
        <div class='text-white font-light mb-2 text-sm md:text-base'>
            ร่วมสนุกกับกิจกรรมมากมาย พร้อมลุ้นรับรางวัลพิเศษ
        </div>

        <div class='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 mt-4'>
            <div v-for='(items,index) in events' :key='index' class='bg-gray-3 rounded-md cursor-pointer'>
                <div class='h-[8rem] md:h-[11rem] lg:h-[14rem]'>
                    <img :src='items.image' alt='' class='w-full h-full'>
                </div>
                <div class='py-1 px-1 md:py-5 md:px-4'>
                    <div class='text-sm md:text-base text-white '>
                        <div class='mb-2'>
                            {{ items.title }}
                        </div>
                        <div class='text-xs md:text-sm font-light'>
                            {{ items.content }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'promotions',
    layout: 'default',
    data() {
        return {
            isLoading: true,
            events: [
                {
                    image: require('~/assets/image/promotion-1.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/promotion-2.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/promotion-3.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/promotion-1.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/promotion-2.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/promotion-3.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/promotion-1.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/promotion-2.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/promotion-3.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/promotion-1.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/promotion-2.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/promotion-3.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
            ]
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
