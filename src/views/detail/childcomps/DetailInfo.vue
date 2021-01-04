<!--  -->
<template>
  <div class="detail-info">
    <div class="detail-desc">{{detailInfo.desc}}</div>
    <div v-for="(item,index) in detailInfo.detailImage" :key="index">
      <div class="item-desc">{{item.desc}}</div>
       <h3 class="item-title">{{item.key}}</h3>
      <ul>
        <li v-for="(imageItem,index) in item.list" :key="index">
         <img :src="imageItem" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    detailInfo:{
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
.detail-desc{
  width: 100%;
  padding: 20px;
  font-size: 14px;
  color: brown;
  border: 1px solid rosybrown;
}
.item-desc{
  font-size: 12px;
  padding: 2px 6px;
}
.item-title{
  text-align: center;
  font-weight: normal;
  font-size: 16px;
  margin: 8px 0;
}
.detail-info img{
  width: 100%;
  padding:6px 10px;
}
</style>