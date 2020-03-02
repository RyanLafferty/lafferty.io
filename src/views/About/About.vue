<template>
  <div class="container">
    <h1 class="title">
      {{ content.en.title }}
    </h1>
    <img :src=headshot class="headshot">
    <h2 class="heading">
      {{ content.en.careerTitle }}
    </h2>
    <div class="careerContainer">
      {{ content.en.careerDescription }}
    </div>
    <h2 class="heading">
      {{ content.en.socialTitle }}
    </h2>
    <div class="socialContainer">
      {{ content.en.socialDescription }}
    </div>
    <img :src=biking class="biking">
  </div>
</template>

<script>
import headshot from '@/assets/jpg/headshot.jpg';
import biking from '@/assets/jpg/biking.jpg';
import content from './About.json';

export default {
  props: {
    title: {
      type: String,
      default: 'This is the about page!',
    },
  },
  data: () => ({
    content,
    headshot,
    biking,
  }),
};
</script>

<style lang="scss" scoped>
  @import 'About.scss'
</style>
