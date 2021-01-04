<!--  -->
<template>
  <div class="goods">
     <goods-item v-for="(item,index) in goods" :key="index" :goodsItem="item"></goods-item>
  </div>
</template>

<script>

import GoodsItem from './GoodsItem'
export default {
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
    GoodsItem,
    },
  data () {
    return {
    };
  },
}
</script>
<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
}
</style>