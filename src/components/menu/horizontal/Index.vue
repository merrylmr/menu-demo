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
    name: 'zz-menu-horizontal',
    provide() {
      return {
        rootMenu: this
      }
    },
    props: {
      menu: {
        type: Array,
        default: () => {
          return []
        }
      },
      defaultActive: {
        type: String,
        default: ''
      },

    },
    data() {
      return {
        openedMenus: [],
        activeIndex: this.defaultActive,
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
      },
      handleItemClick(item) {
        console.log('handleItemClick', item.index)
        this.activeIndex = item.index;
      },
    }
  }
</script>
