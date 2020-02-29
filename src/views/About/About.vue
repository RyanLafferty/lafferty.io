<template>
  <div class="about">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'This is the about page!',
    },
  },
  data: () => ({
    foo: 'bar',
  }),
};
</script>
