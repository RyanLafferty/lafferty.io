<template>
  <div :class="styles.container">
    <NotFoundIcon :class="styles.icon"/>
    <div :class="styles.copy">Page Not Found</div>
  </div>
</template>

<script>
import NotFoundIcon from '@/assets/svg/404.svg';
import content from './NotFound.json';
import styles from './NotFound.module.scss';

export default {
  data: () => ({
    content,
    styles,
  }),
  components: {
    NotFoundIcon,
  },
};
</script>
