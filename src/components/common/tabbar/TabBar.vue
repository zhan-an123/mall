<template>
  <div id="tab-bar">
    <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'TabBar'
}
</script>
<style>
#tab-bar{
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  font-size: 14px;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 2px rgba(0,0,0, .1);
}
</style>
