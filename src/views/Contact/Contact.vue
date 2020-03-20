<template>
  <div :class="styles.container">
    <iframe :src="content.en.links.resume" :class="styles.resume">
      Could not load resume
    </iframe>
    <div :class="styles.contactContainer">
      <div :class="styles.titleContainer">
        <span :class="styles.title">
          {{content.en.title}}
        </span>
      </div>
      <div :class="styles.linkContainer">
        <a
          :class="styles.label"
          :href="content.en.contact.email"
          target="_top"
        >
          Email
        </a>
        <EmailIcon :class="styles.icon" alt="Email Icon" />
      </div>
      <div :class="styles.linkContainer">
        <a
          :href="content.en.links.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          :class="styles.label"
        >
          LinkedIn
        </a>
        <LinkedInIcon :class="styles.icon" alt="LinkedIn Icon" />
      </div>
      <div :class="styles.linkContainer">
        <a
          :href="content.en.links.github"
          target="_blank"
          rel="noopener noreferrer"
          :class="styles.label"
        >
          GitHub
        </a>
        <GitHubIcon :class="styles.icon" alt="GitHub Icon" />
      </div>
      <div :class="styles.linkContainer">
        <a
          :href="content.en.links.npm"
          target="_blank"
          rel="noopener noreferrer"
          :class="styles.label"
        >
          npm
        </a>
        <NpmIcon :class="styles.icon" alt="npm Icon" />
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
import styles from './Contact.module.scss';

export default {
  data: () => ({
    content,
    styles,
  }),
  components: {
    EmailIcon,
    GitHubIcon,
    NpmIcon,
    LinkedInIcon,
  },
};
</script>
