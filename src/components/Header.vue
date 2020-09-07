<template>
  <header>
    <div class="header_logo">
      <img src="../assets/images/planet.png" alr="planet icon" />
      <h1 href="/">Logo</h1>
    </div>
    <nav>
      <ul>
        <router-link :to="{ name: 'homeLink' }" tag="li">
          <a>Home</a>
        </router-link>

        <router-link :to="{ name: 'menuLink' }" tag="li">
          <a>Menu</a>
        </router-link>

        <router-link :to="{ name: 'contactLink' }" tag="li">
          <a>Contact</a>
        </router-link>

        <router-link :to="{ name: 'aboutLink' }" tag="li">
          <a>About</a>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'appHeader',
};
</script>

<style scoped>
h1 {
  font-size: 1.3em;
}
.header_logo {
  color: var(--text-light);
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
}
.header_logo img {
  max-width: 25vw;
}

li {
  display: inline-block;
  padding: 0.8rem 1rem;
  font-weight: 600;
}
@media screen and (min-width: 900px) {
  .header_logo img {
    max-width: 20vw;
  }
}
</style>
