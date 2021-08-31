<template>
    <div>
        <div class='mb-[2rem] md:mb-[3rem]'>
            <div class='text-gradient text-4xl md:text-5xl font-bold italic py-2 text-center'>
                รวมเกมส์ชั้นนำ
            </div>
            <div class='text-2xl md:text-3xl text-white text-center font-normal mt-2 md:mt-4'>
                เล่นเกมส์ พร้อมลุ้นรับของรางวัลมากมาย
            </div>
            <div class='flex justify-center mt-6 md:mt-8'>
                <button
                    @click='showModal = true'
                    class='flex items-center bg-gradient-to-b from-gold-1 to-gold-2 py-1 md:py-2 px-4 md:px-10 border-2 border-white text-white rounded-full font-light text-sm md:text-xl shadow-gold'>
                    <svg-icon
                        name='heroicons-solid_user-group'
                        class='w-[20px] h-[20px] md:w-[30px] md:h-[30px] '
                    />
                    <span class='ml-3'>
                        สมัครสมาชิก
                    </span>
                </button>

                <div class='absolute right-14 -mt-2 md:mt-0 z-40'>
                    <button
                        class='fixed bg-gradient-to-b from-gold-1 to-gold-2 p-3 text-white rounded-l-md'>
                        <svg-icon
                            name='line'
                            class='w-[20px] h-[20px] md:w-[30px] md:h-[30px]'
                        />
                    </button>
                </div>
            </div>
        </div>

        <Register @modal='setModal' v-if='showModal' />

        <client-only>
            <client-only>
                <swiper class='swiper' :options='swiperOption'>
                    <swiper-slide v-for='(item,index) in banner' :key='index'>
                        <img :src='item.image' alt=''
                             class='object-cover w-full h-[180px] md:h-[350px] lg:h-[450px] xl:h-[560px]'>
                    </swiper-slide>
                    <div class='swiper-pagination' slot='pagination'></div>
                </swiper>
            </client-only>
        </client-only>

        <div class='mt-5 md:mt-[3rem]'>
            <div class='grid grid-cols-1 md:grid-cols-3 gap-4 py-7 text-white'>
                <div v-for='(items,index) in service' :key='index'
                     class='text-center py-7 px-10 md:px-5 lg:px-10 xl:px-[6rem]'>
                    <img :src='items.image' alt='' class='mx-auto'>
                    <div class='mt-5 text-xl font-medium'>{{ items.title }}</div>
                    <div class='mt-4 text-base'>{{ items.content }}</div>
                </div>
            </div>
        </div>

        <div class='mt-5 lg:mt-7 xl:mt-[3rem]'>
            <div class='text-white'>
                <div class='text-2xl md:text-3xl pb-[10px] md:pb-[20px]'>
                    บัญชีเกมส์ ของเรา
                </div>
                <div class='flex justify-between'>
                    <div class='text-base md:text-lg font-light'>
                        ร่วมสนุกกับกิจกรรมมากมาย พร้อมลุ้นรับรางวัลพิเศษ
                    </div>
                    <div class='hidden md:block'>
                        <button class='flex items-center bg-gradient-to-b from-gold-1 to-gold-2 py-1 px-6 rounded-full'>
                            <span class='mr-2 text-xs md:text-sm'>ดูทั้งหมด</span>
                            <svg-icon
                                name='ic_baseline-navigate-next'
                                width='25'
                                height='25'
                            />
                        </button>
                    </div>
                </div>
                <div class='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 md:mt-7'>
                    <div v-for='(items,index) in game' :key='index' class='flex justify-center'>
                        <img :src='items.image' alt='' class='w-full'>
                    </div>
                </div>
                <div class='md:hidden'>
                    <div class='flex justify-center mt-5'>
                        <button class='flex items-center bg-gradient-to-b from-gold-1 to-gold-2 py-1 px-6 rounded-full'>
                            <span class='mr-2 text-xs md:text-sm'>ดูทั้งหมด</span>
                            <svg-icon
                                name='ic_baseline-navigate-next'
                                width='25'
                                height='25'
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div class='text-white mt-[3rem] md:mt-[4rem]'>
                <div class='text-2xl md:text-3xl pb-[10px] md:pb-[20px]'>
                    กิจกรรม ของเรา
                </div>
                <div class='flex justify-between'>
                    <div class='text-base md:text-lg font-light'>
                        ร่วมสนุกกับกิจกรรมมากมาย พร้อมลุ้นรับรางวัลพิเศษ
                    </div>
                    <div class='hidden md:block'>
                        <button class='flex items-center bg-gradient-to-b from-gold-1 to-gold-2 py-1 px-6 rounded-full'>
                            <span class='mr-2 text-xs md:text-sm'>ดูทั้งหมด</span>
                            <svg-icon
                                name='ic_baseline-navigate-next'
                                width='25'
                                height='25'
                            />
                        </button>
                    </div>
                </div>
                <div class='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 md:mt-7'>
                    <div v-for='(items,index) in event' :key='index' class='flex justify-center'>
                        <div class='w-full h-full bg-[#1A1A1A] rounded-md'>
                            <img :src='items.image' alt='' class='w-full'>
                            <div class='py-3 px-3'>
                                <div class='text-lg md:text-xl'>
                                    {{ items.title }}
                                </div>
                                <div class='text-sm md:text-base font-light'>
                                    {{ items.subTitle }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='md:hidden'>
                    <div class='flex justify-center mt-5'>
                        <button class='flex items-center bg-gradient-to-b from-gold-1 to-gold-2 py-1 px-6 rounded-full'>
                            <span class='mr-2 text-sm'>ดูทั้งหมด</span>
                            <svg-icon
                                name='ic_baseline-navigate-next'
                                width='25'
                                height='25'
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import global from '../mixins/global'
import Register from '../components/register'

export default {
    layout: 'default',
    mixins: [global],
    components: {
        Swiper,
        SwiperSlide,
        Register
    },
    data() {
        return {
            slides: [
                {
                    image: require('~/assets/image/joker_bg.png')
                },
                {
                    image: require('~/assets/image/pussy_bg.png')
                },
                {
                    image: require('~/assets/image/superslot_bg.png')
                }
            ],
            showModal: false,
            user: {
                bag: 0,
                price: 10000,
                diamond: 0
            },
            banner: [
                {
                    image: require('../assets/image/slot1.png')
                },
                {
                    image: require('../assets/image/slot1.png')
                }
            ],
            service: [
                {
                    image: require('../assets/image/purse 1.png'),
                    title: 'ฝาก-ถอน รวดเร็ว',
                    content: 'ฝาก-ถอน เร็ว\n' +
                        'การันตีเรื่องเวลา ไม่มีการล่าช้า\n' +
                        'ทำรายการได้ 24 ชั่วโมง'
                },
                {
                    image: require('../assets/image/24-hours 1.png'),
                    title: 'บริการลูกค้า 24ชั่วโมง',
                    content: 'บริการด้วยใจ\n' +
                        'มีความเป็นมืออาชีพ\n' +
                        'แสตนบาย 24 ชั่วโมง'
                },
                {
                    image: require('../assets/image/shield 1.png'),
                    title: 'มั่นคง แน่นอน',
                    content: 'ไม่มีลิมิตต่อวัน\n' +
                        'จ่ายจริง\n' +
                        'การันตีด้วยฐานลูกค้า ทั่วโลก'
                }
            ],
            event: [
                {
                    image: require('../assets/image/slot-5.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    subTitle: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('../assets/image/slot-6.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    subTitle: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('../assets/image/slot-7.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    subTitle: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                }
            ],
            game: [
                {
                    image: require('../assets/image/slot-2.png')
                },
                {
                    image: require('../assets/image/slot-3.png')
                },
                {
                    image: require('../assets/image/slot-4.png')
                }
            ],
            swiperOption: {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        }
    },

    methods: {
        setModal(value) {
            this.showModal = value
        },

        alert() {
            alert('test')
        }
    }
}
</script>

<style lang='scss' scoped>
//.hov:hover {
//    div button {
//        background-image: linear-gradient(180deg, #BE7A22 0%, #FFCF5A 100%);
//        box-shadow: 0 5px 10px rgba(240, 106, 9, 0.4);
//    }
//}
.hov:hover {
    background: linear-gradient(180deg, #BE7A22 0%, #FFCF5A 100%)
}

.text-gradient {
    background: -webkit-linear-gradient(#BE7A22 0%, #FFCF5A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
