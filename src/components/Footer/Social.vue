<template>
  <div class="flex flex-col items-stretch justify-start space-y-10">
    <div>
      <h2
        class="mb-5 text-2xl font-semibold tracking-wide uppercase 2xl:text-3xl font-primary"
      >
        Follow Us
      </h2>
      <div class="flex items-center justify-start space-x-4">
        <span
          class="cursor-pointer"
          v-for="(network, index) in [
            'Facebook',
            'Twitter',
            'Instagram',
            'YouTube',
          ]"
          :key="index"
        >
          <img
            :src="require(`@/assets/img/social/${network.toLowerCase()}.svg`)"
            class="icon"
            :alt="network.replace('-', ' ')"
          />
        </span>
      </div>
    </div>
    <div>
      <h2
        class="mb-5 text-2xl font-semibold tracking-wide uppercase 2xl:text-3xl font-primary"
      >
        Download our app
      </h2>
      <div class="flex items-center justify-start space-x-4">
        <span
          class="cursor-pointer"
          v-for="(network, index) in ['Play-Store', 'App-Store']"
          :key="index"
        >
          <img
            :src="require(`@/assets/img/social/${network.toLowerCase()}.svg`)"
            class="icon"
            :alt="network"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSocialLinks",
};
</script>

<style scoped>
.icon {
  height: 64px;
  width: 64px;
}
@media screen and (min-width: 1536px) {
  .icon {
    height: 72px;
    width: 72px;
  }
}
</style>