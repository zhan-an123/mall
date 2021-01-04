<!--  -->
<template>
<div class="shop-cart">
  <nav-bar class="shop-cart-nav">
    <div slot="center">购物车({{$store.getters.productListLength}})</div>
  </nav-bar>
  <ul>
    <li v-for="item in this.$store.state.productList" :key="item.iid" class="cart-item">
      <img :src="item.image" alt="">
      <span>{{item.title}}</span>
    </li>
  </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data () {
    return {
    };
  },
  components:{
    NavBar
  },
  methods: {}
}

</script>
<style scoped>
.shop-cart-nav{
  background-color: var(--color-tint);
  color: #fff;
  font-size: 16px;
}
.shop-cart ul {
  padding: 10px;
}
.cart-item{
  border-bottom: 2px solid #ddd;
}
.cart-item img{
  width: 15%;
}
</style>