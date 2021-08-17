import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/swiper-bundle.css'

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
