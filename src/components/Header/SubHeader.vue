<template>
  <header
    class="flex px-10 py-2 bg-indigo-600 shadow-xl select-none secondary"
    id="SubHeaderComponent"
  >
    <span
      v-for="(item, index) in items"
      :key="index"
      class="px-4 py-2 text-sm font-medium text-white uppercase rounded cursor-pointer min-w-max font-primary hover:bg-indigo-500"
      v-text="item"
    ></span>
  </header>
</template>

<script>
export default {
  name: "SubHeader",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>