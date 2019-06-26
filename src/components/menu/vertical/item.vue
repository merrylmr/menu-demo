<template>
  <submenu
    v-if="item.sub && item.sub.length"
    :item="item"
    :level="level"
    :index="pathHandle(item.link)">
    <!--递归-->
    <zz-menu-item
      v-for="(cItem,index) in item.sub"
      :key="index"
      :level="level+1"
      :item="cItem">
    </zz-menu-item>
  </submenu>
  <menu-item
    :level="level"
    :item="item"
    :index="pathHandle(item.link)"
    v-else></menu-item>
</template>

<script>
  import menuItem from '../horizontal/menu-item.vue'
  import submenu from './submenu.vue'

  export default {
    name: 'zz-menu-item',
    props: {
      item: {
        type: Object,
        default: () => {
          return {
            name: '',
            link: {},
            sub: [],
          }
        }
      },
      level: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {}
    },
    components: {
      menuItem,
      submenu
    },
    methods: {
      pathHandle(item) {
        return item.value.join('/')
      },
    }
  }
</script>
