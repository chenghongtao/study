<template>
    <div id='one'>
        <button @click='sendMessage'>向父组件传值</button>
    </div>
</template>

<script>
  export default{
       name:'childOne',
       data(){
           return {
               message:'组件一传递过来的值'
           }
       },
       methods:{
           sendMessage(){
               this.$emit('sendFromChildEvent',this.message);
           }
       }

  }


</script>
