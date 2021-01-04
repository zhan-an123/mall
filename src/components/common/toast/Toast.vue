<!--  -->
<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name:'Toast',
  data () {
    return {
      message:'',
      isShow:false
    };
  },
  methods: {
    show(message='提示信息',duration=2000){
        this.message=message;
        setTimeout(()=>{
          this.isShow=true;
        },duration)
    }
  },
  
}
</script>
<style scoped>
.toast{
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  background:rgba(0,0,0,.3);
  color: #fff;
  font-size: 12px;
}
</style>