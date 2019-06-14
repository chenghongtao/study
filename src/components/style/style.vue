<template>
    <div>
        <div>
            <button @click="editText">点击修改内容</button>
            <button @click="editStyle">点击修改样式</button>
            <span ref='title'>default val</span>
        </div>
    </div>
</template>
<script>
  export default {
      name:'domEle',
      data(){
         return {
          
         }
      },
      methods:{
        editText(){
            //获取节点
            console.log(this.$refs.title);
            this.$refs.title.textContent='已经修改的内容';

        },
        editStyle(){
            //获取节点
            console.log(this.$refs.title);
            this.$refs.title.style.color='red';

        }
      }
  }
</script>
