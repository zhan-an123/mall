<!--  -->
<template>
      <nav-bar>
          <div slot="left" class="back" @click="back"><img src="~assets/img/detail/back.svg" alt=""></div>
          <div slot="center">
              <span v-for="(item,index) in titles" :key="index" class="title-item" :class="{active:index===currentIndex}" @click="itemClick(index)">
                  {{item}}</span>
          </div>
      </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data () {
    return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
    };
  },
  components:{
        NavBar
    },
    methods: {
        itemClick(index){
            this.currentIndex=index;  
            // console.log(index);      
        },
        back(){
            this.$router.go(-1);
        }
    },
}
</script>
<style scoped>
.title-item {
    padding: 0 10px;
    text-align: center;
    font-size: 14px;
}
.back img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
.active{
    color:var(--color-tint);
}
</style>