<template>
  <div id="HomeView">
    <h1>Most Clicked</h1>
    <div class="owl-carousel owl-theme">
      <div class="bg-black" style="height: 320px; width: 230px"></div>
    </div>
    <!-- <div class="flex space-x-5">
      <div
        v-for="(comic, index) in comics"
        :key="index"
        class="relative inline-block overflow-hidden rounded-lg"
      >
        <img
          :src="require(`@/assets/img/comics/${comic.slug}.jpg`)"
          :alt="comic.title"
          style="height: 320px; width: 230px; max-width: auto"
        />
        <div class="absolute inset-0 content">
          <span
            class="max-w-full text-white truncate font-primary"
            style="text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.35)"
            v-text="comic.title"
          ></span>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import comics from "@/data/comics.json";

export default {
  name: "Home",
  data: () => ({
    comics,
  }),
};
</script>
