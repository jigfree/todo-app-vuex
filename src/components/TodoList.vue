<template>
  <div>
    <ul>
      <li  v-for="(item, index) in this.$store.state.todoListItems" :key="item.key" @click="toggleCheck(item.key, index, item.isDone)" :class="{'todoComplete_li':item.isDone}">
        <span :class="{'item_txt':true, 'todoComplete':item.isDone}">{{item.value}}</span>
        <button class="removeBtn" @click="removeItems(item.key, index)">-</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    removeItems(todoItem, idx) {
      event.stopPropagation();
      //this.$emit("removeItemsEvt", $todoItem, $idx);
      this.$store.commit('removeTodoList', {todoItem, idx});
    },
    toggleCheck(todoItem, idx, state) {
      event.stopPropagation();
      state = !state;
      //this.$emit("toggleCheckEvt", $todoItem, $idx, !state);
      this.$store.commit('changeDone', {todoItem, idx, state});
    },

  }
};
</script>

<style>
.item_txt {
  width: calc(100% - 3.5rem);
  overflow: hidden;
  padding-left: 0.9rem;
  cursor: pointer;
  color: white;
  font-weight:bold;
}



ul {
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
  text-align: left;
}

li {
  display: flex;
  height: 40px;
  line-height: 40px;
  background: rgb(201, 0, 121);
  margin: 0.6rem 0;
  border-radius: 6px;
}
li:hover{
  background: rgb(133, 11, 84);
}


.removeBtn {
  z-index: 1;
  height: 40px;
  background: rgb(46, 2, 25);
  width: 3.5rem;
  font-size: 1.6rem;
  border-radius: 0 6px 6px 0;
  color: rgb(255, 0, 89);
  font-weight: bold;
  text-shadow: 1px 1px 1px rgb(50, 34, 0);
  cursor: pointer;
}
.removeBtn:hover{
  /* background: rgb(255, 70, 70); */
  background: rgb(176, 0, 82);
  color: white;
}
.removeBtn:focus {
  outline: none;
}

.todoComplete {
  color: rgb(136, 64, 140);
  text-decoration: line-through;
}

.todoComplete_li {
    background:rgb(70, 36, 59)
}
</style>
