<template>
  <div id="app">
    <Header class="hidden mb-10 lg:block" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style src="./assets/scss/app.scss" lang="scss"></style>