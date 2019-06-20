<template>
  <div style="margin-top:200px;height:3000px;">
    <zz-menu></zz-menu>
    <!--<ul class="zz-menu zz-menu&#45;&#45;horizontal">-->
    <!--<li class="menu-item">-->
    <!--<a href="javascript:;">-->
    <!--item1-->
    <!--</a>-->
    <!--</li>-->
    <!--<li class="menu-item">-->
    <!--<a href="javascript:;">-->
    <!--item2-->
    <!--</a>-->
    <!--</li>-->
    <!--&lt;!&ndash;有子菜单需要popover&ndash;&gt;-->
    <!--<li class="zz-submenu" ref="reference"-->
    <!--@mouseenter="showSubmenu(1)">-->
    <!--<a href="javascript:;">-->
    <!--<div class="zz-submenu__title">-->
    <!--submenu-->
    <!--<i class="el-icon-arrow-down"></i>-->
    <!--</div>-->
    <!--</a>-->
    <!--&lt;!&ndash;popover-menu&ndash;&gt;-->
    <!--<div class="zz-popover-menu zz-menu&#45;&#45;horizontal"-->
    <!--ref="popper">-->
    <!--<ul class="zz-menu zz-menu&#45;&#45;popup">-->
    <!--<li class="menu-item">-->
    <!--<a href="#">-->
    <!--子菜单1-->
    <!--</a>-->
    <!--</li>-->
    <!--<li class="menu-item">-->
    <!--<a href="#">-->
    <!--子菜单2-->
    <!--</a>-->
    <!--</li>-->
    <!--<li class="zz-submenu" ref="reference-2"-->
    <!--@mouseenter="showSubmenu(2)">-->
    <!--<a href="#">-->
    <!--<div class="zz-submenu__title">-->
    <!--子菜单3-->
    <!--<i class="el-icon-arrow-right"></i>-->
    <!--</div>-->
    <!--</a>-->
    <!--&lt;!&ndash;第二级子菜单&ndash;&gt;-->
    <!--<div class="zz-menu&#45;&#45;horizontal" ref="popover-level2">-->
    <!--<ul class="zz-menu zz-menu&#45;&#45;popup">-->
    <!--<li class="menu-item"><a href="#">1-1-1</a></li>-->
    <!--<li class="menu-item"><a href="#">1-1-2</a></li>-->
    <!--<li class="menu-item"><a href="#">1-1-3</a></li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</li>-->
    <!--</ul>-->
  </div>
</template>
<script>
  import zzMenu from './menu/menu.vue'
  import PopperJS from 'popper.js';

  export default {
    name: 'custom-popover',
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
    components: {zzMenu},
    computed: {
      opened() {
        return this.rootMenu.openedMenus.indexOf(this.index) > -1;
      },
    },
    methods: {
      createPopper(reference, popper, options = {}) {
        let popperJS = new PopperJS(
          reference,
          popper,
          options
        );
      },
      showSubmenu(level) {
        switch (level) {
          case 1:
            let reference = this.$refs['reference']
            let popper = this.$refs['popper']
            this.createPopper(reference, popper, {
              styles: {}
            })
            break;
          case 2:
            let reference2 = this.$refs['reference-2']
            let popper2 = this.$refs['popover-level2']
            this.createPopper(reference2, popper2, {
              placement: 'right-start'
            })
            break;
        }
      }
    },
    mounted() {
      // let reference = this.$refs['reference']
      // let popper = this.$refs['popper']
      //
      // let reference2 = this.$refs['reference-2']
      // let popper2 = this.$refs['popover-level2']
      // this.createPopper(reference, popper)
      // this.createPopper(reference2, popper2, {
      //   placement: 'right-start'
      // })
    }
  }
</script>

<style lang="scss">

  .menu-item {
    position: relative;
    font-size: 14px;
    color: #303133;
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


  a {
    text-decoration: none;
    display: block;
    color: inherit;
  }


  .zz-menu {
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


    > .zz-submenu {
      a {
        padding: 0 10px;
      }

      .zz-submenu__title {
        height: 60px;
        line-height: 60px;
        color: #909399;
      }
    }
  }

  .zz-menu--horizontal {
    > .menu-item {
      float: left;
      height: 60px;
      line-height: 60px;
      margin: 0;
      color: #909399;
    }
  }


  .zz-menu--horizontal {
    > .zz-submenu {
      float: left
    }
  }


  .zz-popover-menu {
    /*position: absolute;*/
  }

  /*popover*/
  .zz-menu--popup {
    z-index: 100;
    border: none;
    padding: 5px 0;
    border-radius: 2px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);

    > .zz-menu-item {
      background-color: #fff;
      float: none;
      height: 36px;
      line-height: 36px;
      padding: 0 10px;
      color: #909399;
      min-width: auto;
    }
  }

  .zz-menu--horizontal .zz-menu .zz-menu-item,
  .zz-menu--horizontal .zz-menu .zz-submenu__title {
    background-color: #fff;
    float: none;
    height: 36px;
    line-height: 36px;
    color: #909399;
  }

</style>
