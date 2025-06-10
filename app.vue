<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
const { locales, setLocale, getLocaleCookie } = useI18n()

//Execute langauge detection
onMounted(() => {
  if (navigator.language.includes("pt") || navigator.language.includes("es")) setLocale("br")
  else setLocale("en")
})
</script>


<style lang="scss">
html, body {
  margin: 0;
  background: linear-gradient(#0d1934, #170e3a);
  font-family: 'Fira Sans', sans-serif;
  color: #fff;
  scroll-behavior: smooth;
}


</style>