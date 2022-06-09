<template>
  <div id="team" class="team-part">
    <div data-aos="fade-up" class="part-titles mt-14 text-center mb-8">
      <h1 class="title text-[30px] font-extrabold font-mont inline-block">
        Jamoa
        <img :src="teamImg" class="w-8 inline-block mb-2 ml-1" alt="team" />
      </h1>
      <p class="desc mt-1 font-manr text-base">
        Bugungi muvafaqqiyatimizning asosiy sababchilari hisoblangan fidoiy
        jamoamiz haqida
      </p>
    </div>
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      class="part-carousel relative pb-10"
    >
      <svg
        width="265"
        height="462"
        viewBox="0 0 265 462"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute -right-20 -top-[40px] -z-10"
      >
        <path
          d="M220.373 346.079C222.043 343.614 225.725 343.772 227.177 346.371L271.224 425.215C272.751 427.948 270.688 431.296 267.56 431.162L172.859 427.089C169.731 426.954 167.963 423.441 169.719 420.849L220.373 346.079Z"
          fill="url(#paint0_linear_124_25)"
        />
        <circle cx="200" cy="200" r="200" fill="#00B4D8" fill-opacity="0.12" />
        <defs>
          <linearGradient
            id="paint0_linear_124_25"
            x1="224.012"
            y1="340.707"
            x2="273.221"
            y2="502.337"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00B4D8" />
            <stop offset="1" stop-color="#98EEFF" />
          </linearGradient>
        </defs>
      </svg>

      <Carousel :breakpoints="breakpoints" :wrap-around="true" :autoplay="4000">
        <Slide v-for="(teacher, index) in team" :key="index">
          <div
            class="teacher bg-white border-2 cursor-grab rounded-md py-8 px-6 border-gray flex flex-col items-center select-none mx-4"
          >
            <div
              class="teacher-img p-4 mb-4 border-primary border-2 rounded-full"
            >
              <img
                class="w-[150px] h-[150px] rounded-full"
                :src="teacher.img"
                alt="teacher"
              />
            </div>
            <div class="teacher-info">
              <div class="top-info mb-4">
                <h3 class="teacher-name font-black font-mont text-xl">
                  {{ teacher.teacher }}
                </h3>
                <p
                  class="teacher-science font-medium font-manr text-primary text-opacity-80 uppercase"
                >
                  {{ teacher.science }}
                </p>
              </div>
              <p
                :class="[
                  'down-info teacher-desc font-manr',
                  teacher.teacher === 'Urinova Madinabonu'
                    ? 'text-sm'
                    : 'text-base',
                ]"
              >
                {{ teacher.about }}
              </p>
            </div>
          </div>
        </Slide>
      </Carousel>
      <svg
        width="226"
        height="400"
        viewBox="0 0 226 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute -left-20 top-[200px] -z-10"
      >
        <circle cx="26" cy="200" r="200" fill="#00B4D8" fill-opacity="0.12" />
      </svg>
    </div>
  </div>
</template>
<script setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import team1 from "~/assets/img/jamoa-1.jpg";
import team2 from "~/assets/img/jamoa-2.jpg";
import team3 from "~/assets/img/jamoa-3.jpg";
import team4 from "~/assets/img/jamoa-4.jpg";
import team5 from "~/assets/img/jamoa-5.jpg";
import team6 from "~/assets/img/jamoa-6.jpg";
import team7 from "~/assets/img/jamoa-7.jpg";
import team8 from "~/assets/img/jamoa-8.jpg";

