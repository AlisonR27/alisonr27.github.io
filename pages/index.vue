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
useHead({
  title: 'Alison Souza - WebDeveloper',
  meta: [
    {
      name:"description",
      content: 'Fullstack Developer for accessible and responsive solutions'
    },
    {
      name: "authors",
      content: "Alison Souza (alisonranier@gmail.com)"
    }
  ]
})
definePageMeta({
    layout: 'default',
   
})


</script>

<style lang="scss">
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

.tags {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media screen and (max-width: 480px) {
    max-width: 100%; 
    height: 2em;
    overflow: hidden;
  }
}

.tag {
  color: white;
  border: 1px solid white;
  background: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;

  @media screen and (max-width:480px) {
    padding: 0.3rem 0.7rem;
  }

  &.star {
    color: gold;
    border: 1px solid gold;
    filter: drop-shadow(0 0 6px rgba(255, 217, 0, 0.3)) drop-shadow(0 0 2px rgba(255, 217, 0, 0.8));

    &::before {
      content: '★';
      color: gold;
      margin-right: 2px;
    }
  }

}


</style>