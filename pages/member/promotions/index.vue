<template>
    <div>
        <div v-if='isLoading'>
            <Loading />
        </div>

        <div class='text-white text-2xl xl:text-4xl mt-5 md:mt-0 mb-2 md:mb-4'>
            โปรโมชั่น ของเรา
        </div>

        <div class='text-white font-light mb-3 md:mb-2 text-sm md:text-base'>
            ร่วมสนุกกับกิจกรรมมากมาย พร้อมลุ้นรับรางวัลพิเศษ
        </div>

        <div class='flex justify-end relative'>
            <input type='text' class='py-2 focus:outline-none rounded-md pl-3 text-sm w-full md:w-[20rem] h-full'
                   placeholder='รหัสโปรโมชั่น'>
            <button
                class='absolute right-0 top-0 bg-gradient-to-b from-gold-1 to-gold-2 px-5 h-full text-xs text-white rounded-r-md'>
                ค้นหา
            </button>
        </div>

        <div class='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 mt-4'>
            <div v-for='(items,index) in events' :key='index' class='bg-gray-3 rounded-md'>
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
                    <button @click='showModal = true'
                            class='w-full mt-3 rounded-full bg-gradient-to-b from-gold-1 to-gold-2 text-xs md:text-sm text-white py-2'>
                        รับโปรโมชั่น
                    </button>
                </div>
            </div>
        </div>
        <div v-if='showModal'>
            <PromotionModal @modal='setModal' />
        </div>
    </div>
</template>

<script>
import PromotionModal from '~/components/memberModal/promotion'

export default {
    name: 'member_promotions',
    layout: 'home',
    components: { PromotionModal },
    data() {
        return {
            isLoading: true,
            showModal: false,
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
                }
            ]
        }
    },

    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 1000)
    },

    methods: {
        setModal(value) {
            this.showModal = value
        }
    }
}
</script>

<style scoped>

</style>
