<template>
  <div class="px-10 pb-20">
    <h1 class="mb-6 text-4xl font-semibold font-primary">New Mangas</h1>
    <div
      class="grid grid-flow-row grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
    >
      <div
        v-for="manga in comics"
        :key="manga.slug"
        class="relative inline-block overflow-hidden bg-cover shadow-lg rounded-xl card group dark"
        :style="
          'background-image: url(\'' +
          require(`@/assets/img/comics/${manga.slug}.jpg`) +
          '\')'
        "
      >
        <div
          class="absolute inset-0 flex flex-col justify-between p-3 transition-opacity duration-300 opacity-0 overlay group-hover:opacity-100"
        >
          <h3
            class="w-full text-2xl font-semibold text-white truncate font-primary title"
            v-text="manga.title"
          ></h3>
          <button
            class="flex items-center justify-center h-10 font-medium text-white bg-indigo-600 rounded-md font-primary"
          >
            Sore o yonde!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comics from "@/data/comics.json";
export default {
  name: "CardsGrid",
  data: () => ({
    comics,
  }),
};
</script>

<style lang="scss" scoped>
.card {
  height: 350px;
  width: 100%;
  &.dark .overlay {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }
  .overlay {
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    .title {
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>