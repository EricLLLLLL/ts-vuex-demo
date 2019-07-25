import { Commit, Dispatch, GetterTree, ActionTree, MutationTree } from 'vuex';

const ADD_TODOLIST = 'ADD_TODOLIST';
const REMOVE_ITEM = 'REMOVE_ITEM';

export interface RootState {
  version: string;
}

interface Payload {
  [propName: string]: any;
}

interface TodoListType {
  todoList: string[];
}

interface Context {
  commit: Commit;
  dispatch: Dispatch;
}

const dataSource: TodoListType = {
  todoList: []
};

const getters: GetterTree<TodoListType, RootState> = {
  getTodoList(state: TodoListType): string[] {
    return state.todoList;
  }
};

const mutations: MutationTree<TodoListType> = {
  ADD_TODOLIST: (state: TodoListType, item: string) => {
    console.log(item);
    state.todoList.push(item);
  },
  REMOVE_ITEM: (state: TodoListType, removeIndex: number) => {
    state.todoList = state.todoList.filter((item: string, index: number) => {
      return removeIndex !== index;
    });
  }
};

const actions: ActionTree<TodoListType, RootState> = {
  addList: async ({ commit }: Context, item: string) => {
    await Promise.resolve(
      setTimeout(() => {
        commit(ADD_TODOLIST, item);
      }, 100)
    );
  },
  removeItem: async ({ commit }: Context, { index }: Payload) => {
    await Promise.resolve(
      setTimeout(() => {
        commit(REMOVE_ITEM, index);
      }, 100)
    );
  }
};

export default {
  namespaced: true,
  state: dataSource,
  getters,
  mutations,
  actions
};
