<template>
  <div id="app">
    <app-header />
    <home />
  </div>
</template>

<script>
import Header from "./components/Header";
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    appHeader: Header,
    Home,
  },
};
</script>

<style>
:root {
  --text: #503f2c;
  --text-light: #f1e6da;
  --primary: #2154fd;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
}
</style>
