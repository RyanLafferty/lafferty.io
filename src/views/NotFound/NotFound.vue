<template>
  <div class="container">
    TODO
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
