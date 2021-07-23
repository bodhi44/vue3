<template>
  <h1>欢迎来到登录页</h1>
  <Welcome msg="jeck" />
  <el-button type="text"
             @click="goHome">去首页</el-button>
</template>

<script>
import Welcome from '../home.vue'

export default {
  name: 'login',
  components: {
    Welcome
  },
  methods: {
    goHome() {
      this.$router.push('/welcome')
    }
  }
}
</script>

<style scoped>
</style>
