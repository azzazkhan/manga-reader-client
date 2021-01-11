<template>
  <div class="sm:w-4/5 md:w-full">
    <h2
      class="mb-5 text-2xl font-semibold tracking-wide uppercase 2xl:text-3xl font-primary"
    >
      Useful Links
    </h2>
    <div class="flex flex-col space-y-1 2xl:space-y-2">
      <span
        v-for="(text, index) in [
          'About Us',
          'DCMA',
          'Manga',
          'Novels',
          'Privacy Policy',
          'Support Us',
        ]"
        :key="index"
        :class="`flex items-center sm:w-5/6 md:w-full truncate justify-start px-4 2xl:text-lg font-medium 2xl:font-semibold tracking-wide rounded-lg cursor-pointer select-none h-11 ${
          text.toLowerCase() == 'manga' ? 'bg-indigo-600' : 'hover:bg-gray-800'
        } font-primary`"
        v-text="text"
      >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterLinksWidget",
};
</script>