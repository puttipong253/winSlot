<template>
    <div>
        <div class='text-white text-2xl xl:text-4xl mt-5 md:mt-0 mb-2 md:mb-4'>
            กิจกรรม ของเรา
        </div>
        <div class='text-white font-light mb-2 text-sm md:text-base'>
            ร่วมสนุกกับกิจกรรมมากมาย พร้อมลุ้นรับรางวัลพิเศษ
        </div>

        <div class='grid grid-cols-2 gap-5 mt-5 md:mt-10'>
            <div v-for='(items,index) in events' :key='index' class='bg-gray-3 rounded-md p-3 '>
                <div class='grid grid-cols-1 md:grid-cols-2 gap-1 xl:gap-5'>
                    <div class='h-[8rem] xl:h-[12rem]'>
                        <img :src='items.image' alt='' class='w-full h-full'>
                    </div>

                    <div class='py-0 px-0 xl:py-5 md:px-2 text-white'>
                        <div class='mb-4'>
                            {{ items.title }}
                        </div>
                        <div class='text-sm font-light'>
                            {{ items.content }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if='showModal'>
            <EventModal @modal='setModal' />
        </div>

    </div>
</template>

<script>
import EventModal from '~/components/memberModal/event'

export default {
    name: 'member_events',
    layout: 'home',
    components: { EventModal },
    data() {
        return {
            showModal: true,
            events: [
                {
                    image: require('~/assets/image/event-1.png'),
                    title: 'กงล้อนำโชคเเจกเครดิตฟรี 300฿ ไม่ต้องฝากก่อน ไม่ต้องทำเทิร์น (หมดเขต)',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/event-2.png'),
                    title: 'กงล้อนำโชคเเจกเครดิตฟรี 300฿ ไม่ต้องฝากก่อน ไม่ต้องทำเทิร์น (หมดเขต)',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/event-3.png'),
                    title: 'กงล้อนำโชคเเจกเครดิตฟรี 300฿ ไม่ต้องฝากก่อน ไม่ต้องทำเทิร์น (หมดเขต)',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/event-4.png'),
                    title: 'กงล้อนำโชคเเจกเครดิตฟรี 300฿ ไม่ต้องฝากก่อน ไม่ต้องทำเทิร์น (หมดเขต)',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/event-5.png'),
                    title: 'กงล้อนำโชคเเจกเครดิตฟรี 300฿ ไม่ต้องฝากก่อน ไม่ต้องทำเทิร์น (หมดเขต)',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/event-6.png'),
                    title: 'กงล้อนำโชคเเจกเครดิตฟรี 300฿ ไม่ต้องฝากก่อน ไม่ต้องทำเทิร์น (หมดเขต)',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/event-7.png'),
                    title: 'กงล้อนำโชคเเจกเครดิตฟรี 300฿ ไม่ต้องฝากก่อน ไม่ต้องทำเทิร์น (หมดเขต)',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/event-8.png'),
                    title: 'กงล้อนำโชคเเจกเครดิตฟรี 300฿ ไม่ต้องฝากก่อน ไม่ต้องทำเทิร์น (หมดเขต)',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/event-9.png'),
                    title: 'กงล้อนำโชคเเจกเครดิตฟรี 300฿ ไม่ต้องฝากก่อน ไม่ต้องทำเทิร์น (หมดเขต)',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('~/assets/image/event-10.png'),
                    title: 'กงล้อนำโชคเเจกเครดิตฟรี 300฿ ไม่ต้องฝากก่อน ไม่ต้องทำเทิร์น (หมดเขต)',
                    content: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                }
            ]
        }
    },

    mounted() {
        document.body.classList.add('overflowHidden')
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
