<template>
  <div class="flex flex-col items-stretch justify-start space-y-10">
    <div>
      <h2
        class="mb-5 text-3xl font-semibold tracking-wide uppercase font-primary"
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
            style="height: 72px; width: 72px"
            :alt="network.replace('-', ' ')"
          />
        </span>
      </div>
    </div>
    <div>
      <h2
        class="mb-5 text-3xl font-semibold tracking-wide uppercase font-primary"
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
            style="height: 72px; width: 72px"
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