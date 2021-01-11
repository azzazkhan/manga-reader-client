<template>
  <div id="HomeView">
    <!-- <h1 class="px-10 text-2xl font-semibold capitalize font-primary">
      Most Clicked Mangas
    </h1>
    <div class="new-comics-slider">
      <div
        v-for="(n, i) in 10"
        :key="i"
        class="overflow-hidden bg-gray-900 rounded-xl"
        style="height: 320px; width: 230px"
      ></div>
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
