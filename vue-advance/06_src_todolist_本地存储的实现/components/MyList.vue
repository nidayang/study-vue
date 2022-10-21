<template>
  <div>
    <ul class="todo-main">
      <MyListItem 
      v-for="todoObject in todos" 
      :key="todoObject.id"
      :todo = 'todoObject'
      :changeTodoStatus="changeTodoStatus"
      :delTodo ="delTodo"></MyListItem>
    </ul>
  </div>
</template>

<script>
import MyListItem from "./MyListItem";
//引入组件
export default {
  name: "MyList",
  components: { MyListItem },
  props:['todos','changeTodoStatus','delTodo'],

};
</script>
<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
