<template>
  <div :class="styles.container">
    <LightModeIcon v-if="darkMode" @click="toggleDarkMode" :class="styles.lightModeToggle" />
    <DarkModeIcon v-else @click="toggleDarkMode" :class="styles.darkModeToggle" />
    <div :class="styles.linkContainer">
      <NavBarOption
        v-for="option in options"
        :key="`nav-bar-option-${option.label}`"
        :link="option.link"
        :label="option.label"
      />
    </div>
  </div>
</template>

<script>
import NavBarOption from '@/components/NavBarOption';
import LightModeIcon from '@/assets/svg/sun.svg';
import DarkModeIcon from '@/assets/svg/moon.svg';
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
} from 'darkreader';
import styles from './NavBar.module.scss';


export default {
  props: {
    options: {
      type: Array,
      default: () => [{
        link: '/',
        label: 'Home',
      }],
    },
  },
  data: () => ({
    styles,
    darkMode: false,
  }),
  methods: {
    toggleDarkMode: function toggleDarkMode() {
      if (this.darkMode) {
        disableDarkMode();
      } else {
        enableDarkMode({
          brightness: 100,
          contrast: 90,
          sepia: 10,
        });
      }

      this.darkMode = !this.darkMode;
    },
  },
  components: {
    NavBarOption,
    LightModeIcon,
    DarkModeIcon,
  },
};
</script>
