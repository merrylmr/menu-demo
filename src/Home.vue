<template>
  <div>
    <h1>
      <router-link :to="{name:'hello'}">hello</router-link>
      <router-link :to="{name:'fullpage'}">fullpage</router-link>
      <router-link :to="{name:'popover'}">popover</router-link>
    </h1>
    <swiper :options="swiperOption" style="width:1000px;height:500px" ref="mySwiper">
      <swiper-slide v-for="slide in swiperSlides" :key="slide">I'm Slide {{ slide }}
        <router-link :to="{name:'hello'}">
          <h1>hello</h1>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
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
    computed: {
      swiper() {
        return this.$refs['mySwiper']
      }
    },
    beforeRouteLeave(to, from, next) {
      this.swiper.swiper.destroy(true, false)
      setTimeout(() => {
        next()
      }, 10000)
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
  .swiper-slide:first-child {
    background: red;
  }
</style>
