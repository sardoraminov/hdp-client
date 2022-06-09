<template>
  <div id="questions" class="questions-part">
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
    <div class="part-sections">
      <section class="section overflow-hidden rounded mb-8 font-manr">
        <div
          @click="openOne(0)"
          :class="[
            'section-title relative hover:bg-primary-darken cursor-pointer rounded-t bg-primary text-xl px-6 py-5 text-white flex flex-row justify-between',
            opens[0] === true ? 'bg-primary-darken  ' : '',
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
      <section class="section overflow-hidden rounded mb-8 font-manr">
        <div
          @click="openOne(1)"
          :class="[
            'section-title relative hover:bg-primary-darken cursor-pointer rounded-t bg-primary text-xl px-6 py-5 text-white flex flex-row justify-between',
            opens[1] === true ? 'bg-primary-darken  ' : '',
          ]"
        >
          <p class="ml-1 font-extrabold">
            HDP o’quv markazida tahsil olgan o’quvchilarning natijalari qanday?
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
          <p class="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            laborum distinctio, quisquam odio, quos impedit inventore explicabo
            at voluptatum officiis ad? Odio voluptate tempore sed dolor saepe.
            Eum vitae placeat, praesentium facilis architecto voluptatibus
            delectus dolores neque aperiam ipsam blanditiis sapiente distinctio,
            tempore aliquid aspernatur, harum quasi accusantium perferendis
            veritatis pariatur ut illum a exercitationem! Corporis velit,
            tempore minus aliquam, laboriosam voluptate quibusdam eius error,
            quasi explicabo magnam dolorum molestiae accusamus porro ipsum in!
            Obcaecati recusandae voluptatum magnam fugit ex delectus eligendi
            ipsam esse debitis similique laboriosam ducimus ab quo, placeat quam
            maxime nostrum laudantium sequi porro enim! Non, perferendis! Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Quos numquam
            repellat eius error aliquam ipsam, accusantium fugit porro saepe,
            impedit cumque illo voluptatem maxime ratione. Nostrum, quae. Cum
            quia ut ullam aut alias maiores. Animi impedit vel consectetur
            facilis quis.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped>
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
  background-color: #fff;
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
  background-color: #fff;
  transition: all 0.3s ease;
}

.btn.opened::after {
  transform: translate(-50%, -50%) rotate(90deg);
}

.btn.opened::before {
  transform: translate(-50%, -50%) rotate(360deg);
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
        ? (el.style.maxHeight = (el.scrollHeight + 52) + "px")
        : (el.style.maxHeight = 0);
    },
  },
};
</script>
