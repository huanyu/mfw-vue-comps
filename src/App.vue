<template>
  <div id="app">
    <CDLabel :time="10" :format="'<span>{d}</span> <span>{h}</span>:<span>{m}</span>:<span>{s}</span>'" @over="onCDOver"></CDLabel>
  </div>
</template>

<script>
  import CDLabel from './components/cdLabel/CDLabel.vue'

export default {
  name: 'app',
  components: {
    CDLabel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
