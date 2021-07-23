<template>
  <h1>欢迎来到主页-{{msg}}</h1>
  <router-link to="/login">去登录</router-link>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  msg: String
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
