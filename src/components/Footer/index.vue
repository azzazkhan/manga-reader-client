<template>
  <footer class="pt-10 text-white">
    <div
      class="grid grid-cols-1 gap-10 mx-10 lg:gap-5 lg:mx-5 2xl:mx-10 2xl:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <about-widget />
      <links-widget />
      <recent-posts />
      <social-links />
    </div>
    <div
      class="px-5 py-3 mt-10 text-center text-gray-300 copyright font-secondary"
    >
      Manga Raw &copy; 2021 &mdash; All rights under copyrights reserved
    </div>
  </footer>
</template>

<script>
import AboutWidget from "./About";
import LinksWidget from "./Links";
import RecentPosts from "./Posts";
import SocialLinks from "./Social";
export default {
  name: "Footer",
  components: {
    "about-widget": AboutWidget,
    "links-widget": LinksWidget,
    "recent-posts": RecentPosts,
    "social-links": SocialLinks,
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #191f28;
  .copyright {
    background-color: #10171f;
  }
}
</style>