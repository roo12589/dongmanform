<template>
  <div>
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
// import Footer from "./components/Footer.vue";
export default {
  name: "StartPage",
  components: { Header, Main },
};
</script>

<style>
</style>