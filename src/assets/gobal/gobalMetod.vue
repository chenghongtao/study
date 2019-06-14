<script>
//   exports.install=function(Vue,options){
//       Vue.prototype.hostname='http://192.168.100.32:8081';
//       Vue.prototype.abc='djadfaf;lda';
//       Vue.prototype.methodOne=function(data){
//          return data+1;
//       }
//    }
const plug={
   install(Vue,options){
      Vue.prototype.hostname='http://192.168.100.32:8081';
      Vue.prototype.abc='djadfaf;lda';
      Vue.prototype.methodOne=function(data){
         return data+1;
      }
   }
}
export  default plug;

</script>