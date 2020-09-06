<template>
  <div class="admin_wrapper">
    <div class="current_user_wrapper"></div>
    <NewPizza />
    <div class="menu_wrapper">
      <h3>Menu:</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Remove from menu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Margherita</td>
            <td>
              <button type="button" class="btn_red">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="orders_wrapper">
      <h3>Current orders (5):</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr class="order_number">
            <th colspan="4">
              <strong>Order Number: 4</strong>
              <button type="button" class="btn_red">
                &times;
              </button>
            </th>
          </tr>
          <tr>
            <td>name</td>
            <td>size</td>
            <td>quantity</td>
            <td>price</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NewPizza from './NewPizza';
export default {
  name: 'admin',
  components: {
    NewPizza,
  },
};
</script>

<style scoped>
.admin_wrapper {
  margin: 10px;
}

.current_user_wrapper,
.order_wrapper,
.menu_wrapper {
  margin: 10px 0;
  padding: 10px;
  border: solid 1px var(--primary);
}

table {
  text-align: left;
  width: 70vw;
}

.order_number th {
  background: #ddd;
}
.order_number button {
  margin: 1rem;
}
</style>
