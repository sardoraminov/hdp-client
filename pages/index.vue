<template>
  <div>
    <TheHeader />
    <main class="main-content sm:px-20 px-4 relative overflow-hidden">
      <svg
        width="239"
        height="481"
        viewBox="0 0 239 481"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute -left-10 top-[240px]"
      >
        <circle cx="39" cy="200" r="200" fill="#00B4D8" fill-opacity="0.12" />
        <circle
          cx="70.2345"
          cy="410.235"
          r="50"
          transform="rotate(38.3471 70.2345 410.235)"
          fill="url(#paint0_linear_111_24)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_111_24"
            x1="70.2345"
            y1="360.235"
            x2="120.235"
            y2="493.235"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00B4D8" />
            <stop offset="1" stop-color="#98EEFF" />
          </linearGradient>
        </defs>
      </svg>
      <TheCourses />
      <TheAdvanteges />
      <TheTeam />
      <TheQuestions />
      <TheAboutExam />
      <TheContact/>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: "Bosh sahifa",
});
</script>
