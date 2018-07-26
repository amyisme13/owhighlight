<template lang="pug">
  #app(is="sui-container")
    sui-header(
      size="huge",
      textAlign="center") AMYisMe Highlights

    sui-card-group(
      :items-per-row="7")
      sui-card.red(
        v-for="hero in heroes",
        key="hero.name")
        sui-dimmer-dimmable(
          @mouseenter.native="hero.active = true"
          @mouseleave.native="hero.active = false")
          sui-image(:src="hero.image")
          sui-dimmer(
            blurring,
            :active="hero.active")
            a(
              is="sui-button",
              inverted,
              :href="hero.url") {{ hero.name }}
</template>

<script>
import heroes from './heroes';

export default {
  name: 'App',
  data() {
    return {
      heroes,
    };
  },
};
</script>
