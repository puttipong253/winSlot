<template>
    <div>
        <div v-if='isLoading'>
            <Loading />
        </div>

        <div class='mt-3'>
            <client-only>
                <swiper class='swiper z0' :options='swiperOption'>
                    <swiper-slide v-for='(item,index) in banner' :key='index'>
                        <img :src='item.image' alt=''
                             class='object-cover w-full h-[180px] md:h-[350px] lg:h-[430px] xl:h-[510px]'>
                    </swiper-slide>
                    <div class='swiper-pagination' slot='pagination'></div>
                </swiper>
            </client-only>
        </div>

        <div class='mt-5 lg:mt-7 xl:mt-12 '>
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

            <div v-if='playGame'>
                <PlayGame @modal='setPlayGame' />
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

            <div class='grid grid-cols-4 md:grid-cols-4 gap-x-2 gap-y-7 md:gap-x-5 xl:gap-x-9 md:gap-y-12 mt-7'>
                <div v-for='(item,index) in menu' :key='index'
                     @click='modal(item)'
                     class='hov border border-gray-1 text-gray-1 rounded-lg flex justify-center py-6 md:py-10 lg:py-14 relative cursor-pointer transform transition duration-300 ease-in-out hover:-translate-y-3 hover:text-[#dca93d] hover:border-[#dca93d]'>
                    <svg-icon
                        :name='item.icon'
                        class='w-[35px] h-[35px] md:w-[70px] md:h-[70px] lg:w-[120px] xl:h-[110px]'
                    />
                    <div class='absolute -bottom-3 md:bottom-[-1.2rem]'>
                        <button
                            class='text-white bg-gray-1 text-[10px] md:text-sm md:text-xl rounded-full px-2 py-1 md:px-7 md:py-2'>
                            {{ item.name }}
                        </button>
                    </div>
                </div>
            </div>

            <div v-if='showModal'>
                <MenuModal @modal='setModal' :modalStatus='modalStatus' />
            </div>

            <div class='text-white mt-[3rem] md:mt-[5rem]'>
                <div class='text-2xl md:text-3xl pb-[10px] md:pb-[20px]'>
                    บัญชีเกมส์ ของเรา
                </div>

                <div class='text-base md:text-lg font-light mb-10'>
                    ร่วมสนุกกับกิจกรรมมากมาย พร้อมลุ้นรับรางวัลพิเศษ
                </div>
                <client-only>
                    <div class='lg:hidden'>
                        <carousel-3d :controls-visible='true' :controls-prev-html="'&#10092; '"
                                     :controls-next-html="'&#10093;'"
                                     :controls-width='30' :controls-height='60' :clickable='false' :perspective='0'
                                     :space='300' :display='3'>
                            <slide v-for='(slide, i) in slides' :key='i' :index='i'>
                                <div class='w-full h-full cursor-pointer'>
                                    <img :src='slide.image' alt='' class='h-full w-full'>
                                </div>
                            </slide>
                        </carousel-3d>
                    </div>

                    <div class='hidden lg:block xl:hidden'>
                        <carousel-3d :controls-visible='true' :controls-prev-html="'&#10092; '"
                                     :controls-next-html="'&#10093;'"
                                     :controls-width='30' :controls-height='60' :clickable='false' :perspective='0'
                                     :space='400' :display='3'>
                            <slide v-for='(slide, i) in slides' :key='i' :index='i'>
                                <div class='w-full h-full cursor-pointer'>
                                    <img :src='slide.image' alt='' class='h-full w-full'>
                                </div>
                            </slide>
                        </carousel-3d>
                    </div>

                    <div class='hidden xl:block'>
                        <carousel-3d :controls-visible='true' :controls-prev-html="'&#10092; '"
                                     :controls-next-html="'&#10093;'"
                                     :controls-width='30' :controls-height='60' :clickable='false' :perspective='0'
                                     :space='530' :display='3'>
                            <slide v-for='(slide, i) in slides' :key='i' :index='i'>
                                <div class='w-full h-full cursor-pointer' @click='alert'>
                                    <img :src='slide.image' alt='' class='h-full w-full'>
                                </div>
                            </slide>
                        </carousel-3d>
                    </div>
                </client-only>
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
                <div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 md:mt-10'>
                    <div v-for='(items,index) in event' :key='index' class='flex justify-center'>
                        <div class='w-full h-full bg-[#1A1A1A] rounded-md cursor-pointer transform transition duration-300 ease-in-out hover:-translate-y-2 hover:text-[#dca93d]'>
                            <img :src='items.image' alt='' class='w-full'>
                            <div class='py-3 px-3'>
                                <div class='text-base md:text-xl mb-1'>
                                    {{ items.title }}
                                </div>
                                <div class='text-xs md:text-base font-light'>
                                    {{ items.subTitle }}
                                </div>
                            </div>
                        </div>
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
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import global from '../../mixins/global'
import MenuModal from '../../components/menuModal'
import PlayGame from '../../components/playGame/index.js'
import Loading from '../../components/loading'

