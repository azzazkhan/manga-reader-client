<template>
  <div>
    <header class="primary">
      <div class="flex items-center justify-between px-10 py-4 bg-white">
        <router-link to="/">
          <img src="@/assets/img/logo-gradient.svg" alt="Manga Raw" />
        </router-link>
        <nav
          class="fixed top-0 right-0 flex-col w-11/12 h-screen px-5 py-5 transform shadow-2xl bg-gray-50 lg:space-x-3 flex-column sm:w-3/5 md:w-2/5 lg:relative lg:w-auto lg:h-auto lg:p-0 lg:flex-row lg:justify-between lg:items-center lg:shadow-none lg:bg-transparent lg:-top-1"
        >
          <form
            class="relative block mb-5 lg:inline-block lg:m-0"
            @submit.prevent
          >
            <input
              type="text"
              name="search_query"
              class="w-full h-10 pl-4 pr-10 text-sm bg-transparent border border-gray-400 rounded-full lg:w-72 focus:bg-white"
              placeholder="Enter comic or novel name"
              aria-labelledby="Post search field"
            />
            <button
              type="submit"
              class="absolute top-0 right-0 flex items-center justify-center w-10 h-10 transform scale-95 rounded-full hover:bg-gray-300"
            >
              <img src="@/assets/img/icon-search-gray.svg" alt="Search Icon" />
              <span class="sr-only">Search</span>
            </button>
          </form>
          <icon-button
            v-for="(icon, index) in icons"
            :key="index"
            :icon="icon[0]"
            :label="icon[1]"
            :has-notification="index == 2"
          />
          <!-- Circle Avatar -->
          <Profile />
        </nav>
      </div>
    </header>
    <header
      class="flex px-10 py-2 bg-indigo-600 shadow-xl select-none secondary"
    >
      <span
        v-for="(item, index) in categories"
        :key="index"
        class="px-4 py-2 text-sm font-medium text-white uppercase rounded cursor-pointer min-w-max font-primary hover:bg-indigo-500"
        v-text="item"
      ></span>
    </header>
  </div>
</template>

<script>
import IconButton from "./IconButton.vue";
import Profile from "./Profile";

export default {
  name: "Header",
  components: {
    Profile,
    "icon-button": IconButton,
  },
  data: () => ({
    icons: [
      ["send", "Messages"],
      ["moon", "Dark Mode"],
      ["bell", "Notification"],
    ],
    categories: [
      "Action",
      "Fantasy",
      "Harem",
      "Isekai",
      "Manhua",
      "Mature",
      "Mystery",
      "Romance",
      "Sci Fi",
      "Seinen",
      "Shoujo",
      "Shounen",
      "Smut",
      "Sports",
      "Tragedy",
    ],
  }),
};
</script>