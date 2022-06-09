<template>
  <div class="notification">
    <p data-aos="fade-up" class="shadow-lg">{{ message }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>

<style scpoped>
.notification {
  position: fixed;
  bottom: 34px;
  left: 50%;
  right: 50%;
  width: 100%;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notification p {
  padding: 10px 15px;
  background: #fff;
  border-radius: 7px;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  animation: fade 0.5s ease-in-out;
  margin: 0 20px;
}

@keyframes fade {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
