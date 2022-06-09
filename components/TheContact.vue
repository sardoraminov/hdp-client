<template>
  <div id="contact" class="contact-part mt-12">
    <div class="part-titles mt-7 text-center mb-8">
      <h1 class="title text-[30px] font-extrabold font-mont inline-block">
        Aloqa
        <img :src="contact" class="w-8 inline-block mb-2 ml-1" alt="contact" />
      </h1>
      <p class="desc mt-1 font-manr text-base">
        Bizga murojaat va shikoyatlaringiz bo'lsa pastdagi forma orqali
        yuborishingiz mumkin
      </p>
    </div>
    <form class="part-form border border-gray bg-[#E0F6FA] rounded">
      <div class="form-group flex flex-col">
        <label class="font-manr text-base">Ismingiz:</label>
        <input type="text" class="form-control" />
      </div>
    </form>
  </div>
</template>
<script setup>
import contact from "~/assets/img/contact.png";
</script>
