<template>
    <div id='computed'>
        <input v-model='message'>
        {{messageReverse}}<hr/>
        {{messagereverse()}}<hr/>
        methods:{{datetime()}}<hr/>
        computed:{{now}}<hr/>
        watch:{{num}}
    </div>
</template>
<script>
export default {
    name:'computed',
    data:function(){
        return {
            message:'hello world',
            num:1
        }
    },
    methods:{
        messagereverse:function(){
            return this.message.split('').reverse().join('');
        },
        datetime:function(){
            return Date.now();
        }
    },
    computed:{
        messageReverse:function(){
            return this.message.split('').reverse().join('');
        },
        now:function(){
            return Date.now();
        }
    },
    watch:{
        num:function(){
            this.num=Date.now();
        }
    }
}
</script>

