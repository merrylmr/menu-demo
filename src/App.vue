<template>
  <div id="app">
    <router-view></router-view>
    <!--<div v-for="(item, index) in audios" :key="index">-->
    <!--<VueAudio :theUrl="item.url" :theControlList="item.controlList"/>-->
    <!--</div>-->
  </div>
</template>

<script>
  import VueAudio from './components/VueAudio'

  export default {
    name: 'app',
    components: {
      VueAudio
    },
    data() {
      return {
        audios: [
          {
            url: './static/falling-star.mp3',
            controlList: 'onlyOnePlaying'
          }
        ],
        swiperOption: {
          slidesPerView: 3,
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    beforeDestroy() {
      console.log('beforeDestroy11111')
    },
    destroyed() {
      console.log('destroyed2222')
    }
  }
</script>

<style>
  .swiper-slide {
    border: 1px solid red;
  }
</style>
