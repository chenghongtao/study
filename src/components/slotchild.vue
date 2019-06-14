<template>
    <div id='child'>
        子组件
        <!-- <slot>default value</slot> -->
        <!-- <slot name='test'>default value</slot> -->
        <slot name='todo' :data="data"></slot>
    </div>
</template>
<script>
  export default {
      name:'child',
      data:function(){
          return {
              data:[1,2,3,4,5]
          }
      }
  }
</script>
