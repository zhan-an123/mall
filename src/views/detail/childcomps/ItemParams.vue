<!--  -->
<template>
  <div class="item-params">
      <h3 class="info-title">产品参数</h3>
      <table cellspacing="0">
          <tr v-for="(item,index) in itemParams.info" :key="index">
              <td>{{item.key}}</td>
              <td>{{item.value}}</td>
          </tr>
      </table>
      <p></p>
      <h3 class="info-title">尺码说明</h3>
      <table cellspacing="0">
          <tr v-for="(item,index) in itemParams.sizes" :key="index">
              <td>{{item[0]}}</td>
              <td>{{item[1]}}</td>
              <td>{{item[2]}}</td>
              <td>{{item[3]}}</td>
          </tr>
      </table>
      <p class="intro">※ 以上尺寸为实物人工测量，因测量当时不同会有1-2cm误差，相关数据仅作参考，以收到实物为准。</p>
      <img :src="itemParams.image" alt="">
  </div>
</template>

<script>
export default {
    props:{
        itemParams:{
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
.item-params{
    border-bottom:8px solid #ddd;
    text-align: center;
}
.info-title{
    font-weight: normal;
    text-align: center;
    font-size: 16px;
    margin-top: 14px;
}
table,
tr,
td{
    border: 1px solid grey;
    border-collapse: collapse;
}
.item-params table{
    width: 100%;
    padding:4px 6px;
}
.item-params tr{
    font-size: 12px;
    padding: 0 10px;
}
.item-params tr td:first-child{
    width: 30%;
    margin-right: 10px;
    font-size: 14px;
}
.intro{
    text-align: left;
    margin-top: 10px;
    padding: 0 20px;
    font-size: 12px;
    color:#bbb;
}
</style>