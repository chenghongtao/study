<template>
    <div id='childTwo'>
        <span>父组件传递过来的值：{{parentMsg}}</span>
    </div>
</template>

<script>
  export default {
      name:'childTwo',
      props:['parentMsg']
  }
</script>
