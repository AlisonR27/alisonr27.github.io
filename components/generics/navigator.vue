<template>
   <nav class="navigator">
    <ul>
        <li v-for="section in sections" :key="section.name">
            <a :href="'#' + section.slug" :class="{ 'active': isCurrentSection(section.slug)}"><Icon :name="section.icon"/></a>
            <em>{{ $t(`${section.slug}.title`) }}</em>
        </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const route = useRoute()

const sections = [
    { name: 'Boas Vindas',slug: 'welcome', component: 'IndexSectionWelcome', icon: 'mdi-home' },
    { name: 'Sobre mim',slug: 'about-me', component: 'IndexSectionAboutMe', icon: 'mdi-account' },
    { name: 'Experiências',slug: 'experiences', component: 'IndexSectionExperiences', icon: 'mdi-briefcase' },
    { name: 'Educação',slug: 'education', component: 'IndexSectionEducation', icon: 'mdi-school' },
    { name: 'Projetos',slug: 'projects', component: 'IndexSectionProjects', icon: 'mdi-code-tags' }
]

function isCurrentSection(sectionName: string) {
    return route.hash.substring(1) == sectionName
}
</script>

<style scoped>
.navigator {
  position: fixed;
  top: 25%;
  right: 1.5rem;
  height: 40%;
  z-index: 10;
}
.navigator ul {
  list-style:none;
  padding: 0;
  height:100%;
  display: flex; flex-direction: column;
  justify-content: space-around;
}
.navigator ul li {
  position: relative;
  height: 2rem;
  width: 2rem;
}

.navigator ul li a {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  border-radius: 50%;
  font-size: 1.5em;
  color: white;
  background-color: transparent;
  background-clip: content-box;
  transition: all 0.2s ease;
}

.navigator ul li a:hover {
  background-color: white;
  color: #170e3a;
  clip-path: fill-box;
}

.navigator ul li a.active {
    background: -webkit-linear-gradient(90deg,#7e09df, #ffa600);
    color: white !important;
}

.navigator ul li a:hover ~ em, .navigator ul li a.active ~ em {
    opacity: 1;
}
.navigator ul li em {
    opacity: 0;
    position: absolute;
    top: 25%;
    text-align: right;
    left: -150%;
    font-size: 0.8rem;
    transform: translateX(-50%);
    color: white;
    transition: all 0.5s ease;
    width: -webkit-fill-available;
}
</style>