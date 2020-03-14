<template>
  <div :class="styles.container">
    <Error
      :errorIcon="NotFoundIcon"
      :message="content.en.title"
    />
  </div>
</template>

<script>
import Error from '@/components/Error';
import NotFoundIcon from '@/assets/svg/404.svg';
import content from './NotFound.json';
import styles from './NotFound.module.scss';

export default {
  data: () => ({
    content,
    styles,
    NotFoundIcon,
  }),
  components: {
    Error,
  },
};
</script>
