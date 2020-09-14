import { firestoreAction } from 'vuexfire';
import { dbOrdersRef } from '../../firebase';

const state = {
  orders: [],
};

const mutations = {
  // addOrder: (state, orders) => state.orders.push(orders),
};

const getters = {
  numberOfOrders: (state) => state.orders.length,
  getOrders: (state) => state.orders,
};

const actions = {
  // binds local state & firebase
  setOrdersRef: firestoreAction((context) => {
    return context.bindFirestoreRef('orders', dbOrdersRef.orderBy('createdAt'));
  }),
  addNewOrder: async (context, order) => {
    try {
      await dbOrdersRef.add(order);
    } catch (error) {
      alert('There was a problem placing your order. Please try again.');
    }
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
