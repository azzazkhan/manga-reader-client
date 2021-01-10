<template>
  <span
    class="relative flex items-center justify-start mt-5 cursor-pointer select-none lg:cursor-auto lg:inline lg:m-0"
  >
    <span @click="dropdown.opened = !dropdown.opened">
      <img
        src="@/assets/img/avatar-boy-mask.svg"
        class="inline-block w-10 h-10 cursor-pointer"
        alt="My Profile"
      />
      <span class="ml-2 lg:hidden">My Profile</span>
    </span>
    <!-- Dropdown -->
    <div
      v-if="dropdown.opened"
      class="absolute top-0 right-0 flex-col w-56 px-2 py-4 space-y-1 transform translate-y-10 bg-white border border-gray-100 rounded-lg shadow-lg"
    >
      <span
        v-for="(item, index) in dropdown.items"
        :key="index"
        class="flex items-center justify-start h-10 px-2 rounded-md cursor-pointer hover:bg-gray-300"
      >
        <i v-if="item.icon" :class="`${item.icon} mr-2`" aria-hidden="true"></i>
        <span v-text="item.label"></span>
      </span>
    </div>
  </span>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({
    dropdown: {
      opened: false,
      items: [
        {
          label: "Azzaz Khan",
        },
        {
          icon: "fas fa-sign-in-alt",
          label: "Sign In",
        },
        {
          icon: "fas fa-plus",
          label: "Sign Up",
        },
      ],
    },
  }),
};
</script>