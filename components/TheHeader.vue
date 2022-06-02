<template>
  <div class="header-part">
    <div class="header-img">
      <img :src="pretty" alt="pretty-girl" />
    </div>
    <div
      class="header-content flex flex-col justify-between md:px-16 md:py-12 py-8 px-10 w-[45%] h-full absolute right-0 top-0 bg-white"
    >
      <h1 class="c-logo">
        <img :src="logo" class="logo" alt="logo-hdp" />
      </h1>
      <div class="c-titles">
        <h1 class="title font-mont font-extrabold text-[42px] leading-[58px]">
          <span class="text-primary">Birinchi</span> imtihonning o’zidayoq
          talaba bo’ling!
        </h1>
        <p class="desc font-manr text-xl mt-3">
          Har yili o’quv markazimiz bitiruvchilarining 94% qismi o’zlari
          xohlagan oliy o’quv yurtlarining talabasi bo’lib kelishmoqda
        </p>
        <button
          @click="getVideo()"
          class="play-btn hover:shadow-lg font-manr flex flex-row items-center btn-grad mt-4"
        >
          <ion-icon class="mr-3" name="play-outline"></ion-icon>
          Batafsil videoda ko’rish
        </button>
      </div>
      <div class="c-down flex flex-row items-center">
        <a
          href="tel:+998996206600"
          class="flex phone flex-row items-center mr-4 transition-all hover:text-primary hover:fill-primary font-manr"
        >
          <ion-icon name="call-outline" class="mr-1"></ion-icon>
          (99) 620 66-00
        </a>
        <a
          href="https://www.google.com/maps/place/HDP+o'quv+markazi/@41.5602665,60.6136889,17z/data=!4m5!3m4!1s0x41dfc9eba4e2c17f:0x785527c74348e063!8m2!3d41.5606037!4d60.6148047"
          target="_blank"
          class="flex flex-row location items-center transition-all hover:text-primary hover:fill-primary font-manr"
        >
          <ion-icon name="location-outline" class="mr-1"></ion-icon>
          Urganch shahar
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import pretty from "~/assets/img/pretty.jpg";
import logo from "~/assets/img/logo.svg";
const router = useRouter();

const getVideo = () => {
  window.open("https://www.youtube.com/watch?v=v8LhIphSQC8", "_blank");
};
</script>

<style scoped>
.header-part {
  position: relative;
  height: 100vh;
}

.header-part .header-img {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 55%;
}

.header-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1054px) {
  .header-content {
    width: 65%;
  }
  .header-part .header-img {
    width: 60%;
  }
}

@media (max-width: 557px) {
  .header-img {
    display: none;
  }
  .header-content {
    width: 100%;
    top: 0;
    left: 0;
  }
}

@media (max-width: 443px) {
  .header-content .title {
    text-align: center;
    font-size: 30px;
    line-height: 40px;
  }

  .header-content .desc {
    font-size: 16px;
    text-align: center;
  }

  .c-down {
    align-items: center;
  }
}

@media (max-width: 426px) {
  .header-content {
    padding: 20px;
  }
  .c-down {
    flex-direction: column;
  }
  .phone {
    margin-right: 0;
    margin-bottom: 8px;
  }
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
</style>
