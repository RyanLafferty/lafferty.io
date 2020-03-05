<template>
  <div :class="styles.container">
    <Skill
      v-for="skill in skills"
      :key="`skill-${skill.label}`"
      :logo="skill.logo"
      :label="skill.label"
    />
  </div>
</template>

<script>
import Skill from '@/components/Skill';
import styles from './Skills.module.scss';

export default {
  data: () => ({
    styles,
  }),
  components: {
    Skill,
  },
  props: {
    skills: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
