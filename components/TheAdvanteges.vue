<template>
  <div id="advanteges" class="advantege-part sm:px-12 px-4 pb-6">
    <div class="part-titles mt-10 text-center mb-8">
      <h1 class="title text-[30px] font-extrabold font-mont inline-block">
        Afzalliklar
        <img :src="champ" class="w-8 inline-block mb-2 ml-1" alt="champ" />
      </h1>
      <p class="desc mt-1 font-manr text-xl">
        O’quv markazimizning har bir o’quvchisi quyidagi imkoniyatlarga ega
        bo’ladi
      </p>
    </div>
    <div class="part-sections font-manr">
      <section class="section  mb-8">
        <div
          class="section-title bg-primary text-xl px-6 py-5 text-white flex flex-row items-center"
        >
          <ion-icon name="book-outline"></ion-icon>
          <p class="ml-3 font-bold">Darsliklar mavjudligi</p>
        </div>
        <div class="section-body overflow-hidden rounded border-2 border-primary font-medium relative space-y-4 px-6 py-4 pb-6 text-base">
          <p>
            HDP darsliklari o’quv markazimizning tajribali ustozlari tomonidan
            HDP metodikasiga asoslangan holda yozilgan. Bu kitoblardan
            respublikamizning ko’plab viloyatlariga, xususan, Samarqand, Buxoro,
            Toshkent va Navoiydagi o’quv markazlar va shu jumladan Xorazm
            viloyatidagi 100 ga yaqin o’quv markazlar foydalanib kelishmoqda.
            Bundan tashqari, Rossiya federatsiyasining Dog’iston Respublikasiga
            ham kitoblarimiz yetkazib berildi. Bu kitoblardan yiliga 10,000 dan
            ortiq nusxasi nashr qilinadi 😍
          </p>
          <p>
            HDP o’quv markazida esa o’quvchilarga shu kitoblarni yozgan
            o’qituvchilar dars berishadi 😉
          </p>
          <ul class="space-y-3">
            <p>Bizning hozircha quyidagi darsliklarimiz mavjud:</p>
            <li class="font-extrabold">- HDP Matematika</li>
            <li class="font-extrabold">- HDP Kids matematika (2-8-sinf o’quvchilari uchun)</li>
            <li class="font-extrabold">- Kimyogarlar uchun matematika</li>
            <li class="font-extrabold">- HDP Matematika (majburiy fan sifatida)</li>
            <li class="font-extrabold">- HDP Matematika 2021 (baza, variantlar)</li>
            <li class="font-extrabold">- Milliy sertifikat uchun matematika</li>
            <li class="font-extrabold">- O’quvchilarni malakasini oshirish uchun alohida kitob</li>
          </ul>
          <img class="absolute -z-10 w-[400px] h-[400px] right-0 -bottom-20 rotate-45 opacity-30" :src="book" alt="book">
        </div>
      </section>
      <section class="section overflow-hidden rounded border-2 border-primary mb-8">
        <div
          class="section-title bg-primary text-xl px-6 py-5 text-white flex flex-row items-center"
        >
          <ion-icon name="book-outline"></ion-icon>
          <p class="ml-3 font-bold">Darsliklar mavjudligi</p>
        </div>
        <div class="section-body font-medium relative space-y-4 px-6 py-4 pb-6 text-base">
          <p>
            HDP darsliklari o’quv markazimizning tajribali ustozlari tomonidan
            HDP metodikasiga asoslangan holda yozilgan. Bu kitoblardan
            respublikamizning ko’plab viloyatlariga, xususan, Samarqand, Buxoro,
            Toshkent va Navoiydagi o’quv markazlar va shu jumladan Xorazm
            viloyatidagi 100 ga yaqin o’quv markazlar foydalanib kelishmoqda.
            Bundan tashqari, Rossiya federatsiyasining Dog’iston Respublikasiga
            ham kitoblarimiz yetkazib berildi. Bu kitoblardan yiliga 10,000 dan
            ortiq nusxasi nashr qilinadi 😍
          </p>
          <p>
            HDP o’quv markazida esa o’quvchilarga shu kitoblarni yozgan
            o’qituvchilar dars berishadi 😉
          </p>
          <ul class="space-y-3">
            <p>Bizning hozircha quyidagi darsliklarimiz mavjud:</p>
            <li class="font-extrabold">- HDP Matematika</li>
            <li class="font-extrabold">- HDP Kids matematika (2-8-sinf o’quvchilari uchun)</li>
            <li class="font-extrabold">- Kimyogarlar uchun matematika</li>
            <li class="font-extrabold">- HDP Matematika (majburiy fan sifatida)</li>
            <li class="font-extrabold">- HDP Matematika 2021 (baza, variantlar)</li>
            <li class="font-extrabold">- Milliy sertifikat uchun matematika</li>
            <li class="font-extrabold">- O’quvchilarni malakasini oshirish uchun alohida kitob</li>
          </ul>
          <img class="absolute -z-10 w-[400px] h-[400px] right-0 -bottom-20 rotate-45 opacity-30" :src="book" alt="book">
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.section ion-icon {
  --ionicon-stroke-width: 38px;
}
</style>

<script setup>
import book from "~/assets/img/book.png";
import champ from "~/assets/img/champ.png";
</script>
