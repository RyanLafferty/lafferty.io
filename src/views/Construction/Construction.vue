<template>
  <div :class="styles.container">
    <Error
      :errorIcon="ConstructionIcon"
      :message="content.en.title"
    />
  </div>
</template>

<script>
import Error from '@/components/Error';
import ConstructionIcon from '@/assets/svg/construction.svg';
import content from './Construction.json';
import styles from './Construction.module.scss';

export default {
  data: () => ({
    content,
    styles,
    ConstructionIcon,
  }),
  components: {
    Error,
  },
};
</script>
