<template>
  <router-view></router-view>
</template>

<script setup>
import logo from "~/assets/img/logo-only.svg";
useHead({
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: true,
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Manrope:wght@200;300;400;500;600;700;800&family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    },
    {
      rel: "icon",
      type: "image/png",
      href: logo,
    },
  ],

  meta: [
    {
      name: "description",
      content:
        "Biz sizga nafaqat matematikani, balki matematik fikrlashni o'rgatamiz 🚀",
    },
  ],
  script: [
    {
      type: "module",
      src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",
    },
    {
      nomodule: true,
      src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",
    },
  ],
});
</script>

<style lang="css">
* {
  -webkit-tap-highlight-color: transparent;
}
</style>
