<template>
  <div class="container">
    <h1 class="title">
      {{ content.en.title }}
    </h1>
    <div @click="handleHeadshotClick"><img :src=headshot class="headshot"></div>
    <h2 class="heading">
      {{ content.en.careerTitle }}
    </h2>
    <div class="careerContainer">
      {{ content.en.careerDescription }}
    </div>
    <h2 class="heading">
      {{ content.en.skillsHeadings.root }}
    </h2>
    <h3 class="heading">
      {{ content.en.skillsHeadings.backend }}
    </h3>
    <Skills :skills="backendSkills" />
    <h3 class="heading">
      {{ content.en.skillsHeadings.frontend }}
    </h3>
    <Skills :skills="frontendSkills" />
    <h3 class="heading">
      {{ content.en.skillsHeadings.platform }}
    </h3>
    <Skills :skills="platformSkills" />
    <h3 class="heading">
      {{ content.en.skillsHeadings.other }}
    </h3>
    <Skills :skills="otherSkills" />
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
import Skills from '@/components/Skills';
import headshot from '@/assets/jpg/headshot-compressed.jpg';
import biking from '@/assets/jpg/biking-compressed.jpg';
import {
  BackendSkills,
  FrontendSkills,
  PlatformSkills,
  OtherSkills,
} from '@/assets/config/Skills';
import contactContent from '@/views/Contact/Contact.json';
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
    backendSkills: BackendSkills,
    frontendSkills: FrontendSkills,
    platformSkills: PlatformSkills,
    otherSkills: OtherSkills,
  }),
  methods: {
    handleHeadshotClick: () => {
      window.open(contactContent.en.links.linkedin);
    },
  },
  components: {
    Skills,
  },
};
</script>

<style lang="scss" scoped>
  @import 'About'
</style>
