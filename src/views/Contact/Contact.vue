<template>
  <div class="container">
    <iframe :src="content.en.links.resume" class="resume">
      Could not load resume
    </iframe>
    <div class="contactContainer">
      <div class="titleContainer">
        <span class="title">
          {{content.en.title}}
        </span>
      </div>
      <div class="linkContainer">
        <EmailIcon class="icon" alt="Email Icon" />
        <a
          class="label"
          :href="content.en.contact.email"
          target="_top"
        >
          Email
        </a>
      </div>
      <div class="linkContainer">
        <GitHubIcon class="icon" alt="GitHub Icon" />
        <a
          :href="content.en.links.github"
          target="_blank"
          rel="noopener noreferrer"
          class="label"
        >
          GitHub
        </a>
      </div>
      <div class="linkContainer">
        <LinkedInIcon class="icon" alt="LinkedIn Icon" />
        <a
          :href="content.en.links.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="label"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import EmailIcon from '@/assets/svg/email.svg';
import GitHubIcon from '@/assets/svg/github.svg';
import LinkedInIcon from '@/assets/svg/linkedin.svg';
import content from './Contact.json';

export default {
  data: () => ({
    content,
  }),
  components: {
    EmailIcon,
    GitHubIcon,
    LinkedInIcon,
  },
};
</script>

<style lang="scss" scoped>
  @import 'Contact.scss'
</style>
