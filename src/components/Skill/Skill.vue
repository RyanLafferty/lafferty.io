<template>
  <div :class="styles.container">
    <component :is="logo" :class="styles.logo"/>
    <span :class="styles.label">
      {{ label }}
    </span>
  </div>
</template>

<script>
import styles from './Skill.module.scss';

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
  data: () => ({
    styles,
  }),
};
</script>
