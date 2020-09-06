<template>
  <header>
    <div class="header_logo">
      <img src="../assets/images/planet.png" alr="planet icon" />
      <h1 href="/">Logo</h1>
    </div>
    <nav>
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <span>~</span>
        <li>
          <a href="/menu">menu</a>
        </li>
        <span>~</span>
        <li>
          <a href="/contact">contact</a>
        </li>
        <span>~</span>
        <li>
          <a href="/about">about us</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "appHeader",
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
ul {
  padding: 10px 0;
}
li {
  display: inline-block;
}
@media screen and (min-width: 900px) {
  .header_logo img {
    max-width: 20vw;
  }
}
</style>