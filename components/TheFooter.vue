<template>
  <footer
    id="footer"
    class="footer-part sm:px-20 px-4 bg-primary text-white py-6"
  >
    <div class="grid grid-cols-auto gap-5 gap-y-8">
      <div data-aos="fade-up" class="links flex flex-col items-start">
        <p class="text-lg font-bold mb-4">Linklar</p>
        <a class="font-manr mb-2" href="#courses">Kurslar</a>
        <a class="font-manr mb-2" href="#advanteges">Afzalliklar</a>
        <a class="font-manr mb-2" href="#team">Jamoa</a>
        <a class="font-manr mb-2" href="#questions">Savollar</a>
        <a class="font-manr mb-2" href="#about-exam">Imtihonlar</a>
        <a class="font-manr" href="#contact">Aloqa</a>
      </div>
      <div data-aos="fade-up" class="social flex flex-col items-start">
        <p class="text-lg font-bold mb-4">Ijtimoiy tarmoqlar</p>
        <a
          target="_blank"
          class="font-manr mb-2"
          href="https://t.me/hdp_learning_center"
        >
          Telegram
        </a>
        <a
          class="font-manr mb-2"
          target="_blank"
          href="https://instagram.com/hdp_learning_center"
        >
          Instagram
        </a>
        <a
          class="font-manr mb-2"
          target="_blank"
          href="http://vm.tiktok.com/ZSeyMNrHn/"
        >
          TikTok
        </a>
        <a
          class="font-manr"
          target="_blank"
          href="https://www.youtube.com/c/HDPOFFICIAL"
        >
          Youtube
        </a>
      </div>
      <div data-aos="fade-up" class="address">
        <p class="text-lg font-bold mb-4">Manzil va filiallarimiz</p>
        <p class="font-manr mb-2">1) Urganch Shahar, Amir Temur bog'i</p>
        <p class="font-manr mb-2">2) Urganch Shahar, eski arxiv</p>
        <p class="font-manr">
          3) Gurlan tumani, Hamkorbank binosi, Olmos supermarketi
        </p>
      </div>
    </div>
    <p class="mt-10 text-center">
      Made with &#9825; by
      <a target="_blank" class="underline" href="https://dasturchioka.uz"
        >dasturchioka</a
      >
    </p>
  </footer>
</template>

<style scoped>
.footer-part {
  width: calc(100% + 160px);
  margin: 0 -80px;
}

@media (max-width: 639px) {
  .footer-part {
    width: calc(100% + 64px);
    margin: 0 -32px;
    padding: 32px;
  }
}
</style>
