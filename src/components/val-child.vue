<template>
    <div id='val-child' style='background-color:red'>
        <span>子组件</span><hr/>
        <span>{{message}}</span><hr/>
        <input v-model='message'/><hr/>
        <button @click="sendMsgToParent()">点击向父组件传值</button>
        <input v-model='childVal'/>
    </div>
</template>

<script>
  export default{
      name:'val-child',
      props:['message'],
      data(){
              return {
                  childVal:'zizujianval'
              }
      },
      methods:{
          sendMsgToParent(){
             this.$emit('listenEvent',this.childVal);
          }
      }
  }
</script>
