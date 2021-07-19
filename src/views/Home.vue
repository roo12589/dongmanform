<template>
  <div class="home">
    <!-- <p>home</p> -->

      <Header></Header>
      <Main></Main>
      <Footer></Footer>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: { Header,Main,Footer },
  data() {
    return {};
  },
};
</script>
<style>

</style>