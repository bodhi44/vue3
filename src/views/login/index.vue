<template>
  <h1>欢迎来到登录页</h1>
  <el-button type="text"
             @click="goHome">去首页</el-button>
</template>

<script>
export default {
  name: 'login',
  mounted() {
    this.$request({
      method: 'get',
      url: '/login',
      data: {
        name: 'jack'
      }
    }).then(res => {
      console.log(res)
    })
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
