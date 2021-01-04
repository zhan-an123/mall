<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
      </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props:{
    path:String,
    activeColor:{
      default:'red',
      type:String
    }
  },
  data(){
    return {
    }
  },
  computed: {
   isActive(){
    //  this.$route当前活跃的路由
     return this.$route.path.indexOf(this.path)!=-1;
   },
   activeStyle(){
     return this.isActive?{color:this.activeColor}:{};
   }
  },
  methods:{
    itemClick(){
      // this.$router.replace(this.path);
      // console.log(this.$router);
      this.$router.push(this.path);
    }
  }
}
</script>
<style>
.tab-bar-item{
  flex: 1;
  height: 49px;
}
.tab-bar-item img{
  vertical-align: middle;
  width: 24px;
  height: 24px;
  margin-top: 6px;
}
</style>

