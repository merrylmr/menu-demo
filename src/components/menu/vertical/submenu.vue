<template>
  <li class="zz-submenu"
      :class="[{'is-opened': opened,'is-active':active}]">
    <!--这里的a标签更具具体的链接类型：而渲染不同的标签即可-->
    <a href="javascript:;" class="menu-link">
      <div class="zz-submenu__title"
           @click="handleSubTitleClick"
           :style="{'paddingLeft':paddingLeft*level+'px'}">
        {{item.name}}
        <i
          @click.stop.prevent="handleClick"
          class="zz-submenu__icon-arrow"
          :class="[submenuTitleIcon]"></i>
      </div>
    </a>
    <!--inline menu-->
    <el-collapse-transition>
      <ul class="zz-menu zz-menu--inline"
          v-show="opened">
        <slot></slot>
      </ul>
    </el-collapse-transition>
  </li>
</template>
<script>

  export default {
    name: 'zz-submenu',
    inject: ['rootMenu'],
    props: {
      item: {
        type: Object,
        default: () => {
          return {
            name: '',
            link: {},
            sub: []
          }
        }
      },
      index: {
        type: String,
        default: ''
      },
      level: {
        type: Number,
        default: 0
      },
      paddingLeft: {
        type: Number,
        default: 20
      }
    },
    data() {
      return {
        submenus: {},
        items: {},
        submenuTitleIcon: 'el-icon-arrow-down'
      }
    },
    computed: {
      opened() {
        return this.rootMenu.openedMenus.indexOf(this.index) > -1
      },
      active() {
        return this.index === this.rootMenu.activeIndex;
      },
    },
    methods: {
      handleClick() {
        this.rootMenu.handleSubmenuClick(this)
      },
      handleSubTitleClick() {
        this.rootMenu.handleItemClick(this)
      }
    },
    mounted() {
    },
    beforeDestroy() {
    },
  }
</script>

