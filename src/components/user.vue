<template>
    <div id='user'>
        <span>{{this.test}}</span>
        <span>{{reverseMessage}}</span>
    </div>
</template>
<script>
  export default {
      name:'user',
      data:function(){
         return {
             message:'hello'
         }
      },
      computed:{
          test(){
              return this.$route.params.id
          },
          reverseMessage(){
              return this.message.split('').reverse().join('');
          }
      }
  };
</script>
