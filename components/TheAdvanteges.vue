<template>
  <div id="advanteges" class="advantege-part overflow-hidden sm:px-20 px-4 pb-6">
    <div class="part-titles mt-10 text-center mb-8">
      <h1 class="title text-[30px] font-extrabold font-mont inline-block">
        Afzalliklar
        <img :src="champ" class="w-8 inline-block mb-2 ml-1" alt="champ" />
      </h1>
      <p class="desc mt-1 font-manr text-base">
        O’quv markazimizning har bir o’quvchisi quyidagi imkoniyatlarga ega
        bo’ladi
      </p>
    </div>
    <div class="part-sections relative font-manr mt-5">
      <svg
        width="306"
        height="462"
        viewBox="0 0 306 462"
        fill="none"
        class="absolute -right-28 -top-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M220.373 346.079C222.043 343.614 225.725 343.772 227.177 346.371L271.224 425.215C272.751 427.948 270.688 431.296 267.56 431.162L172.859 427.089C169.731 426.954 167.963 423.441 169.719 420.849L220.373 346.079Z"
          fill="url(#paint0_linear_112_24)"
        />
        <circle cx="200" cy="200" r="200" fill="#00B4D8" fill-opacity="0.12" />
        <defs>
          <linearGradient
            id="paint0_linear_112_24"
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

      <section class="section rounded mb-8">
        <div
          class="section-title rounded-t bg-primary text-xl px-6 py-5 text-white flex flex-row items-center"
        >
          <ion-icon name="book-outline"></ion-icon>
          <p class="ml-3 font-bold">Darsliklar mavjudligi</p>
        </div>
        <div
          class="section-body bg-white overflow-hidden rounded-b border-b-2 border-l-2 border-r-2 border-primary font-medium relative space-y-4 px-6 py-4 pb-6 text-[18px]"
        >
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
            <li class="font-extrabold">
              - HDP Kids matematika (2-8-sinf o’quvchilari uchun)
            </li>
            <li class="font-extrabold">- Kimyogarlar uchun matematika</li>
            <li class="font-extrabold">
              - HDP Matematika (majburiy fan sifatida)
            </li>
            <li class="font-extrabold">
              - HDP Matematika 2021 (baza, variantlar)
            </li>
            <li class="font-extrabold">- Milliy sertifikat uchun matematika</li>
            <li class="font-extrabold">
              - O’quvchilarni malakasini oshirish uchun alohida kitob
            </li>
          </ul>
        </div>
      </section>
      <section class="section overflow-hidden rounded mb-8">
        <div
          class="section-title rounded-t bg-primary text-xl px-6 py-5 text-white flex flex-row items-center"
        >
          <ion-icon name="compass-outline"></ion-icon>
          <p class="ml-3 font-bold">Markazimiz joylashuvi qulayligi</p>
        </div>
        <div
          class="section-body bg-white overflow-hidden rounded-b border-b-2 border-l-2 border-r-2 border-primary font-medium relative space-y-4 px-6 py-4 pb-6 text-[18px]"
        >
          <p>
            O’quv markazimizning bosh filiali Urganch shahrining markaziy
            qismida joylashgan bo’lib, deyarli hamma o’quvchilar uchun
            borish-kelish imkoniyati ancha oson hisoblanadi. Shu sababli
            o’quvchilarimiz darsga o’z vaqtidan kech kelish holatlari kam
            kuzatiladi. Bundan tashqari, viloyatning Gurlan tumanida ham
            markazimiz filiali faoliyat yuritib kelmoqda. Ularni pastda Google
            Maps orqali qizil markerda ko'rishingiz mumkin 😊
          </p>
          <div class="maps">
            <div class="map border-2 border-gray p-2">
              <p class="title mb-2">Bosh filial</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.7758044817074!2d60.61261601540251!3d41.56060769320162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc9eba4e2c17f%3A0x785527c74348e063!2sHDP%20o&#39;quv%20markazi!5e1!3m2!1sen!2s!4v1654280907067!5m2!1sen!2s"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full border-gray"
              ></iframe>
            </div>
            <div class="map mt-6 border-2 border-gray p-2">
              <p class="title mb-2">Gurlan filial</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d782.8639892655232!2d60.38589282923386!3d41.833589997938816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab8fd23d29ff77fd!2zNDHCsDUwJzAwLjkiTiA2MMKwMjMnMTEuMiJF!5e1!3m2!1sen!2s!4v1654280833786!5m2!1sen!2s"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.section ion-icon {
  --ionicon-stroke-width: 38px;
}

.btn-grad {
  background: linear-gradient(144.08deg, #00b4d8 30.74%, #03045e 292.61%);
  border-radius: 8px;
  padding: 20px;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

@media (max-width: 456px) {
  .btn-grad {
    padding: 20px;
    font-size: 18px;
    margin: 8px 0;
    width: 100%;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

<script setup>
import book from "~/assets/img/book.png";
import champ from "~/assets/img/champ.png";
</script>
