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
          <HeaderSearchForm />
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
    <sub-header :items="categories" />
  </div>
</template>

<script>
import IconButton from "./IconButton.vue";
import Profile from "./Profile";
import HeaderSearchForm from "./Search";
import SubHeader from "./SubHeader";

export default {
  name: "Header",
  components: {
    Profile,
    HeaderSearchForm,
    "icon-button": IconButton,
    "sub-header": SubHeader,
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