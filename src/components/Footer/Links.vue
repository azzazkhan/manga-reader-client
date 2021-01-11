<template>
  <div>
    <h2
      class="mb-5 text-3xl font-semibold tracking-wide uppercase font-primary"
    >
      Useful Links
    </h2>
    <div class="flex flex-col space-y-2">
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
        :class="`flex items-center w-4/5 truncate justify-start px-4 text-lg font-semibold tracking-wide rounded-lg cursor-pointer select-none h-11 ${
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