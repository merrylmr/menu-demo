<template>
  <div>
    <h1>测试html2canvas opacity</h1>
    <vue-audio :file="'https://s-116.f.cdn-static.cn/FoEG0ftaaDEVXbSDPmwprNh5YOGm'" :autoPlay="true" :loop="true"/>
    <div id="test">
      <img src="https://s-116.f.cdn-static.cn/e2.png" width="100%">
      <div class="desc">
        <p>我是测试文字</p>
        <p style="opacity: 0.2;">我是测试文字</p>
        <p style="opacity: 0;">我是测试文字</p>
        <el-button @click="toImg">图片</el-button>
      </div>

    </div>

  </div>
</template>

<script>
  import html2canvas from 'html2canvas';
  import VueAudio from 'vue-audio';

  export default {
    name: 'html2canvas',
    methods: {
      toImg() {
        for (let item of  document.querySelectorAll("#test p")) {
          item.style.opacity = 0
        }
        html2canvas(document.querySelector("#test"), {useCORS: true}).then(canvas => {
          document.body.appendChild(canvas)
        });
      },
    },
    components: {
      'vue-audio': VueAudio
    }
  }
</script>

<style lang="css" scoped>
  #test {
    width: 500px;
    height: 500px;
    border: 1px solid #000;
  }

  .desc {
    text-align: center;
    /*transition: 0.5s linear;*/
  }

  /*.desc:hover p {*/
  /*opacity: 0;*/
  /*!*transition: 0.5s linear;*!*/
  /*}*/
</style>
