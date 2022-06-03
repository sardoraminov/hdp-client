<template>
  <div id="courses" class="course-part mb-32 sm:px-4">
    <div class="part-titles mt-20 text-center mb-8 px-4">
      <h1 class="title text-[30px] font-extrabold font-mont inline-block">
        Kurslar
        <img :src="course" class="w-8 inline-block mb-2 ml-1" alt="course" />
      </h1>
      <p class="desc mt-1 font-manr text-xl">
        Biz sizga sifatli, tajribali ustozlar tomonidan alohida metodikalar
        asosida o'tiladigan va asosiysi hamyonbop bo'lgan kurslarni taklif
        qilamiz
      </p>
    </div>
    <div class="part-courses mt-24 sm:px-6 cursor-grab">
      <Carousel :breakpoints="breakpoints" :wrap-around="true" :autoplay="2000">
        <Slide v-for="(course, index) in coursesInfo" :key="index">
          <TheItem
            :img="course.img"
            :name="course.name"
            :desc="course.desc"
            :duration="course.duration"
          />
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
<style lang="css" scoped></style>
<script setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

import course from "~/assets/img/course.png";
import physics from "~/assets/img/physics.png";
import math from "~/assets/img/math-colored.png";
import english from "~/assets/img/english-colored.png";
import ielts from "~/assets/img/ielts.png";
import mental from "~/assets/img/mental.png";
const breakpoints = {
  700: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 3.5,
    snapAlign: "start",
  },
};
const coursesInfo = reactive([
  {
    name: "Matematika",
    duration: "6 oy",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
    img: math,
  },
  {
    name: "Fizika",
    duration: "6 oy",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
    img: physics,
  },
  {
    name: "General English",
    duration: "6 oy",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
    img: english,
  },
  {
    name: "IELTS",
    duration: "6 oy",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
    img: ielts,
  },
  {
    name: "Mental arifmetika",
    duration: "6 oy",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
    img: mental,
  },
  {
    name: "Matematika",
    duration: "6 oy",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
    img: math,
  },
  {
    name: "Fizika",
    duration: "6 oy",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
    img: physics,
  },
  {
    name: "General English",
    duration: "6 oy",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
    img: english,
  },
  {
    name: "IELTS",
    duration: "6 oy",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
    img: ielts,
  },
  {
    name: "Mental arifmetika",
    duration: "6 oy",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
    img: mental,
  },
]);
</script>
