<template>
  <form
    class="relative block mb-5 lg:inline-block lg:m-0"
    @submit.prevent="search"
  >
    <input
      type="text"
      name="search_query"
      v-model="query"
      class="w-full h-10 pl-4 pr-10 text-sm bg-transparent border border-gray-400 rounded-full lg:w-72 focus:bg-white focus:border-gray-600"
      placeholder="Enter comic or novel name"
      aria-labelledby="Post search field"
    />
    <button
      type="submit"
      class="absolute top-0 right-0 flex items-center justify-center w-10 h-10 transform scale-95 rounded-full hover:bg-gray-200"
    >
      <img src="@/assets/img/icons/search-gray.svg" alt="Search Icon" />
      <span class="sr-only">Search</span>
    </button>
  </form>
</template>

<script>
export default {
  name: "HeaderSearchForm",
  data: () => ({
    query: "",
  }),
  methods: {
    search() {
      alert(`Searching for ${this.query}`);
      this.query = null;
    },
  },
};
</script>

<style>
</style>