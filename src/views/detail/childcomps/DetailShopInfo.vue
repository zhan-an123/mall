<!--  -->
<template>
  <div class="shop-info">
          <div class="shop-logo"><img :src="shopInfo.shopLogo" alt=""></div>
          <div class="shop-name">{{shopInfo.shopName}}</div>
          <div class="shop-score">
              <div class="item-info">
              <div class="shop-sells">
                  <div>{{shopInfo.cSells}}</div>
                  <div>总销量</div>
              </div>
              <div class="shop-all">
                  <div>{{shopInfo.cGoods}}</div>
                <div>全部宝贝</div>
              </div>
              </div>
          
          <div class="score">
              <div v-for="(item,index) in shopInfo.score" :key="index">
                <span>{{item.name}}</span>
                <span :class="{red:!item.isBetter,green:item.isBetter}">{{item.score}}</span>
                <span v-if="item.isBetter">
                    <img src="~assets/img/detail/high.svg" alt="">
                </span>
                <span v-else>
                    <img src="~assets/img/detail/low.svg" alt="">
                </span>
              </div>
          </div>
         </div>
        <a :href="shopInfo.shopUrl">进店逛逛</a>
  </div>
</template>

<script>
export default {
    props:{
    shopInfo:{
    type:Object,
    default(){
        return {}
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
.shop-info{
    padding:20px 6px;
    border-bottom: 6px solid #ddd;

}
.shop-logo{
    float: left;
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 25px;
}
.shop-logo img{
    width: 100%;
    height: 100%;
    border-radius: 25px;
    vertical-align: middle;
}
.shop-name{
    font-size: 16px;
    margin-left: 60px;
    line-height: 50px;
}

.item-info{
    flex:1;
    padding:10px;
    text-align: center;
    font-size: 14px;
}
.shop-sells{
    float: left;
    width: 50%; 
}
.shop-all{
    float: left;
    width: 50%;
    border-right: 1px solid #ccc;
    padding-right: 10px;
}
.shop-score{
    display: flex;
    height: 60px;
}
.score{
    flex: 1;
    font-size: 12px;
}
.score div{
    display: flex;
}
.score span{
   flex: 1;
   margin: 0 2px;
}
.score span:first-child{
    margin-right: 20px;
}
.score img{
width: 16px;
height: 16px;
vertical-align: middles;
}
.shop-info a{
    display: block;
    text-decoration: none;
    width: 40%;
    height: 30px;
    margin: 20px auto;
    text-align: center;
    line-height: 30px;
    color: brown;
    background-color: #ccc;
}
.green{
    color:green;
}
.red{
    color:red;
}

</style>