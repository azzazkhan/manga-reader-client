<template>
  <span
    :class="`icon-button relative flex items-center justify-start h-10 px-2 mb-2 rounded-lg cursor-pointer select-none  lg:p-0 lg:m-0 lg:justify-center lg:w-10 lg:inline-flex lg:top-2 ${
      active ? 'bg-indigo-600 active' : 'hover:bg-gray-300'
    }`"
  >
    <span v-if="hasNotification" class="absolute top-0 right-0 flex w-3 h-3">
      <span
        class="absolute inline-flex w-full h-full bg-red-400 rounded-full opacity-75 animate-ping"
      ></span>
      <span class="relative inline-flex w-3 h-3 bg-red-500 rounded-full"></span>
    </span>
    <img
      v-if="active"
      :src="require(`@/assets/img/icon-${icon}-white.svg`)"
      alt="Bell Icon"
    />
    <img
      v-else
      :src="require(`@/assets/img/icons/${icon}-purple.svg`)"
      alt="Bell Icon"
    />
    <span class="ml-2 lg:hidden lg:m-0" v-text="label"></span>
  </span>
</template>

<script>
export default {
  name: "IconButton",
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    hasNotification: Boolean,
    active: Boolean,
  },
};
</script>