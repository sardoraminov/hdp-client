<template>
  <div
    id="about-exam"
    class="about_exam-part bg-primary text-white py-8 sm:px-20 px-4"
  >
    <div class="part-titles">
      <h1
        data-aos="fade-up"
        class="part-title sm:text-3xl text-2xl font-extrabold font-mont"
      >
        Kurslarimizga yozilmoqchimisiz? Unda kirish imtihonlarini topshiring!
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="120"
        class="part-desc sm:text-lg text-base font-medium font-manr mt-5"
      >
        Biz o'quvchilarni kurslarimizga qabul qilshni oson va soddalashtirish
        uchun online imtihonlar tizimini tashkil qildik. Bunda siz o'zingizga
        kerakli bo'lgan kurs imtihonini tanlab, imtihonga kirishingiz va
        berilgan test, topshiriqlarni bajarishingiz kerak bo'ladi.
        Natijalaringiz va ma'lumotlaringiz serverimizga jo'natiladi va
        adminstratsiya tomonidan ko'rib chiqiladi.
      </p>
    </div>
    <button
      data-aos="fade-up"
      data-aos-delay="320"
      class="part-btn mt-5 p-[20px] bg-white text-primary rounded-md font-manr text-xl font-bold transition-all hover:shadow-primary-darken hover:shadow-lg"
    >
      Mavjud imtihonlar
    </button>
  </div>
</template>
<style scoped>
.about_exam-part {
  width: calc(100% + 160px);
  margin: 0 -80px;
}

@media (max-width: 639px) {
  .about_exam-part {
    width: calc(100% + 64px);
    margin: 0 -32px;
    padding: 32px;
  }
}
</style>
