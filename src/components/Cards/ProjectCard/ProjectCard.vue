<template>
  <div :class="styles.container">
    TODO
  </div>
</template>

<script>
import styles from './ProjectCard.module.scss';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    styles,
  }),
};
</script>
