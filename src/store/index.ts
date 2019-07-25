import Vue from 'vue';
import Vuex from 'vuex';

import todolist from './todoList';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { todolist }
});
