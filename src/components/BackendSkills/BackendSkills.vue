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
import { BackendSkills as skills } from '@/assets/config/Skills';
import styles from './BackendSkills.module.scss';

export default {
  data: () => ({
    skills,
    styles,
  }),
  components: {
    Skill,
  },
};
</script>
