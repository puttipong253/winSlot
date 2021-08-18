<template>
    <div>
        <client-only>
            <swiper class='swiper' :options='swiperOption'>
                <swiper-slide v-for='(item,index) in banner' :key='index'>
                    <img :src='item.image' alt=''
                         class='object-cover w-full h-[180px] md:h-[350px] lg:h-[450px] xl:h-[560px]'>
                </swiper-slide>
                <div class='swiper-pagination' slot='pagination'></div>
            </swiper>
        </client-only>

        <div class='mt-5 lg:mt-7 xl:mt-12'>
            <div class='flex flex-col-reverse sm:flex-row sm:justify-between py-3'>
                <div class='text-white text-3xl md:text-4xl text-center'>
                    ยอดเงิน ของคุณ
                </div>
                <button
                    class='flex justify-center items-center bg-gradient-to-b from-gold-1 to-gold-2 px-10 py-1 text-xl text-white rounded-full mb-5 sm:mb-0'>
                    <svg-icon
                        name='ri_gamepad-fill'
                        width='35'
                        height='35'
                    />
                    <span class='ml-3'>เข้าเล่นเกมส์</span>
                </button>
            </div>

            <div class='flex flex-col sm:flex-row justify-between py-0 sm:py-3'>
                <div class='flex items-center justify-center'>
                    <div class='text-yellow text-gradient text-xl sm:text-3xl mr-4 font-medium'>
                        ฿ {{ addComma(user.price.toFixed(2)) }}
                    </div>
                    <div class='cursor-pointer'>
                        <svg-icon
                            name='circle'
                            width='28'
                            height='28'
                        />
                    </div>
                </div>

                <div class='flex items-center justify-center mt-5 sm:mt-0'>
                    <div class='flex items-center h-7 px-1 border-2 border-gray-1 rounded-full bg-gray-1 mr-2'>
                        <button class='bg-gradient-to-b from-gold-1 to-gold-2 rounded-full text-white text-[12px] px-2'>
                            ถุงเงิน
                        </button>
                        <span class='text-white ml-2 text-[12px]'>฿ {{ addComma(user.bag.toFixed(2)) }}</span>
                    </div>
                    <div class='flex items-center border-2 border-[#3A3A3A] h-7 px-3 rounded-full'>
                        <svg-icon
                            name='fa_diamond'
                            width='15'
                            height='15'
                        />
                        <span class='text-white ml-2 text-[12px]'>{{ addComma(user.diamond.toFixed(2)) }}</span>
                    </div>
                </div>
            </div>

            <div class='grid grid-cols-4 sm:grid-cols-2 xl:grid-cols-4 gap-x-2 gap-y-7 md:gap-x-6 md:gap-y-12 mt-7'>
                <div v-for='(item,index) in menu' :key='index'
                     class='border border-gray-1 text-gray-1 rounded-lg flex justify-center py-6 md:py-14 relative cursor-pointer transform transition duration-300 ease-in-out hover:-translate-y-3 hover:text-[#dca93d] hover:border-[#dca93d]'>
                    <svg-icon
                        :name='item.icon'
                        class='w-[35px] h-[35px] md:w-[100px] md:h-[100px] xl:w-[140px] xl:h-[140px]'
                    />
                    <div class='absolute -bottom-3 sm:-bottom-6'>
                        <button class='text-white bg-gray-1 text-[11px] md:text-sm md:text-xl rounded-full px-2 py-1 md:px-7 md:py-2 hov'>
                            {{ item.name }}
                        </button>
                    </div>
                </div>
            </div>

            <div class='text-white mt-[3rem] md:mt-[5rem]'>
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
                <div class='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 md:mt-10'>
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
                <div class='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 md:mt-10'>
                    <div v-for='(items,index) in event' :key='index' class='flex justify-center'>
                        <div class='w-full h-full bg-[#1A1A1A] rounded-md'>
                            <img :src='items.image' alt='' class='w-full'>
                            <div class='py-3 px-3'>
                                <div class='text-lg md:text-xl'>
                                    {{items.title}}
                                </div>
                                <div class='text-sm md:text-base font-light'>
                                    {{items.subTitle}}
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
import global from '../../mixins/global'

export default {
    layout: 'home',
    mixins: [global],
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            user: {
                bag: 0,
                price: 10000,
                diamond: 0
            },
            menu: [
                {
                    icon: 'clarity_wallet-line',
                    name: 'เติมเงิน',
                    path: ''
                },
                {
                    icon: 'fluent_person-money-24-regular',
                    name: 'ถอนเงิน',
                    path: ''
                },
                {
                    icon: 'healthicons_coins-outline',
                    name: 'โยกเงิน',
                    path: ''
                },
                {
                    icon: 'clarity_coin-bag-line',
                    name: 'คืนยอดเสีย',
                    path: ''
                },
                {
                    icon: 'octicon_gift-24',
                    name: 'โปรโมชัน',
                    path: ''
                },
                {
                    icon: 'carbon_ai-status-in-progress',
                    name: 'สร้างรายได้',
                    path: ''
                },
                {
                    icon: 'la_user-cog',
                    name: 'ติดต่อแอดมิน',
                    path: ''
                },
                {
                    icon: 'fluent_textbox-more-24-regular',
                    name: 'เพิ่มเติม',
                    path: ''
                }
            ],
            banner: [
                {
                    image: require('../../assets/image/slot1.png')
                },
                // {
                //     image: require('../assets/image/50825.jpg')
                // }
            ],
            event: [
                {
                    image: require('../../assets/image/slot-5.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    subTitle: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('../../assets/image/slot-6.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    subTitle: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                },
                {
                    image: require('../../assets/image/slot-7.png'),
                    title: 'VIP เครดิตหมดกดรับที่นี',
                    subTitle: 'ไม่จำกัด รับแล้ว 48 ท่าน'
                }
            ],
            game: [
                {
                    image: require('../../assets/image/slot-2.png')
                },
                {
                    image: require('../../assets/image/slot-3.png')
                },
                {
                    image: require('../../assets/image/slot-4.png')
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
