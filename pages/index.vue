<template>
  <GenericsLanguageDropdown/>
  <GenericsNavigator/>
  <main>
    <IndexSectionWelcome />
    <IndexSectionAboutMe />
    <IndexSectionExperiences />
    <IndexSectionEducation />
    <IndexSectionProjects />
  </main>
</template>

<script lang="ts" setup>

definePageMeta({
    title: 'Home',
    layout: 'default',
    meta: {
        description: 'Welcome to the home page of our Nuxt application!'
    }
})

onMounted(() => {
  document.addEventListener("onscroll", (e) => {
    console.log(window.location.hash)
    if (window.location.hash == "#projects") return
    e.preventDefault();
  })
})
</script>

<style>
body {
  overflow: hidden;
}

section:not(:first-of-type) {
    padding: calc(100vh / 12) calc(100vw / 8);
    box-sizing: border-box;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}


.tag.star {
  background-color: rgb(255, 243, 178);
}
.tag.star::before {
  content: '★';
  margin-right: 2px;
}
</style>