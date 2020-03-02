<template>
  <div class="container">
    <NavBarOption
      v-for="option in options"
      :key="`nav-bar-option-${option.label}`"
      :link="option.link"
      :label="option.label"
    >
  </div>
</template>

<script>
import NavBarOption from '@/components/NavBarOption';

export default {
  props: {
    options: {
      type: Array,
      default: () => [{
        link: '/',
        label: 'Home',
      }],
    },
    components: {
      NavBarOption,
    },
  },
};
</script>

<style lang="scss" scoped>
  @import 'NavBar.scss'
</style>
