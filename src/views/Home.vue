<template>
  <div id="HomeView"></div>
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
