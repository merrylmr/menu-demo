<template>
  <div class="home">
    <el-button @click="switchNavMode">切换导航模式</el-button>
    <div style="margin-top:20px;">
      <menu-demo :menu="menu" :mode="mode"></menu-demo>
    </div>
  </div>
</template>


<script>
  import menuDemo from '@/components/menu/demo.vue'
  export default {
    name: 'home-page',
    data() {
      return {
        menu: [
          {
            "name": "关于我们",
            "link": {"type": "page", "value": [71]},
            "sub": [{
              "name": "测试分类aaaa",
              "link": {"type": "page", "value": [47]},
              "sub": [{"name": "复制空白模板", "link": {"type": "page", "value": [78]}}]
            }, {"name": "复制空白模板", "link": {"type": "page", "value": [79]}}]
          },
          {
            "name": "首页",
            "link": {"type": "page", "value": [80]},
            "sub": [{"name": "关于我们3", "link": {"type": "page", "value": [81]}}]
          },
          {"name": "123", "link": {"type": "apply", "value": [168, 496]}},
          {
            "name": "美妆",
            "link": {"type": "apply", "value": [199, 283]},
            "sub": [{
              "name": "123",
              "link": {"type": "apply", "value": [199, 364]},
              "sub": [{"name": "测试分类模板", "link": {"type": "apply", "value": [199, 446]}}]
            }]
          },
          {"name": "topa", "link": {"type": "apply", "value": [199, 447]}},
          {
            "name": "我的文章",
            "link": {"type": "apply", "value": [230, 495]}
          },
          {"name": "top", "link": {"type": "apply", "value": [270, 435]}}],
        mode: 'vertical'
      }
    },
    components: {
      menuDemo
    },
    methods: {
      switchNavMode() {
        if (this.mode === 'vertical') {
          this.mode = 'horizontal'
        } else {
          this.mode = 'vertical'
        }
      }
    }
  }
</script>
