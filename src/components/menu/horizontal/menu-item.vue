<template>
  <li class="zz-menu-item"
      :class="{'is-active':active}"
      @click="handleClick">
    <a href="javascript:;">
      <div :style="{'paddingLeft':paddingLeft*level+'px'}">{{item.name}}</div>
    </a>
  </li>
</template>
<script>
  export default {
    name: 'menu-item',
    inject: ['rootMenu'],
    props: {
      item: {
        type: Object,
        default: () => {
          return {
            name: '',
            link: {}
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
    computed: {
      active() {
        return this.index === this.rootMenu.activeIndex;
      },
    },
    methods: {
      handleClick() {
        this.rootMenu.handleItemClick(this)
      }
    }
  }
</script>
