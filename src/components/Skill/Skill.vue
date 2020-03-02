<template>
  <div class="container">
    <component :is="logo" class="logo"/>
    <span class="label">
      {{ label }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: Object,
      default: null,
    },
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'Skill.scss'
</style>
