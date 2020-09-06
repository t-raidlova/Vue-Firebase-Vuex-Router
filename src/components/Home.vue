<template>
  <div class="background">
    <div class="background-overlay">
      <h2>Welcome to Pizza Planet!</h2>
      <img src="../assets/images/roller.png" alt="roller" />
      <h3>Feeling hungry?</h3>
      <button class="order_btn">Order</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {},
};
</script>

<style>
h2,
h3 {
  margin: 2%;
}
.background {
  background-image: linear-gradient(19deg, #21d5fdb4 0%, #b921ff8f 100%),
    url("../assets/images/dough.jpg");
  background-size: cover;
  background-blend-mode: soft-light;
  background-position: center;
  height: 30vh;
  display: flex;
  text-align: center;
  align-items: center;
}
.background-overlay {
  display: flex;
  flex-direction: column;
  background: #f1e6da;
  border-radius: 5px;
  opacity: 0.8;
  width: 50%;
  margin: 0 auto;
  padding: 5px;
  align-items: center;
}
.background-overlay > img {
  max-width: 10%;
}
.order_btn {
  color: var(--text-light);
  background: var(--primary);
  border: none;
  border-radius: 3px;
  margin: 0.5rem 0;
  padding: 0.8rem 1rem;
  cursor: pointer;
}
</style>