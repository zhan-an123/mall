<!--  -->
<template>
  <div class="recommend-item" @click="recommendClick">
    <img :src="recommendItem.image" alt="">
    <div>
        <p>{{recommendItem.title}}</p>
        <span class="price">{{recommendItem.discountPrice}}</span>
        <span>{{recommendItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommendItem:{
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
  methods: {
    recommendClick(){
      this.$router.push('/detail/'+this.recommendItem.item_id);
    }
  },
}
</script>
<style scoped>
.recommend-item{
    width: 48%;
    text-align: center;
    font-size: 14px;
    color: var(--color-high-text);
   
} 
.recommend-item img {
    width: 100%;
    height: 80%;
    margin-bottom: 5%;
    border-radius: 5px;
}
.recommend-item p{
    
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