import teamImg from "~/assets/img/team.png";
const team = [
  {
    teacher: "Jumaniyozov Xushnudbek",
    science: "Matematika o'qituvchisi",
    about:
      "Urganch Davlat Universiteti Iqtisodiyot Bakalavriyati hamda Germaniyaning Weihenstephen universiteti magistranti. Ayni damda HDP LC asoschisi va rahbari hamdir. Sohada 9 yillik tajribaga ega. 1000 dan ortiq shogirdlari nufuzli universitetlarda tahsil olib kelishmoqda",
    img: team1,
  },
  {
    teacher: "Fayzullayev Bexzodbek",
    science: "Matematika o'qituvchisi",
    about: `UrDU Fizika-Matematika bakalavriyat hamda magistranti. Xalqaro "AKHIMO" olimpiadasida bronza, 2021-yil Sankt-Peterburg olimpiadasida kumush va "ITMO" turnirida oltin medallari sohibi. Fanda olimpiadaga tayyorlash bo'yicha 3 yillik tajribaga ega`,
    img: team2,
  },
  {
    teacher: "Erkinboyev Shoxruh",
    science: "Matematika o'qituvchisi",
    about:
      "HDP o'quv markazining dastlabki bitiruvchilaridan, 2017-yil UrDU kimyoviy texnologiya yo'nalishiga 1-grant asosida o'qishga qabul qilingan va hozirda 1-kurs magistranti. 300 dan ortiq shogirdlari nufuzli universitetlarda tahsil olib kelishmoqda. Sohada 5 yillik tajribaga ega",
    img: team3,
  },
  {
    teacher: "Yuldashev Odamboy",
    science: "Matematika o'qituvchisi",
    about:
      "O'quv markazimizning dastlabki bitiruvchilaridan biri. UrDU Iqtisodiyot yo'nalishiga eng yuqori ball bilan grant asosida o'qishga qabul qilingan. 200 dan ortiq shogirdlari nufuzli universitetlar talabasi bo'lishga muvaffaq bo'lgan. Ayni damda Gurlan filiali asoschisi",
    img: team4,
  },
  {
    teacher: "Bekberganov Alisher",
    science: "Fizika o'qituvchisi",
    about: ` UrDU Fizika-Matematika yo'nalishiga eng yuqori ball bilan grant asosida o'qishga qabul qilingan. Sohada 5 yildan ortiq tajribaga ega. 300 dan ortiq shogirdlari nufuzli universitetlar talabasi bo'lishgan. UrDU Fizika-Matematika bakalavriyat hamda magistraturani tugatgan`,
    img: team5,
  },
  {
    teacher: "Artikova Aziza",
    science: "General English o'qituvchisi",
    about:
      "UrDU filologiya yo'nalishini tugatgan. Pedagogika sohasida 5 yillik tajribaga ega. Hozirgi kunda 100 dan ortiq shogirdlarga ega. O'quvchilari ko'plab shahar va tuman olimpiadalarida g'olib bo'lishgan. Ingliz tili darajasi CEFR C1, IELTS 8",
    img: team6,
  },
  {
    teacher: "Urinova Madinabonu",
    science: "IELTS o'qituvchisi",
    about: ` UrDU Xorijiy filologiya fakulteti 4-bosqich talabasi hamda ko'plab xaqlaro va respublika konferensiyalari ishtirokchisi. 2020-yilda tashkil qilingan "Talentend Talentes in Tourism" loyihasi vitse-prezidenti. UNICEF tomonidan tashkil qilingan "U-report" loyihasining volontyori va loyiha menejeri. Ingliz tili bilish darajasi CEFR B1, IELTS 7. Ingliz tilidan dars berish bo'yicha 3 yillik tajribaga ega`,
    img: team7,
  },
  {
    teacher: "Rajabboyev Islombek",
    science: "Matematika o'qituvchisi",
    about:
      "HDP o'quv markazining muhtasham bitiruvchilaridan biri hisoblanadi. HDP Kids asoschisi. 4 yillik tajribaga ega mutaxassis. 200 dan ortiq bilimga chanqoq shogirdlarga ega. Ayni damda o'quv markazimizning ta'lim bo'yicha direktor o'rinbosari hisoblanadi.",
    img: team8,
  },
];
const breakpoints = {
  700: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  1585: {
    itemsToShow: 4.5,
    snapAlign: "start",
  },
  1128: {
    itemsToShow: 3.5,
    snapAlign: "start",
  },
  992: {
    itemsToShow: 3,
    snapAlign: "start",
  },
};
</script>
