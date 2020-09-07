<template>
  <div id="app">
    <app-header />
    <!-- only top level routes -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    appHeader: Header,
  },
};
</script>

<style lang="scss">
:root {
  --text: #503f2c;
  --text-light: #f1e6da;
  --bg-light: #eeeeee;
  --primary: #2154fd;
  --gray: #eee;
}
body {
  color: var(--text);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: hsl(225deg, 25%, 95%);
    &-track {
      background-color: transparent;
      border-radius: 3px;
    }
    &-thumb {
      background-color: rgb(112, 110, 124);
      border-radius: 5px;
    }
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
}

a {
  text-decoration: none;
  color: inherit;
}
ul {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 10px 0;
  background: var(--bg-light);
}
li {
  list-style: none;
}
span {
  margin: 0 5px;
}
</style>
