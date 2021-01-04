<!--  -->
<template>
  <div>
    <h3 class="recommend">商品推荐</h3>
    <recommend-list :recommendList="recommendList">
    </recommend-list>
  </div>
</template>

<script>
import RecommendList from './childcomps/RecommendList'
export default {
  props:{
    recommendList:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  data () {
    return {
    };
  },
  components:{
  RecommendList
  }
}
</script>
<style scoped>
.recommend{
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-weight: 400;
  padding:2px 0;
}
</style>