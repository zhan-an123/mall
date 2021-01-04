<!--  -->
<template>
  <div id="bottom-bar">
      <div class="add-car" @click="addCartClick()">加入购物车</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  methods: {
    addCartClick(){
      this.$router.replace('/shopcart');
    }
  },
}
</script>
<style scoped>
#bottom-bar{
  position: sticky;
  bottom: 49px;
  width:100%;
  height: 49px;
  padding: 6px;
  background-color: #fff;
  text-align: center;
  line-height: 40px;
}
#bottom-bar .add-car{
  color: #fff;
  font-size: 16px;
  border-radius: 10px;
  background-color:salmon;
}
</style>