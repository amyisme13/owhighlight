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
          sui-image(:src="heroImage(hero.name)")
          sui-dimmer(
            blurring,
            :active="hero.active")
            a(
              is="sui-button",
              inverted,
              :href="hero.url") {{ hero.name }}
</template>

<script>
import slugify from 'slugify';
import heroes from './heroes';

export default {
  name: 'App',
  data() {
    return {
      heroes,
    };
  },
  methods: {
    heroImage(name) {
      const slugName = slugify(name, {
        remove: /[$*_+~.()'"!\-:@]/g
      }).toLowerCase();
      return `https://d1u1mce87gyfbn.cloudfront.net/hero/${slugName}/hero-select-portrait.png`;
    },
  }
};
</script>
