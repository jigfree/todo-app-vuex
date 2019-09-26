<template>
  <div id="app">
    <todoHeader></todoHeader>
    <todoInput></todoInput>
    <todoList></todoList>
  </div>
</template>

<script>
import todoHeader from "./components/TodoHeader.vue";
import todoInput from "./components/TodoInput.vue";
import todoList from "./components/TodoList.vue";

export default {
  components: {
    todoHeader: todoHeader,
    todoInput: todoInput,
    todoList: todoList
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: rgb(36, 36, 36);
}
</style>