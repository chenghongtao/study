<script>
   export default {
      text:function(test){
         return test.split('').reverse().join('');
      },
      number:function(num){
          return num * 10000;
      }
  };
</script>