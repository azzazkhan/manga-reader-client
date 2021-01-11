<template>
  <div
    class="flex flex-col space-y-4 text-gray-400 text font-secondary"
    style="font-size: 1.05rem"
  >
    <router-link to="/">
      <img
        src="@/assets/img/logo-white.svg"
        style="width: 345px; height: 49px"
        alt="Manga Raw"
      />
    </router-link>
    <p>
      Read your favorite manga of any genere in both english and raw for free!
      Our team constantly look after to your requests so we can provide you with
      the best content. Support us to make this free forever, your small support
      can make a huge change on manga world.
    </p>
    <p>
      <span class="font-black">Manga Raw</span> and
      <span class="font-black">Manga Nation</span> are registed trademarks in
      U.S and elsewhere.
    </p>
  </div>
</template>

<script>
export default {
  name: "FooterAboutWidget",
};
</script>