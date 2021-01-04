<!--  -->
<template>
       <div class="goods-item" @click="itemClick">
              <img :src="goodsItem.show.img" alt="">
          <div>
              <p>{{goodsItem.title}}</p>
              <span class="price">{{goodsItem.price}}</span>
              <span>{{goodsItem.cfav}}</span>
          </div>
      </div>
</template>

<script>
export default {
    props:{
         goodsItem:{
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
  methods:{
      itemClick(){
        //   console.log(this.goodsItem.iid);
         this.$router.push('/detail/'+this.goodsItem.iid);
      }
  }
}
</script>
<style scoped>
.goods-item{
    width: 48%;
    text-align: center;
    font-size: 14px;
    color: var(--color-high-text);
   
} 
.goods-item img {
    width: 100%;
    height: 80%;
    margin-bottom: 5%;
    border-radius: 5px;
}
.goods-item p{
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.price {
    color:var(--color-tint);
}
.price::after{
    content: "☆";
    margin: 0 4px 0 10px;

}
</style>