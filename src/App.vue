<template>
  <div id="app">
    <app-header />
    <!-- only top level routes -->
    <router-view></router-view>
    <div class="info_block_wrapper">
      <router-view name="history"></router-view>
      <router-view name="ordering-guide"></router-view>
      <router-view name="delivery"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import { dbMenuRef, dbOrdersRef } from "./firebase";

export default {
  name: "App",
  components: {
    appHeader: Header,
  },
  created() {
    // dispatch (action, payload)
    this.$store.dispatch("setMenuRef", dbMenuRef);
    this.$store.dispatch("setOrdersRef", dbOrdersRef);
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
input,
textarea {
  font-size: 1.1rem;
}
button {
  border: none;
  font-size: 1.1rem;
}
.info_block {
  background: var(var(--bg-light));
  margin: 0.8rem 0;
  padding: 0.8rem;
  h3 {
    text-align: center;
  }
  img {
    width: 30%;
  }
  &_wrapper {
    display: flex;
    flex-direction: column;
  }
  &_content {
    display: flex;
    align-items: center;
  }
}

@media screen and (min-width: 900px) {
  .info_block {
    width: 100%;
    &_wrapper {
      flex-direction: row;
    }
    &_content {
      flex-direction: column;
      align-items: center;
    }
    &:nth-child(2) {
      margin: 10px;
    }
    &:nth-child(2) img {
      order: -1;
    }
  }
}
</style>
