import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {
  fetch(){
    const arr = [];
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === "loglevel:webpack-dev-server") continue;
        var strData = localStorage[localStorage.key(i)];
        var jsonObj = JSON.parse(strData);
        arr.push(jsonObj);
      }

      // localStorage 는 입력된 순서데로 정렬되지 않는다 저장된 데이터를 불러올때 미리 정의해둔 key값으로 sort해야한다. 
      arr.sort(function(a,b){
          var x = a['key']; var y = b['key'];
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
    }
    return arr;
  }
}
export default new Vuex.Store({
  state: {
    headerText: 'JIGFREE TODO (use Vuex)',
    todoListItems:storage.fetch()
  },
  mutations: {
    addTodoList(state, payload) {
      var newKey = "k" + new Date().getTime().toString();
      var data = { key: newKey, value: payload, isDone: false };
      state.todoListItems.push(data);

      // localStorage 항목 저장
      localStorage.setItem(newKey, JSON.stringify(data));
    },
    removeTodoList(state, payload) {
      state.todoListItems.splice(payload.idx, 1);

      // localStorage 항목 삭제
      localStorage.removeItem(payload.todoItem);
    },
    removeAllitems(state) {
      state.todoListItems = [];

      // localStorage 전체 삭제
      localStorage.clear();
    },
    changeDone(state, payload) {
      state.todoListItems[payload.idx].isDone = payload.state
      var data = state.todoListItems[payload.idx];
      
      // localStorage 항목 내용 변경
      localStorage.setItem(payload.todoItem, JSON.stringify(data));
    }
  },
  actions: {

  }
})
