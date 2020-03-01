<template>
  <div class="container">
    <h1>{{ content.en.title }}</h1>
  </div>
</template>

<script>
import content from './About.json';

export default {
  props: {
    title: {
      type: String,
      default: 'This is the about page!',
    },
  },
  data: () => ({
    content,
  }),
};
</script>

<style lang="scss" scoped>
   @import 'About.scss'
</style>
