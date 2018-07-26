<template lang="pug">
  #app
    h1 {{ msg }}
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App!',
    };
  },
};
</script>

<style>
#app {
  color: #56b983;
}
</style>
