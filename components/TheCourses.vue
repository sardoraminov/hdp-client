<template>
  <div class="course-part h-screen px-4">
    <div class="part-titles mt-10 text-center mb-8">
      <h1 class="title text-[30px] font-extrabold font-mont inline-block">
        Kurslar <img :src="course" class="w-8 inline-block mb-2 ml-1" alt="course">
      </h1>
      <p class="desc mt-1 font-manr text-xl">
        Biz sizga sifatli, tajribali ustozlar tomonidan alohida metodikalar
        asosida o'tiladigan va asosiysi hamyonbop bo'lgan kurslarni taklif
        qilamiz
      </p>
    </div>
    <div class="part-courses mt-20 grid grid-cols-auto gap-6 sm:px-6">
      <div v-for="(course, index) in coursesInfo" :key="index" class="course border border-gray">
        <div class="course-top border-b border-b-gray flex flex-col items-center justify-center pt-9 pb-5">
          <div class="img">
            <img :src="course.img" class="w-16" :alt="course.name">
          </div>
          <h1 class="name mt-8 font-mont font-extrabold text-xl">{{course.name}}</h1>
        </div>
        <div class="course-body py-5 px-4 space-y-2 pb-6">
          <div class="body-item flex flex-row items-center">
            <ion-icon class="text-primary" name="time-outline"></ion-icon>
            <p class="item-desc ml-2 font-manr">{{course.duration}}</p>
          </div>
          <div class="body-item flex flex-row items-center">
            <ion-icon class="text-primary" name="book-outline"></ion-icon>
            <p class="item-desc ml-2 font-manr">Mavjud</p>
          </div>
          <div class="body-item font-manr">
            <ion-icon name="information-circle-outline" class="text-primary"></ion-icon>
            {{course.desc}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped></style>
<script setup>
import "vue3-carousel/dist/carousel.css";
import math from "~/assets/img/math-colored.png";
import english from "~/assets/img/english-colored.png";
import ielts from "~/assets/img/ielts.png";
import physics from "~/assets/img/physics.png";
import course from "~/assets/img/course.png"


const coursesInfo = reactive([
  {
    name: "Matematika",
    desc: "5-sinf mavzularidan to oliy matematikagacha bo’lgan mavzular maxsus darsliklar asosida o’tiladi",
    duration: "6 oy",
    img: math,
  },
  {
    name: "General English",
    desc: "Bu kurs beginner darajadagi o’rganuvchilar uchun bo’lib, asosan ingliz tili gramatikasining asosiy tamoyillarini qamrab oladi",
    duration: "6 oy",
    img: english,
  },
  {
    name: "Fizika",
    desc: "Modda tuzilishidan tortib, kvant fizikasigacha! Fizika kurslarimiz boshqa o'quv markazlarnikidan farq qiladi.",
    duration: "6 oy",
    img: physics,
  },
  {
    name: "IELTS Grammar",
    desc: "Kursda IELTS uchun zarur bo’lgan asosiy grammatika mavzulari qamrab olinadi",
    duration: "6 oy",
    img: ielts,
  }
]);
</script>
