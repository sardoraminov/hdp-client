<script setup>
import waiting from "~/assets/img/waiting.jpg";

const goHome = () => {
  window.location.href = "/";
};
</script>

<template>
  <div class="exams min-h-screen flex flex-col items-center justify-center">
    <div class="img w-[350px]">
      <img :src="waiting" class="w-full" alt="wait" />
    </div>
    <div class="content text-center border-t-2 border-gray py-3 mt-8">
      <h1 class="text-primary text-3xl font-extrabold font-mont">Oopppss!</h1>
      <p class="text-base font-manr font-semibold">
        Tizim hozircha to'liq ishga tushgani yo'q. Sabr qiling :)
      </p>
      <button
        class="btn bg-primary text-white rounded px-4 py-2 text-xl mt-3"
        @click="goHome()"
      >
        Bosh sahifa
      </button>
    </div>
  </div>
</template>
