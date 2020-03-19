<template>
  <div :class="styles.container">
    <div :class="styles.title">
      {{ title }}
    </div>
    <div :class="styles.description">
      {{ description }}
    </div>
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
