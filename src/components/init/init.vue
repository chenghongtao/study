<!--钩子函数-->
<template>
    <div>
         <h3>vue 钩子函数</h3>
         <button @click='changeNum'>点击修改num的值</button><hr/>
         ----------------------------------
         num:<span>{{num}}</span><hr/>
         num1:<span>{{num1}}</span>
    </div>
</template>
<script>
import { setTimeout } from 'timers';
 export default {
     name:'initFunction',
     data(){
         return {
             num:1,
             num1:111
         }
     },
     methods:{
         getNum(methodName){
            if(this){
                 console.log(methodName+':'+'this可以取到'+this.num);
             }else{
                console.log(methodName+':'+'不可以取到this'+this.num);
             }
         },
         changeNum(){
             this.num1+=100;
             this.num-=20;
         }
     },
     //钩子函数
     beforeCreate(){
         //这个还取不到,会报错this.getNum is not a function
         //this.getNum('beforeCreate');
     },
     created(){
        this.getNum('created');
     },
     beforeMount(){
        this.getNum('beforeMount');
     },
     mounted(){
       this.getNum('mounted');
       //加载完成之后修改num的值
       setTimeout(()=>{
           this.num+=10;
       },5000);
     },
     beforeUpdate(){
         //可以取到更新后的值
        console.log('beforeUpdate:'+this.num);
     },
     updated(){
        //可以取到更新后的值
        console.log('updated:'+this.num);
     },
     beforeDestroy(){

     },
     destroyed(){

     }
 }
</script>
