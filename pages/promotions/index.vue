<template>
    <div>
        <div class='text-white text-2xl xl:text-4xl mt-5 md:mt-0 mb-2 md:mb-4'>
            โปรโมชัน ของเรา
        </div>
        <div class='text-white font-light mb-2 text-sm md:text-base'>
            ร่วมสนุกกับกิจกรรมมากมาย พร้อมลุ้นรับรางวัลพิเศษ
        </div>

        <div class='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 md:mt-10'>
            <div v-for='(items,index) in events' :key='index' class='bg-gray-3 rounded-md p-3 '>
                <div class=''>
                    <div class='h-[8rem] md:h-[11rem] lg:h-[16rem]'>
                        <img :src='items.image' alt='' class='w-full h-full'>
                    </div>

                    <div class='py-1 px-0 md:py-5 md:px-2 text-white '>
                        <div class='mb-4'>
                            {{items.title}}
                        </div>
                        <div class='text-sm font-light'>
                            {{items.content}}
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
    }
}
</script>

<style scoped>

</style>
