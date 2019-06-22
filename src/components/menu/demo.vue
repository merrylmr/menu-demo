<template>
  <div style="margin-top:200px;height:3000px;">
    <!--两种模式的导航分开写的目的：好处：便于管理，不需要大量的判断条件-->
    <!--为什么不适用elementUI的navMenu的原因：路由；子菜单自适应，对齐方式....-->
    <zz-menu-horizontal :menu="menu"></zz-menu-horizontal>
    <!--<zz-menu-vertical :menu="menu"></zz-menu-vertical>-->
  </div>
</template>
<script>
  import zzMenuHorizontal from './horizontal/Index.vue'
  import zzMenuVertical from './vertical/Index.vue'


  export default {
    name: 'menu-demo',
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
          {"name": "top", "link": {"type": "apply", "value": [270, 435]}}]
      }
    },
    components: {zzMenuHorizontal, zzMenuVertical},
    computed: {},
    methods: {},
    mounted() {

    }
  }
</script>

<style lang="scss">
  .zz-menu-item {
    position: relative;
    font-size: 14px;
    cursor: pointer;
    -webkit-transition: border-color .3s, background-color .3s, color .3s;
    transition: border-color .3s, background-color .3s, color .3s;
    box-sizing: border-box;
    list-style: none;
    height: 36px;
    line-height: 36px;
    -webkit-box-sizing: border-box;
    white-space: nowrap;

    a {
      padding: 0 10px;
    }
  }

  .zz-submenu {
    list-style: none;
    margin: 0;
    padding-left: 0;
    font-size: 14px;
  }

  .zz-menu {
    background-color: #fff;
    margin: 0;
    padding: 0;

    &::before,
    &::after {
      display: table;
      content: "";
    }

    &::after {
      clear: both;
    }

    a {
      text-decoration: none;
      display: block;
      color: #909399;
      transition: all 0.5s;

      &:hover {
        color: red;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.5s;
      }
    }

    > .zz-submenu {
      a {
        padding: 0 10px;
      }

      .zz-submenu__title {
        height: 60px;
        line-height: 60px;
      }
    }
  }

  .zz-menu--horizontal {
    > .zz-menu-item {
      float: left;
      height: 60px;
      line-height: 60px;
      margin: 0;
    }

    > .zz-submenu {
      float: left
    }

    .zz-menu {
      .zz-submenu__title {
        float: none;
        height: 36px;
        line-height: 36px;
      }
    }
  }

  /*popover*/
  .zz-menu--popup {
    z-index: 100;
    border: none;
    padding: 5px 0;
    border-radius: 2px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    background-color: #fff;

    > .zz-menu-item {
      float: none;
      height: 36px;
      line-height: 36px;
      min-width: auto;
    }
  }

  .zz-menu--vertical {
    max-width: 300px;

    .zz-menu-item {
      height: 60px;
      line-height: 60px;
    }

    .zz-submenu {
      .zz-submenu__title {
        position: relative;
      }

      .zz-submenu__icon-arrow {
        position: absolute;
        right: 20px;
        top: 50%;
        margin-top: -7px;
      }
    }
  }

</style>
