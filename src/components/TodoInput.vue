<template>
  <div class="inputBox">
    <!-- 
        <input class="inputText" type="text" v-model="newItem" placeholder="할일을 입력후 추가해 주세요." v-on:keyup.enter="addItem">
        <button class="addBtn" v-on:click="addItem">+</button>
    --> 
    <!-- keyup 이벤트로 할경우 특정 브라우저에서 한글입력시 두번 실행되는 버그가 있기 때문에 아래와 같이 form 태그의 submit.prevent를 통해서 실행해야한다. -->

    <form @submit.prevent="addItem">
      <input type="text"  class="inputText" v-model="newItem" placeholder="할일을 입력후 추가해 주세요.">
      <input type="button" class="addBtn" @click="addItem" value="+">
    </form>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: ""
    };
  },
  methods: {
    addItem() {
      if (this.newItem !== "") {
        var str = this.newItem;
        //this.$emit("addItemEvt", str);
        this.$store.commit('addTodoList', str);
        this.clearText();
      } else {
        alert("할일을 입력해주세요.");
      }
    },
    clearText() {
      this.newItem = "";
    }
  },
};
</script>

<style>
input:focus {
  outline: none;
}
.inputBox {
  text-align: left;
  padding-left: 10px;
  background: white;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  
}
.inputText {
  width: calc(100% - 4rem);
  border-style: none;
  background: white;
  font-size: 0.9rem;
  color: rgb(137, 11, 179);
}
::placeholder {
  color: rgb(255, 0, 89);
}

.addBtn {
  float: right;
  height: 40px;
  background: rgb(12, 2, 7);
  color: rgb(255, 0, 89);

  width: 3.5rem;
  font-size: 1.6rem;
  border-radius: 0 5px 5px 0;
  font-weight: bold;
  text-shadow: 1px 1px 1px rgb(50, 34, 0);
  cursor: pointer;
}
.addBtn:hover {
  background: rgb(254, 1, 119);
  color: white;
}

.addBtn:focus {
  outline: none;
}
</style>
