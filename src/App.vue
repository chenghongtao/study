<template>
  <div id="app">
     <!-- <parent></parent>
     <div id='router'>
       <router-link to='/a'>to a 页面</router-link> 
       <router-link to='/b'>to b 页面</router-link>
       <hr/>
       <router-view></router-view>

       <router-link to='/user/123'>123页面</router-link>
       <router-link to='/user/456'>456页面</router-link>
     </div> -->
     <!-- <computed></computed> -->
     <!-- <request></request> -->
     <!-- <parent></parent> -->
     <!-- <gobalVar></gobalVar> -->
     <!-- <componentFilter></componentFilter> -->
     <domEle></domEle>
  </div>
</template>
<script>
  //import parent from './components/parent';
  //import computed from './components/computed'
  //import request from './components/request';
  //import gobalVar from './components/gobal/globalVariable'
  //import componentFilter from './components/filter/filter';
  import domEle from './components/style/style';
  export default {
    name:'App',
    components:{
      //parent
      // computed
      //request
      //gobalVar
      //componentFilter
      domEle
    }
  }
</script>