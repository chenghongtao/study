<template>
    <div id='val-parent'>
        <span>父组件</span>
        <childOne @sendFromChildEvent='getFromChild'></childOne>
        <childTwo :parentMsg='fromChild'></childTwo>
        ----------------------------------
        <span>父组件默认值{{fromChild}}</span>
    </div>
</template>


<script>

//import child from './val-child';

import childOne from './childOne';
import childTwo from './childTwo';

export default {
    name:'val-parent',
    data:function(){
      return {
          parentMsg:'123',
          fromChild:'default val'
      }
    },
    methods:{
    //    showChildMsg:function(childVal){
    //       this.parentMsg=childVal
    //    }
        getFromChild(fromChild){
            this.fromChild=fromChild;
        }
    },
    components:{
        childOne,
        childTwo
    }
}
</script>

