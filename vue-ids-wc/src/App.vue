<template>
  <div id="app">
    <IdsTagWc tagTitle="Tag Component" />
  </div>
</template>

<script>
import IdsTagWc from './components/Tag.vue';
export default {
  name: 'App',
  components: {
    IdsTagWc
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
