<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {

      }
    },
    beforeDestroy() {
      console.log('beforeDestroy11111')
    },
    destroyed() {
      console.log('destroyed2222')
    }
  }
</script>
