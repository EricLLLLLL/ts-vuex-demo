<template>
  <div class="todo_list">
    <el-card class="box-card">
      <div slot="header">
        <el-row :gutter="18">
          <el-col :span="18">
            <el-input
              v-model="todo"
              placeholder="请输入内容"
            ></el-input>
          </el-col>
          <el-col :span="2">
            <el-button
              type="primary"
              icon="el-icon-circle-plus-outline"
              @click="addItem"
            >add</el-button>
          </el-col>

        </el-row>

      </div>
      <div
        v-for="(item,index) in todoList"
        :key="item"
        class="text item"
        @click="removeItem(index)"
      >{{ item }}</div>
    </el-card>
    <label
      class="text"
      style="margin-top:20px"
    >{{todoLength}} records</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  public todo: string = '';

  @Prop({ default: [] }) private readonly todoList!: string[];

  get todoLength(): number {
    return this.todoList.length;
  }

  @Emit()
  private addItem(): string | undefined {
    if (this.todo) {
      return this.todo;
    }
  }

  @Emit('removeItem')
  private removeItem(index: number): number {
    return index;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo_list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .box-card {
    width: 480px;
  }

  .text {
    font-size: 14px;
    text-align: left;
  }

  .item {
    margin-bottom: 18px;
  }
}
</style>
