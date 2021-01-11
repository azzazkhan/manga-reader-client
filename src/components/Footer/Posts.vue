<template>
  <div>
    <h2
      class="mb-2 text-3xl font-semibold tracking-wide uppercase font-primary"
    >
      Recent Posts
    </h2>
    <div class="flex flex-col space-y-1">
      <article
        class="relative flex p-3 space-x-4 overflow-hidden cursor-pointer select-none rounded-xl hover:bg-gray-800"
        style="max-width: 420px; z-index: 2"
        v-for="post in posts"
        :key="post.slug"
      >
        <img
          :src="require(`@/assets/img/comics/${post.slug}.jpg`)"
          class="flex-grow-0 flex-shrink-0 object-cover rounded-lg"
          style="height: 86px; width: 86px"
          :alt="post.title"
        />
        <div class="flex flex-col items-stretch justify-between">
          <div class="font-primary">
            <h4
              class="max-w-full text-xl font-medium truncate w-72"
              v-text="post.title"
            ></h4>
            <span class="text-yellow-500">Chapter {{ post.chapter }}</span>
          </div>
          <span class="text-sm text-gray-400"
            >Updated {{ post.updated }} ago</span
          >
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import posts from "@/data/latest.json";
export default {
  name: "FooterRecentPosts",
  data: () => ({
    posts,
  }),
};
</script>