export default {
    layout: 'home',
    mixins: [global],
    components: {
        Loading,
        PlayGame,
        MenuModal,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            isLoading: true,
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
            playGame: false,
            modalStatus: '',
            user: {
                bag: 0,
                price: 10000,
                diamond: 0
            },
            menu: [
                {
                    icon: 'clarity_wallet-line',
                    name: 'เติมเงิน',
                    path: '',
                    nameEng: 'topUp'
                },
                {
                    icon: 'fluent_person-money-24-regular',
                    name: 'ถอนเงิน',
                    path: '',
                    nameEng: 'withdraw'
                },
                {
                    icon: 'healthicons_coins-outline',
                    name: 'โยกเงิน',
                    path: '',
                    nameEng: 'changeMoney'
                },
                {
                    icon: 'clarity_coin-bag-line',
                    name: 'คืนยอดเสีย',
                    path: '',
                    nameEng: 'returnBalance'
                },
                {
                    icon: 'octicon_gift-24',
                    name: 'โปรโมชัน',
                    path: '/member/promotions',
                    nameEng: 'promotions'
                },
                {
                    icon: 'carbon_ai-status-in-progress',
                    name: 'สร้างรายได้',
                    path: '/member/income',
                    nameEng: 'makeMoney'
                },
                {
                    icon: 'la_user-cog',
                    name: 'ติดต่อแอดมิน',
                    path: '',
                    nameEng: 'contact'
                },
                {
                    icon: 'fluent_textbox-more-24-regular',
                    name: 'เพิ่มเติม',
                    path: '',
                    nameEng: 'more'
                }
            ],
            banner: [
                {
                    image: require('../../assets/image/slot1.png')
                },
                {
                    image: require('../../assets/image/slot1.png')
                }
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
                },
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
    },

    mounted() {
        document.body.classList.remove('overflowHidden')
        setTimeout(() => {
            this.isLoading = false
        }, 1000)
    },

    methods: {
        modal(item) {
            this.showModal = true
            this.modalStatus = item.nameEng
            if (item.path !== '') {
                this.$router.push(item.path)
            }
            if (item.nameEng === 'contact') {
                window.open(process.env.LINE_URL, '_blank')
            } else {
                document.body.classList.add('overflowHidden')
            }
        },

        setModal(value) {
            this.showModal = value
        },

        playGameModal() {
            this.playGame = !this.playGame
        },

        setPlayGame(value) {
            this.playGame = value
        },

        alert() {
            alert('test')
        }
    }
}
</script>

<style lang='scss' scoped>
.hov:hover {
    div button {
        background-image: linear-gradient(180deg, #BE7A22 0%, #FFCF5A 100%);
        box-shadow: 0 5px 10px rgba(240, 106, 9, 0.4);
    }
}

//.hov:hover {
//    background: linear-gradient(180deg, #BE7A22 0%, #FFCF5A 100%)
//}

.text-gradient {
    background: -webkit-linear-gradient(#BE7A22 0%, #FFCF5A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.z0 {
    z-index: 0;
}

.overflow {
    overflow: auto;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: #1D2936;
        border-radius: 20px;
    }
}
</style>
