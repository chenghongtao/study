<template>
    <div id='request'>
        <div id='get'>
            <button @click="get()">GET请求</button>
        </div>
        ------------------------------
        <div id='post'>
            <button @click="post()">POST请求</button>
        </div>
    </div>
</template>
<script>

import axios from 'axios';

export default {
    name:'request',
    methods:{
        get:()=>{
          axios.get('http://localhost:8004/request/get',{
              params:{
                  name:'test',
                  age:20
              }
          }).then((reponse)=>{
             console.log(reponse.data.data);
          }).catch((error)=>{

          });
        },
        post:()=>{
            axios.post('http://localhost:8004/request/post',{
                name:'zhangsan',
                age:28
            }).then((response)=>{
               console.log(response)
            }).catch((error)=>{
               console.log(error)
            });
        }
    }
}
</script>

