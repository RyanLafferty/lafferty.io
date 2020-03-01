<template>
  <div class="container">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'This is the about page!',
    },
  },
  data: () => ({
    foo: 'bar',
  }),
};
</script>

<style lang="scss" scoped>
   @import 'About.scss'
</style>
