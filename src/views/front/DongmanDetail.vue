<template>
  <div class="container">
    <Header></Header>
    <h2 class="dongman-title">满月之战</h2>
    <div class="dongman-detail">
      <div class="left">
        <img src="../../assets/images/mayue.png" alt="" srcset="">
      </div>
      <div class="right">
        
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../views/front/components/Header.vue";
export default {
  name: "DongmanDetail",
  components: { Header },
};
</script>

<style lang='scss' scoped>
.container {
  width: 90%;
  margin: 0 auto;
}
.dongman-detail {
  .dongman-title {
    text-align: left;
    margin: 5px;
  }
}
</style>