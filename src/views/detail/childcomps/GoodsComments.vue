<!--  -->
<template>
  <div class="goods-comment">
      <div class="c-rate">宝贝评价({{comments.cRate}})<a href="javascript:;">更多</a></div>
      <div v-for="(item,index) in comments.list" :key="index">
          <div class="user-info">
              <img :src="item.user.avatar" alt="">
              <span>{{item.user.uname}}</span>
              </div>
          <div class="item-content">{{item.content}}</div>
          <img :src="image" alt="" v-for="(image,index) in item.images" :key="index">
          </div>
  </div>
</template>

<script>
export default {
    props:{
    comments:{
    type:Object,
    default(){
        return {};
    }
}
    },
  data () {
    return {
    };
  },
}
</script>
<style scoped>
.goods-comment{
    /* overflow: hidden; */
    /* height:200px; */
    padding: 2px 6px 20px;
    border-bottom: 8px solid #ccc;
}
.c-rate{
    font-size: 14px;
    color:black;
}
.c-rate a{
    float: right;
    color: black;
}
.user-info{
    font-size: 13px;
}
.goods-comment .user-info img{
    width: 40px;
    height: 40px;
    vertical-align: middle;
    border-radius: 50%;
}
.item-content{
    font-size: 12px;
    padding: 2px 6px;
}
.goods-comment img{
    width: 20%;
    /* height: 100px; */
    margin: 4px;
}
</style>