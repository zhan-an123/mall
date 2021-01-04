<!--  -->
<template>
  <div v-if="Object.keys(goods).length!=0" class="base-info">
      <div class="info-title">{{goods.title}}</div>
      <div class="info-price">
          <span class="n-price">{{goods.newPrice}}</span>
          <span class="o-price">{{goods.oldPrice}}</span>
        <div v-if="goods.discount" class="discount">{{goods.discount}}</div>
      </div>
      <div class="info-other">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="info-service">
          <span v-for="index in goods.services.length-1" :key="index">
              <img :src="goods.services[index-1].icon" alt="">
            <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        goods:{
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
.base-info{
    padding: 6px;
    border-bottom: 8px solid #eee;
}
.info-title{
font-size: 16px;
color: black;
padding:10px 0;
}
.info-price{
    position: relative;
    margin: 10px 0;
}
.n-price{
    font-size: 20px;
    color:var(--color-tint);
    margin-right: 6px;
}
.o-price{
    font-size:14px;
    text-decoration:line-through;
}
.discount{
    position: absolute;
    top: -18px;
    left: 110px;
    height: 20px;
    padding: 0 4px;
    background-color: var(--color-tint);
    color:#fff;
    font-size: 14px;
    text-align: center;
    line-height: 20px;
    border-radius: 10px;
}
.info-other{
    display: flex;
    padding: 6px 0;
    border-bottom: 1px solid #eee;
}
.info-other span{
    flex: 1;
    justify-content: space-around;
    font-size: 14px;
    text-align: center;
}
.info-other span:first-child{
    text-align: left;
}
.info-other span:last-child{
    text-align: right;
}
.info-service{
    display: flex;
    padding: 20px 0;
    color: black;
}
.info-service span{
    flex: 1;
    font-size: 14px;
    text-align: center;
}
.info-service span:first-child{
    text-align: left;
}
.info-service span:last-child{
    text-align: right;
}
.info-service span img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
</style>