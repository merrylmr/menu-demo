<template>
  <submenu
    :firstLevel="firstLevel"
    v-if="item.sub && item.sub.length"
    :item="item"
    :index="index">
    <!--递归-->
    <zz-menu-item
      v-for="(cItem,index) in item.sub"
      :key="index"
      :firstLevel="false"
      :item="cItem">
    </zz-menu-item>
  </submenu>
  <menu-item
    :item="item"
    :index="index"
    v-else></menu-item>
</template>

<script>
  import menuItem from './menu-item.vue'
  import submenu from './submenu.vue'

  export default {
    name: 'zz-menu-item',
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
      firstLevel: {
        type: Boolean
      }
    },
    computed: {
      index() {
        return this.item.link.value.join('/')
      }
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
