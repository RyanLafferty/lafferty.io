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
        <div>Icon</div>
        <span>TODO</span>
      </div>
      <div class="linkContainer">
        <div>Icon</div>
        <span>TODO2</span>
      </div>
    </div>
  </div>
</template>

<script>
import content from './Contact.json';

export default {
  data: () => ({
    content,
  }),
};
</script>

<style lang="scss" scoped>
  @import 'Contact.scss'
</style>
