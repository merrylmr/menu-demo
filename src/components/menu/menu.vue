<template>
  <ul class="zz-menu zz-menu--horizontal">
    <!--菜单项-->
    <template v-for="(item,index) in menu">
      <zz-menu-item :item="item" :key="index" :firstLevel="true"></zz-menu-item>
    </template>
  </ul>
</template>

<script>
  import zzMenuItem from './item.vue'

  export default {
    name: 'zz-menu',
    provide() {
      return {
        rootMenu: this
      }
    },
    data() {
      return {
        menu: [
          {
            "name": "关于我们",
            "link": {"type": "page", "value": [71]},
            "sub": [{
              "name": "测试分类aaaa",
              "link": {"type": "page", "value": [47]},
              "sub": [{"name": "bbbbb", "link": {"type": "page", "value": [78]}}]
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
        openedMenus: []
      }
    },
    components: {
      zzMenuItem
    },
    methods: {
      openMenu(index) {
        let openedMenus = this.openedMenus;
        if (openedMenus.indexOf(index) !== -1) return;
        this.openedMenus.push(index);
      },
      closeMenu(index) {
        const i = this.openedMenus.indexOf(index);
        if (i !== -1) {
          this.openedMenus.splice(i, 1);
        }
      }
    }
  }
</script>
