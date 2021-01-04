<!--  -->
<template>
  <div class="recommend-list">
  <recommend-item v-for="item in recommendList" :key="item.item_id" :recommendItem="item"></recommend-item>
  </div>
</template>

<script>
import RecommendItem from './RecommendItem'
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
    RecommendItem
  },
}
</script>
<style scoped>
.recommend-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
}
</style>