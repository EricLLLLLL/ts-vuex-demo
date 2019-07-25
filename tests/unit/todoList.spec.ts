import { mount, shallowMount, createLocalVue } from '@vue/test-utils';

import Vue from 'vue';
import Vuex from 'vuex';

import ElementUI from 'element-ui';

import todoList from '@/components/todoList.vue';
import home from '@/views/Home.vue';

const localVue = createLocalVue();

localVue.use(ElementUI);
localVue.use(Vuex);

describe('todoList.vue', () => {
  let actions: any;
  let store: any;

  beforeEach(() => {
    actions = { addList: jest.fn(), removeItem: jest.fn() };
    const todolist = {
      namespaced: true,
      state: { todoList: [] },
      actions
    };
    store = new Vuex.Store({
      modules: {
        todolist
      }
    });
  });

  it('renders props.msg when passed', () => {
    const father = mount(home, { store, localVue });
    // const child = shallowMount(todoList, { localVue }) as any;
    const child = father.find(todoList) as any;
    child.vm.todo = 'todo 1';
    child.find('#add').trigger('click');
    expect(child.emitted()['add-item']).toBeTruthy();

    expect(actions.addList).toHaveBeenCalled();
  });
});
