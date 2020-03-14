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
        <a
          class="label"
          :href="content.en.contact.email"
          target="_top"
        >
          Email
        </a>
        <EmailIcon class="icon" alt="Email Icon" />
      </div>
      <div class="linkContainer">
        <a
          :href="content.en.links.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="label"
        >
          LinkedIn
        </a>
        <LinkedInIcon class="icon" alt="LinkedIn Icon" />
      </div>
      <div class="linkContainer">
        <a
          :href="content.en.links.github"
          target="_blank"
          rel="noopener noreferrer"
          class="label"
        >
          GitHub
        </a>
        <GitHubIcon class="icon" alt="GitHub Icon" />
      </div>
      <div class="linkContainer">
        <a
          :href="content.en.links.npm"
          target="_blank"
          rel="noopener noreferrer"
          class="label"
        >
          npm
        </a>
        <NpmIcon class="icon" alt="npm Icon" />
      </div>
    </div>
  </div>
</template>

<script>
import EmailIcon from '@/assets/svg/email.svg';
import GitHubIcon from '@/assets/svg/github.svg';
import NpmIcon from '@/assets/svg/npm.svg';
import LinkedInIcon from '@/assets/svg/linkedin.svg';
import content from './Contact.json';

export default {
  data: () => ({
    content,
  }),
  components: {
    EmailIcon,
    GitHubIcon,
    NpmIcon,
    LinkedInIcon,
  },
};
</script>

<style lang="scss" scoped>
  @import 'Contact.scss'
</style>
