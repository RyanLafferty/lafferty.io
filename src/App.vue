<template>
  <div id="app">
    <NavBar :options="options"/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import options from '@/assets/config/NavBar.json';

export default {
  data: () => ({
    options,
  }),
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
