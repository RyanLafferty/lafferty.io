<template>
  <div class="container">
    <h1>{{ content.en.title }}</h1>
  </div>
</template>

<script>
import content from './Contact.json';

export default {
  data: () => ({
    content,
  }),
};
</script>

<style lang="scss" scoped>
  @import 'Contact.scss'
</style>
