<template>
  <section id="questions" class="questions-part">
    <div class="part-titles mt-20 text-center mb-8">
      <h1 class="title text-[30px] font-extrabold font-mont inline-block">
        Savollar
        <img :src="questions" class="w-8 inline-block mb-2 ml-1" alt="questions" />
      </h1>
      <p class="desc mt-1 font-manr text-base">
        O’quv markazimiz haqida bizga kelib tushadigan ba’zi savollarga javoblar
      </p>
    </div>
  </section>
</template>

<script setup>
import questions from "~/assets/img/questions.png";
</script>