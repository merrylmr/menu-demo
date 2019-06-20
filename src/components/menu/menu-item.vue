<template>
  <li class="menu-item">
    <a href="#">{{item.name}}</a>
  </li>
</template>
<script>
  export default {
    name: 'menu-item',
    props: {
      item: {
        type: Object,
        default: () => {
          return {
            name: '',
            link: {}
          }
        }
      }
    }
  }
</script>
