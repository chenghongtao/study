<template>
  <div>
    <!-- <span>{{ip}}</span><hr/>
    <span>{{baseUrl}}</span><hr/>
    <span>{{port}}</span><hr/>
    <span>{{projectName}}</span><hr/> -->
    <span>{{name}}</span>
    <button @click="add">点击+1</button>
    <span>{{num}}</span><hr/>
    <span>{{this.hostname}}</span>
    <span>{{this.abc}}</span>
  </div>
</template>

<script>

//方法一，引入全局变量文件
import gobal_ from '../../assets/gobal/gobal.vue'

export default {
    name:'globalVariable',
    data(){
        return {
            projectName:gobal_.projectName,
            baseUrl:gobal_.baseUrl,
            ip:gobal_.ip,
            port:gobal_.port,
            num:100,
            name:this.methodandvar.name
        }
    },
    methods:{
       add(){ 
        //  this.num=this.changeDate(this.num);
        this.num=this.methodOne(this.num);
        // this.num=this.methodandvar.gobalmethod(this.num);
       }
    }

}
</script>

