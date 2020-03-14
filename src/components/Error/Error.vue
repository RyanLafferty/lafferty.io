<template>
  <div :class="styles.container">
    <component :is="errorIcon" :class="styles.icon"/>
    <div :class="styles.message">{{ message }}</div>
  </div>
</template>

<script>
import styles from './Error.module.scss';

export default {
  props: {
    errorIcon: {
      type: Object,
      default: null,
    },
    message: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    styles,
  }),
};
</script>
