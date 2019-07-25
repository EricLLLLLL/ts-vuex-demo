<template>
  <div class="home">
    <todoList
      :todoList="todoList"
      @add-item="addTodoList"
      @removeItem="removelistItem"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import todoList from '@/components/todoList.vue'; // @ is an alias to /src
import { State, Getter, Action } from 'vuex-class';

const namespace = { namespace: 'todolist' };
@Component({
  components: {
    todoList
  }
})
export default class Home extends Vue {
  // @State(state => state.todolist.todoList) private todoList!: string[];
  @State('todoList', namespace) public todoList!: string[];
  @Action('addList', namespace) private addList!: (val: string) => void;
  @Action('removeItem', namespace) private removeItem!: (
    payload: object
  ) => void;
  // @Action('todolist/removeItem') public removeItem!: (index: number) => void;

  public addTodoList(val: string) {
    console.log('val', val);
    if (val) {
      this.addList(val);
    }
  }

  private created() {
    console.log('i add life cycle funciton -- created');
  }

  private removelistItem(index: number) {
    console.log(index);
    this.removeItem({ index });
  }
}
</script>
