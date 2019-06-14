<template>
   <div>
    <span>{{test|text }}</span>
    <div v-bind:id="num|number">123</div>
    <span>{{num|numberFormat}}</span>
   </div>
</template>
<script>
//组件过滤器
 export default {
     name:'componentFilter',
     data(){
         return {
             test:'abc',
             num:123.34567
         }
     },
     filters:{
         textFormat:function(str){
             if(str.length>0){
                 return str.split('').reverse().join('');
             }else{
                 return '长度不够';
             }
         },
         numFormat(num){
             if(num){
                 return num.toFixed(2);
             }
         }
     }
     
 }

</script>
