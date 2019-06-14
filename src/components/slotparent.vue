<template>
    <div id='parent'>
        父组件
        <child>
            <!--匿名插槽-->
            <!-- <span>{{a}}</span>
            <span>{{b}}</span> -->
            <!--具名插槽-->
            <!-- <span slot='test'>{{a}}</span> -->
                <template v-slot:todo="dosomething">
                      <span v-for='(item,index) in dosomething.data' :key="index">
                          {{item}}--------{{index}}
                      </span>
                </template>
        </child>
    </div>
</template>


<script>
import child from './child';
export default {
    name:'parent',
    data:function(){
       return {
           a:'hello',
           b:'kitty'
       }
    },
    components:{
        child
    }
}
</script>

