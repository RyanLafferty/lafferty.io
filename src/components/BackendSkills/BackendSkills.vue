<template>
  <div class="container">
    <Skill :logo="skills[2].logo" :label="skills[2].label"/>
  </div>
</template>

<script>
import Skill from '@/components/Skill';
import { BackendSkills as skills } from '@/assets/config/Skills';

export default {
  data: () => ({
    skills,
  }),
  components: {
    Skill,
  },
};
</script>

<style lang="scss" scoped>
  @import 'BackendSkills.scss'
</style>
