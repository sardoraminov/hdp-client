<template>
  <div id="contact" class="contact-part mt-12 pb-5">
    <TheToast v-show="toastOptions.show" :message="toastOptions.message" />
    <div class="part-titles mt-7 text-center mb-8">
      <h1 class="title text-[30px] font-extrabold font-mont inline-block">
        Aloqa
        <img :src="contact" class="w-8 inline-block mb-2 ml-1" alt="contact" />
      </h1>
      <p class="desc mt-1 font-manr text-base">
        Bizga murojaat va shikoyatlaringiz bo'lsa pastdagi forma orqali
        yuborishingiz mumkin
      </p>
    </div>
    <form
      @submit.prevent="(e) => sendMessage(e)"
      class="part-form border border-gray bg-[#E0F6FA] rounded p-4 px-8 border-primary"
    >
      <p class="subtitle text-xl font-bold font-mont text-center mt-2">
        Murojaat yoki shikoyatlar uchun
      </p>
      <p class="text-center font-manr">
        Ma'muriyatimiz sizga 24 soat ichida javob berishadi
      </p>
      <div class="form-group flex flex-col mt-5">
        <label class="font-manr text-lg">Ismingiz:</label>
        <input
          v-model="message.fullname"
          required
          type="text"
          class="form-control outline-none rounded py-3 px-4 font-manr border-primary border-2"
        />
      </div>
      <div class="form-group flex flex-col mt-5">
        <label class="font-manr text-lg">Telefon raqamingiz:</label>
        <input
          v-model="message.phone"
          required
          type="tel"
          class="form-control outline-none rounded py-3 px-4 font-manr border-primary border-2"
        />
      </div>
      <div class="form-group flex flex-col mt-5">
        <label class="font-manr text-lg">Murojaatingiz:</label>
        <textarea
          v-model="message.text"
          required
          class="form-control outline-none rounded py-3 px-4 font-manr border-primary border-2 min-h-[200px]"
        ></textarea>
      </div>
      <button
        type="submit"
        class="form-submit btn-grad mb-2 mt-6 font-manr text-lg"
      >
        Jo'natish
      </button>
    </form>
  </div>
</template>
<style scoped>
.btn-grad {
  background: linear-gradient(144.08deg, #00b4d8 30.74%, #03045e 292.61%);
  border-radius: 8px;
  padding: 15px;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  width: 100%;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>
<script setup>
import contact from "~/assets/img/contact.png";
import TheToast from "./TheToast.vue";
import axios from "axios";

// DATE FORMAT
let d = new Date();
let dFormat = `${d.getDate() > 9 ? d.getDate() : `0` + d.getDate()}/${
  d.getMonth() + 1 > 9 ? d.getMonth() + 1 : `0` + (d.getMonth() + 1)
}/${d.getFullYear()} ${d.getHours() > 9 ? d.getHours() : `0` + d.getHours()}:${
  d.getMinutes() > 9 ? d.getMinutes() : `0` + d.getMinutes()
}`;

const message = reactive({
  fullname: "",
  phone: 0,
  text: "",

  fullmessage: computed(
    () =>
      `#murojaat\n\n 👤Murojaatchi: <b>${message.fullname}</b>\n 📞Telefon: <b>${message.phone}</b>\n 📃Murojaat: <b>${message.text}</b>\n\n 🕛<b>${dFormat}</b>`
  ),
});

const toastOptions = reactive({
  show: false,
  message: "",
});

const token = "5324015557:AAEOXQ0OmWDSApssM-5YqTSMV51l15Du5b4";
const chat_id = 1918027338;
const endpoint = ref(`https://api.telegram.org/bot${token}/sendMessage`);

// SEND MESSAGE
const sendMessage = (e) => {
  e.preventDefault();
  axios
    .post(
      endpoint.value,
      { chat_id, text: message.fullmessage, parse_mode: "html" },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res.data);
    });
  toastOptions.show = true;
  toastOptions.message = `Hurmatli ${message.fullname}, sizning murojaatingiz adminstratsiyaga yuborildi!`;

  setTimeout(() => {
    toastOptions.show = false;
  }, 4000);
  console.log(message.fullmessage);
};
</script>
