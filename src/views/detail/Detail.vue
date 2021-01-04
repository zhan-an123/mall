<!--  -->
<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
    <goods-comments :comments="rates"></goods-comments>
    <detail-info :detailInfo="detailInfo"></detail-info>
    <item-params :itemParams="itemParams"></item-params>
    <recommend :recommendList="recommendList"></recommend>
    <bottom-bar @click.native="addCart()"></bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar';
import DetailSwiper from './childcomps/DetailSwiper';
import DetailBaseInfo from './childcomps/DetailBaseInfo';
import DetailShopInfo from './childcomps/DetailShopInfo';
import DetailInfo from './childcomps/DetailInfo';
import GoodsComments from './childcomps/GoodsComments';
import ItemParams from './childcomps/ItemParams';
import BottomBar from './childcomps/BottomBar';

import Recommend from 'views/recommend/Recommend'

import {getDetail,Goods,ShopInfo,DetailImage,GoodsComment,GoodsParams,getRecommend} from 'network/detail'
export default {
  name:'Detail',
  data () {
    return {
        iid:null,
        topImages:[],
        goods:{},
        shopInfo:{},
        detailInfo:{},
        rates:{},
        itemParams:{},
        recommendList:[]
    };
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    GoodsComments,
    ItemParams,
    DetailInfo,
    Recommend,
    BottomBar
  },
  created() {
      this.iid=this.$route.params.iid;
      // 获取详情数据
      getDetail(this.iid).then(res=>{
        // console.log(res);
        const data=res.result;
        // 获取轮播图片
        this.topImages=data.itemInfo.topImages;
        // 获取商品基本信息
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        // 获取店铺信息
        this.shopInfo=new ShopInfo(data.shopInfo);
        // 获取商品详情图片和描述
        this.detailInfo=new DetailImage(data.detailInfo);
        // 获取商品评价
        this.rates=new GoodsComment(data.rate);
        //获取商品参数
        this.itemParams=new GoodsParams(data.itemParams.info,data.itemParams.rule);
      });
      // 获取推荐数据
      getRecommend().then(res=>{
        // console.log(res);
        this.recommendList=res.data.list;
      });
  },
  methods: {
    addCart(){
      // console.log('加入购物车成功');
      let product={};
      product.iid=this.iid;
      product.title=this.goods.title;
      product.image=this.topImages[0];
      this.$store.commit('addCart',product);
    }
  },
}
</script>
<style scoped>
</style>