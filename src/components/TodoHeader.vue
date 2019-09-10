<template>
    <div class="topArea">
      <h2 class="title">jigfree's Todo App</h2>
      <button class="removeAllBtn" @click="removeAll">Reset</button>
     </div>
</template>

<script>
export default {
    methods:{
      removeAll(){
          this.$emit('removeAllEvt');
      }
    }
}
</script>

<style>

.topArea{
  min-height: 70px;
  width: 100%;
  margin-bottom: 20px ;
}

.topArea .title {
  color: rgb(231, 250, 106);;
  position: relative;
  height: 30px;
}
 .removeAllBtn {
  float: right;
  height: 30px;
  width: 3.5rem;
  background: rgb(28, 28, 28);
  font-size: 0.9rem;
  border-radius: 6px;
  color: rgb(231, 250, 106);
  cursor: pointer;
}
.removeAllBtn:hover{
  color: rgb(28, 28, 28);
  background: rgb(231, 250, 106);
  font-weight: bold;
}
.removeAllBtn:focus {
  outline: none;
}
</style>
