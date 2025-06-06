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
    title: 'Alison Souza - WebDeveloper',
    layout: 'default',
    meta: {
        description: 'Fullstack Webdevelopment with accessible and responsive solutions'
    }
})


</script>

<style>
body {
  overflow-y: auto;
}
@media screen and (max-width: 576px) {
  body {
    overflow-y: auto;
  }
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