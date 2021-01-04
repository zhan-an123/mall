<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-fashion></home-fashion>
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backtop/BackTop'


import HomeSwiper from './childcomps/HomeSwiper'
import HomeRecommend from './childcomps/HomeRecommend'
import HomeFashion from './childcomps/HomeFashion'

import {getHomeMultidata,
getHomeGoods} from 'network/home'
export default {
  data () {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
        },
        currentType:'pop',
        isShow:false
      };
  },
  components:{
    NavBar,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
    HomeRecommend,
    HomeFashion,
    
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods('pop'); 
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
    window.addEventListener('scroll',()=>{
      this.isShow=window.scrollY>200?true:false;
      if(window.scrollY>=document.body.clientHeight){
        this.getHomeGoods(this.currentType);
      }
    });
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    /**
     * 监听方法
     */

    /**
     * 切换点击
     */
    tabClick(index){
        switch(index){
          case 0:
            this.currentType='pop';
            break;
          case 1:
            this.currentType='new';
            break;
          case 2:
            this.currentType='sell';
            break;
       }
},
/**
 * 返回顶部 
 */
backClick(){
  window.scrollTo(0,0);
},

    /** 
     * 网络请求方法 */
    // 请求多个数据
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        // this.result=res;
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
    })
    },
    /**
     * 请求商品数据
     */
    getHomeGoods(type){
      const page=this.goods[type].page+1;
        getHomeGoods(type,page).then(res=>{
         this.goods[type].list.push(...res.data.list);
         this.goods[type].page++;
    })
  } 
  },
}

</script>
<style scoped>
.home-nav{
  position: sticky;
  top:0;
  color: #fff;
  background-color:var(--color-tint);
  box-shadow: 0px 1px 1px rgba(100, 100, 100, .2);
}
.tab-control{
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>