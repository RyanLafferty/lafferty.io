<template>
  <div class="container">
    <component :is="componentLoader" class="logo"/>
    <span class="label">
      {{ label }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: '@/assets/svg/github.svg',
    },
    label: {
      type: String,
      default: '',
    },
  },
  // TODO: revert changes here
  computed: {
    componentLoader() {
      return () => (import(this.logo));
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'Skill.scss'
</style>
