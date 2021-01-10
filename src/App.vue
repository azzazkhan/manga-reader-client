<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/" class="font-bold">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style src="./assets/scss/app.scss" lang="scss"></style>