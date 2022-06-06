<template>
  <div class="course-card flex flex-col bg-white mx-4">
    <div class="card-top p-5 relative bg-primary flex items-center justify-end flex-col">
      <svg
        width="26"
        height="26"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="36" r="10" fill="#ADE8F4" />
        <circle cx="36" cy="10" r="10" fill="#fff" />
        <circle cx="10" cy="10" r="10" fill="#fff" />
        <circle cx="36" cy="36" r="10" fill="#fff" />
      </svg>
      <div
        class="top-img flex items-center bg-white p-7 rounded-full border border-gray"
      >
        <img class="w-10" :src="img" :alt="`course-${name}`" />
      </div>
    </div>
    <div class="card-body p-5 text-center border border-gray select-none">
      <h1 class="body-name mt-10 mb-4 font-mont text-xl font-extrabold">
        {{ name }}
      </h1>
      <p class="body-desc font-manr leading-7 opacity-80 mb-4 text-sm">
        {{ desc }}
      </p>
      <div class="body-down flex flex-row items-center justify-center space-x-8">
        <div class="down-item flex flex-row items-center">
          <ion-icon class="text-primary" name="time-outline"></ion-icon>
          <span class="ml-2">{{ duration }}</span>
        </div>
        <div class="down-item flex flex-row items-center">
          <ion-icon class="text-primary" name="book-outline"></ion-icon>
          <span class="ml-2">Mavjud</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-top {
  position: relative;
}

svg {
  position: absolute;
  top: 20px;
  left: 20px;
}

.top-img {
  transform: translateY(70%);
}
</style>

<script setup>
import logo from "~/assets/img/logo-only.svg";
const props = defineProps({
  img: String,
  duration: String,
  desc: String,
  name: String,
});
</script>
