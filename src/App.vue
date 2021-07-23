<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.$storage.setItem('name', 'Tom')
    setTimeout(() => {
      this.$storage.clearItem('name')
      setTimeout(() => {
        this.$storage.clearAll()
      }, 2000)
    }, 2000)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
