<template>
  <div id="questions" class="questions-part pb-10">
    <div class="part-titles mt-20 text-center mb-8">
      <h1 class="title text-[30px] font-extrabold font-mont inline-block">
        Savollar
        <img
          :src="questions"
          class="w-8 inline-block mb-2 ml-1"
          alt="questions"
        />
      </h1>
      <p class="desc mt-1 font-manr text-base">
        O’quv markazimiz haqida bizga kelib tushadigan ba’zi savollarga javoblar
      </p>
    </div>
    <div class="part-sections relative">
      <svg
        width="254"
        height="481"
        viewBox="0 0 254 481"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute -left-24 top-[210px] -z-20"
        data-v-4dab0eaa=""
      >
        <circle
          cx="54"
          cy="200"
          r="200"
          fill="#00B4D8"
          fill-opacity="0.12"
          data-v-4dab0eaa=""
        ></circle>
        <circle
          cx="85.2345"
          cy="410.235"
          r="50"
          transform="rotate(38.3471 85.2345 410.235)"
          fill="url(#paint0_linear_109_39)"
          data-v-4dab0eaa=""
        ></circle>
        <defs data-v-4dab0eaa="">
          <linearGradient
            id="paint0_linear_109_39"
            x1="85.2345"
            y1="360.235"
            x2="135.235"
            y2="493.235"
            gradientUnits="userSpaceOnUse"
            data-v-4dab0eaa=""
          >
            <stop stop-color="#00B4D8" data-v-4dab0eaa=""></stop>
            <stop offset="1" stop-color="#98EEFF" data-v-4dab0eaa=""></stop>
          </linearGradient>
        </defs>
      </svg>
      <section class="section overflow-hidden rounded mb-6 font-manr">
        <div
          @click="openOne(0)"
          :class="[
            'section-title relative hover:bg-primary hover:text-white cursor-pointer rounded-t text-xl px-6 py-5 flex flex-row justify-between',
            opens[0] === true
              ? 'bg-primary text-white '
              : 'bg-white text-black border border-gray',
          ]"
        >
          <p class="ml-1 font-extrabold">
            HDP o’quv markazida tahsil olgan o’quvchilarning natijalari qanday?
          </p>
          <button :class="['btn', opens[0] === true ? 'opened' : '']"></button>
        </div>
        <div
          ref="0"
          :class="[
            'section-body transition-all border-primary bg-white px-6 rounded-b font-medium relative text-[18px]',
            opens[0] === true
              ? 'opened border-b-2 border-l-2 border-r-2 space-y-6 py-4'
              : 'closed',
          ]"
        >
          <p>
            Har yili o’quv markazimiz bitiruvchilarining 94% qismi o’zlari
            xohlagan oliy o’quv yurtlarining talabasi bo’lib kelishmoqda.
            Ulardan ayrimlari chet eldagi mashhur universitetlarda ham ta’lim
            olishmoqda
          </p>
        </div>
      </section>
      <section class="section overflow-hidden rounded mb-6 font-manr">
        <div
          @click="openOne(1)"
          :class="[
            'section-title relative hover:bg-primary hover:text-white cursor-pointer rounded-t  text-xl px-6 py-5 flex flex-row justify-between',
            opens[1] === true
              ? 'bg-primary text-white '
              : 'bg-white text-black border border-gray',
          ]"
        >
          <p class="ml-1 font-extrabold">
            Qanday vaqtlarda kurslarga yozilish mumkin?
          </p>
          <button :class="['btn', opens[1] === true ? 'opened' : '']"></button>
        </div>
        <div
          ref="1"
          :class="[
            'section-body transition-all overflow-hidden bg-white px-6  rounded-b font-medium relative text-[18px]',
            opens[1] === true
              ? 'opened border-primary border-b-2 border-l-2 border-r-2  py-4'
              : 'closed',
          ]"
        >
          <p class="mb-2">
            O'quvchilar o'zlariga qulay vaqtlarda HDP filiallaridan biriga
            borishi, yoki veb-saytimizdan tegishli kurslar bo'yicha online
            imtihonlardan o'tib yozilishlari mumkin.
          </p>

          <button class="exam-link flex flex-row items-center">
            <ion-icon class="mr-3" name="rocket-outline"></ion-icon>
            Mavjud imtihonlar
          </button>
        </div>
      </section>
      <section class="section overflow-hidden rounded mb-6 font-manr">
        <div
          @click="openOne(2)"
          :class="[
            'section-title relative hover:bg-primary hover:text-white cursor-pointer rounded-t  text-xl px-6 py-5 flex flex-row justify-between',
            opens[2] === true
              ? 'bg-primary text-white '
              : 'bg-white text-black border border-gray',
          ]"
        >
          <p class="ml-1 font-extrabold">Qanday o'qituvchilar ta'lim beradi?</p>
          <button :class="['btn', opens[2] === true ? 'opened' : '']"></button>
        </div>
        <div
          ref="2"
          :class="[
            'section-body transition-all overflow-hidden bg-white px-6  rounded-b font-medium relative text-[18px]',
            opens[2] === true
              ? 'opened border-primary border-b-2 border-l-2 border-r-2  py-4'
              : 'closed',
          ]"
        >
          <p class="mb-2">
            Darslarni kamida 4-10 yillik tajribaga ega o'qituvchilar olib
            boradi. Har bir guruhga kamida asosiy o'qituvchidan tashqari 2 ta
            yordamchi o'qituvchi biriktiriladi.
          </p>
        </div>
      </section>
      <section class="section overflow-hidden rounded mb-6 font-manr">
        <div
          @click="openOne(3)"
          :class="[
            'section-title relative hover:bg-primary hover:text-white cursor-pointer rounded-t  text-xl px-6 py-5 flex flex-row justify-between',
            opens[3] === true
              ? 'bg-primary text-white '
              : 'bg-white text-black border border-gray',
          ]"
        >
          <p class="ml-1 font-extrabold">Qachon natijalarni sezish mumkin?</p>
          <button :class="['btn', opens[3] === true ? 'opened' : '']"></button>
        </div>
        <div
          ref="3"
          :class="[
            'section-body transition-all overflow-hidden bg-white px-6  rounded-b font-medium relative text-[18px]',
            opens[3] === true
              ? 'opened border-primary border-b-2 border-l-2 border-r-2  py-4'
              : 'closed',
          ]"
        >
          <p class="mb-2">
            Yaxshi natijalarga erishish asosan, o'quvchilarning o'zlariga
            bog'liq. Markazimizga o'zida intilish kuchli bo'lgan o'quvchilarni
            qabul qilishimizning sababi ham shunda. Aynan har oy oxirida bo'lib
            o'tadigan test sinovlari o'quvchining qay darajada ekanligi va
            natijalarini aniqlab beradi.
          </p>
        </div>
      </section>
      <section class="section overflow-hidden rounded mb-6 font-manr">
        <div
          @click="openOne(4)"
          :class="[
            'section-title relative hover:bg-primary hover:text-white cursor-pointer rounded-t  text-xl px-6 py-5 flex flex-row justify-between',
            opens[4] === true
              ? 'bg-primary text-white '
              : 'bg-white text-black border border-gray',
          ]"
        >
          <p class="ml-1 font-extrabold">HDP da qanday chegirmalar bor?</p>
          <button :class="['btn', opens[4] === true ? 'opened' : '']"></button>
        </div>
        <div
          ref="4"
          :class="[
            'section-body transition-all overflow-hidden bg-white px-6  rounded-b font-medium relative text-[18px]',
            opens[4] === true
              ? 'opened border-primary border-b-2 border-l-2 border-r-2  py-4'
              : 'closed',
          ]"
        >
          <p class="mb-2">
            Bizda chegirmalar turlari quyidagicha. Agar bir oiladan ikkita
            farzand o'quv markazimizda ta'lim olsa, imtiyoz beriladi. Agar
            o'quvchilar o'z tanishlari, do'stlari va yaqinlarini o'quv
            markazimizga ta'lim olish uchun taklif qilsa ma'lum miqdorda
            chegirmalar beriladi. Hozircha chegirmalarimiz faqat shular.
          </p>
        </div>
      </section>
      <section class="section overflow-hidden rounded mb-6 font-manr">
        <div
          @click="openOne(5)"
          :class="[
            'section-title relative hover:bg-primary hover:text-white cursor-pointer rounded-t  text-xl px-6 py-5 flex flex-row justify-between',
            opens[5] === true
              ? 'bg-primary text-white '
              : 'bg-white text-black border border-gray',
          ]"
        >
          <p class="ml-1 font-extrabold">Markazda qanday kurslar mavjud?</p>
          <button :class="['btn', opens[5] === true ? 'opened' : '']"></button>
        </div>
        <div
          ref="5"
          :class="[
            'section-body transition-all overflow-hidden bg-white px-6  rounded-b font-medium relative text-[18px]',
            opens[5] === true
              ? 'opened border-primary border-b-2 border-l-2 border-r-2  py-4'
              : 'closed',
          ]"
        >
          <p class="mb-2">
            14 yoshdan katta o'quvchilarimiz uchun Matematika, Ingliz tili va
            Fizika kurslarimiz hamda, 14 yoshdan kichik bolajonlarimiz uchun esa
            Matematika KIDS, Ingliz tili KIDS, Prezident maktabiga tayyorlov va
            Mental arifmetika kabi kurslarimiz mavjud
          </p>
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped>
.exam-link ion-icon {
  --ionicon-stroke-width: 38px;
}
.exam-link {
  color: white;
  padding: 20px;
  border-radius: 8px;
  background: linear-gradient(144.08deg, #00b4d8 30.74%, #03045e 292.61%);
  transition: all 0.4s ease;
  background-size: 200% auto;
  margin-bottom: 10px;
  margin-top: 14px;
}
.exam-link:hover {
  background-position: right center;
}

@media (max-width: 457px) {
  .exam-link {
    width: 100%;
  }
}
.btn {
  outline: none;
  position: relative;
  width: 18px;
  height: 18px;
}

.btn::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 2px;
  background-color: #000000;
  transition: all 0.8s ease;
}
.btn::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2px;
  height: 100%;
  background-color: #000000;
  transition: all 0.3s ease;
}

.btn.opened::after {
  background: #fff;
  transform: translate(-50%, -50%) rotate(90deg);
}

.btn.opened::before {
  background: #fff;
  transform: translate(-50%, -50%) rotate(360deg);
}

.section-title:hover .btn::after,
.section-title:hover .btn::before {
  background-color: #fff;
}

.section-body {
  max-height: 0;
  transition: all 0.6s ease;
}

.section-body p {
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.section-body.closed p {
  opacity: 0;
}

.section-body.opened p {
  opacity: 1;
}

.section-title {
  transition: all 0.5s ease;
}

@media (max-width: 844px) {
  .btn {
    display: none;
  }
}
</style>
<script>
import questions from "~/assets/img/questions.png";

export default {
  data() {
    return {
      opens: [false, false, false, false, false, false],
      questions,
    };
  },
  methods: {
    openOne(index) {
      this.opens[index] = !this.opens[index];
      let el = this.$refs[index];

      this.opens[index] === true
        ? (el.style.maxHeight = el.scrollHeight + 52 + "px")
        : (el.style.maxHeight = 0);
    },
  },
};
</script>
