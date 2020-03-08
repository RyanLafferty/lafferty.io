<template>
  <router-link class="link" exact-active-class="linkActive" :to="link">
    <div class="container">
      {{label}}
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Home',
    },
    link: {
      type: String,
      default: '/',
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'NavBarOption.scss'
</style>
