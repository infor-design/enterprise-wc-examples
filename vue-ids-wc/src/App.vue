<template>
  <div id="app">
    <IdsTagTestPage tagTitle="Tag Component" />
  </div>
</template>

<script>
import IdsTagTestPage from './components/Tag.vue';
export default {
  name: 'App',
  components: {
    IdsTagTestPage
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
