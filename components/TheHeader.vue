<template>
  <div class="header-part">
    <div class="header-img">
      <img :src="pretty" alt="pretty-girl" />
    </div>
    <div
      class="header-content flex flex-col justify-between sm:px-16 sm:py-12 w-[45%] h-full absolute right-0 top-0 bg-white"
    >
      <h1 class="c-logo">
        <img :src="logo" class="logo" alt="logo-hdp" />
      </h1>
      <div class="c-titles">
        <h1 class="title font-mont font-extrabold text-[42px] leading-[58px]">
          <span class="text-primary">Birinchi</span> imtihonning o’zidayoq
          talaba bo’ling!
        </h1>
        <p class="desc font-manr text-xl mt-3">
          Har yili o’quv markazimiz bitiruvchilarining 94% qismi o’zlari
          xohlagan <br />
          oliy o’quv yurtlarining talabasi bo’lib kelishmoqda
        </p>
      </div>
      <div class="c-down flex flex-row items-center space-x-8">
        <a
          href="tel:+998999447613"
          class="flex flex-row items-center transition-all hover:text-primary hover:fill-primary font-manr"
        >
          <ion-icon name="call-outline" class="mr-1"></ion-icon>
          +998 (99) 944 76-13
        </a>
        <a
          href="https://www.google.com/maps/place/HDP+o'quv+markazi/@41.5602665,60.6136889,17z/data=!4m5!3m4!1s0x41dfc9eba4e2c17f:0x785527c74348e063!8m2!3d41.5606037!4d60.6148047"
          target="_blank"
          class="flex flex-row items-center transition-all hover:text-primary hover:fill-primary font-manr"
        >
          <ion-icon name="location-outline" class="mr-1"></ion-icon>
          Urganch shahar
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import pretty from "~/assets/img/pretty.jpg";
import logo from "~/assets/img/logo.svg";
</script>

<style scoped>
.header-part {
  position: relative;
  height: 100vh;
}

.header-part .header-img {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 55%;
}

.header-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
