<template>
  <div id="app">
    <app-header />
    <home />
    <Menu />
  </div>
</template>

<script>
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";

export default {
  name: "App",
  components: {
    appHeader: Header,
    Home,
    Menu,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --text: #503f2c;
  --text-light: #f1e6da;
  --bg-light: #eeeeee;
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
