<!--  -->
<template>
  <div id="tab-control">
      <div v-for="(item,index) in titles" :key="index" class="tab-control-item" @click="itemClick(index)">
          <span :class="{active:index===currentIndex}" >{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return [];
            }
        }
    },
  data () {
    return {
        currentIndex:0
    };
  },
  methods: {
      itemClick(index){
        this.currentIndex=index;
        this.$emit('tabClick',index);
      }  
  },
}
</script>
<style scoped>
#tab-control{
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
}
.tab-control-item{
    flex: 1;
    height: 40px;
}
#tab-control span{
    padding: 4px;
    
}
.active{
    color:var(--color-tint);
    border-bottom: 2px solid var(--color-tint); 
}
</style>