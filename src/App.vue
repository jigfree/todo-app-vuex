<template>
  <div id="app">
    <todoHeader @removeAllEvt="removeAll"></todoHeader>
    <todoInput @addItemEvt="addTodoList"></todoInput>
    <todoList :propsdata="todoListItems" @removeItemsEvt="removeTodoList" @toggleCheckEvt="changeDone"></todoList>
  </div>
</template>

<script>
import todoHeader from "./components/TodoHeader.vue";
import todoInput from "./components/TodoInput.vue";
import todoList from "./components/TodoList.vue";

export default {
  data() {
    return {
      todoListItems: [],
    };
  },
  methods: {
    addTodoList($item) {
      var newKey = "k" + new Date().getTime().toString();
      var data = { key: newKey, value: $item, isDone: false };
      this.todoListItems.push(data);

      // localStorage 항목 저장
      localStorage.setItem(newKey, JSON.stringify(data));
    },
    removeTodoList($todoItem, $idx) {
      this.todoListItems.splice($idx, 1);

      // localStorage 항목 삭제
      localStorage.removeItem($todoItem);
    },
    removeAll() {
      this.todoListItems = [];

      // localStorage 전체 삭제
      localStorage.clear();
    },
    changeDone($todoItem, $idx, state) {
      this.todoListItems[$idx].isDone = state
      var data = this.todoListItems[$idx];
      
      // localStorage 항목 내용 변경
      localStorage.setItem($todoItem, JSON.stringify(data));
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === "loglevel:webpack-dev-server") continue;
        var strData = localStorage[localStorage.key(i)];
        var jsonObj = JSON.parse(strData);
        this.todoListItems.push(jsonObj);
      }

      // localStorage 는 입력된 순서데로 정렬되지 않는다 저장된 데이터를 불러올때 미리 정의해둔 key값으로 sort해야한다. 
      this.todoListItems.sort(function(a,b){
          var x = a['key']; var y = b['key'];
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
    }
      // 라이프 사이클 참고...
      // created 
      // 인스턴스가 작성된 후 동기적으로 호출됩니다. 
      // 이 단계에서 인스턴스는 데이터 처리, 계산된 속성, 메서드, 감시/이벤트 콜백 등과 같은 옵션 처리를 완료합니다. 
      // 그러나 마운트가 시작되지 않았으므로 $el 속성을 아직 사용할 수 없습니다.

      // mounted
      // el이 새로 생성된 vm.$el로 대체된 인스턴스가 마운트 된 직후 호출됩니다. 
      // 루트 인스턴스가 문서 내의 엘리먼트에 마운트 되어 있으면, mounted가 호출 될 때 vm.$el도 문서 안에 있게 됩니다.
  },
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