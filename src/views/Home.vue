<template>
  <div class="home">
    <todoList
      :todoList="todoList"
      @add-item="addTodoList"
      @removeItem="addTodoLisItem"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import todoList from '@/components/todoList.vue'; // @ is an alias to /src
import { State, Getter, Action } from 'vuex-class';

@Component({
  components: {
    todoList
  }
})
export default class Home extends Vue {
  @State(state => state.todolist.todoList) private todoList!: string[];

  @Action('todolist/addList') private addList!: (val: string) => void;
  @Action('todolist/removeItem') private removeItem!: (index: number) => void;

  public addTodoList(val: string) {
    console.log(val);
    this.addList(val);
  }

  private created() {
    console.log('i add life cycle funciton -- created');
  }

  private addTodoLisItem(index: number) {
    this.removeItem(index);
  }
}
</script>
