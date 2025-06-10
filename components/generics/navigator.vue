<template>
   <nav class="navigator">
    <ul role="menu" aria-label="Navegação do site">
        <li v-for="section in sections" :key="section.name">
            <a :href="'#' + section.slug"><Icon :name="section.icon"/></a>
            <em>{{ $t(`${section.slug}.title`) }}</em>
        </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const route = useRoute()

let mostVisibleSection: Ref<HTMLElement | null> = ref(null);

const sections = [
    { name: 'Boas Vindas',slug: 'welcome', component: 'IndexSectionWelcome', icon: 'mdi-home' },
    { name: 'Sobre mim',slug: 'about-me', component: 'IndexSectionAboutMe', icon: 'mdi-account' },
    { name: 'Experiências',slug: 'experiences', component: 'IndexSectionExperiences', icon: 'mdi-briefcase' },
    { name: 'Educação',slug: 'education', component: 'IndexSectionEducation', icon: 'mdi-school' },
    { name: 'Projetos',slug: 'projects', component: 'IndexSectionProjects', icon: 'mdi-code-tags' }
]

// Atualiza o link que está com a classe active
function updateActiveLink(newHash: String) {
  const oldLink = document.querySelector('a.active')
  if (oldLink) oldLink.classList.remove('active')
  document.querySelector(`a[href="${newHash}"]`)?.classList.add('active') 
}

function updateURLWithVisibleSection() {
  const sections = document.querySelectorAll('section');
  let maxVisibleHeight = 0;

  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  sections.forEach((section, index) => {
    // Se for o último item, utiliza uma lógica diferente, previne bugs em dispositivos móveis
    if (index == sections.length - 1) {
      console.log("Ultima seção")
      const totalHeight = document.body.scrollHeight;
      const secHeight = section.clientHeight;
      if (window.scrollY >= totalHeight - secHeight) mostVisibleSection.value = section;
    } else {
      const rect = section.getBoundingClientRect();

      const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

      if (visibleHeight > maxVisibleHeight && visibleHeight > rect.height / 2) {
        mostVisibleSection.value = section;
        maxVisibleHeight = visibleHeight;
      }
    }
  });

  if (mostVisibleSection && mostVisibleSection.value!.id) {
    const newHash = `#${mostVisibleSection.value!.id}`;
    if (location.hash !== newHash) {
      updateActiveLink(newHash)
      history.replaceState(null, '', newHash)
    }
  }
}

onMounted(() => {
  if (!route.hash) mostVisibleSection.value = document.querySelector('section')
  if (mostVisibleSection.value) updateActiveLink(mostVisibleSection.value?.id)
  
  let scrollTimeout : NodeJS.Timeout

  document.addEventListener("scroll", (e) => {

    clearTimeout(scrollTimeout)

    scrollTimeout = setTimeout(() => {
      updateURLWithVisibleSection()
    }, 100) // evita excesso de chamadas
  })
})

onBeforeUnmount(() => {
  let scrollTimeout : NodeJS.Timeout

  document.removeEventListener("scroll", (e) => {

    clearTimeout(scrollTimeout)

    scrollTimeout = setTimeout(() => {
      updateURLWithVisibleSection()
    }, 100) // evita excesso de chamadas
  })
})

watch(() => route.hash, async function($to, $from) {
  if ($to != $from) updateActiveLink($to);
})
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

.navigator ul li a {
    /* &:hover, &.active {
      ~ em {
        opacity: 1;
      }
    } */
    /* &.active ~ em{
      animation: hide-label 1s;
      animation-fill-mode: forwards;
      animation-delay: 3s;
    } */
    
}

.navigator ul li em {
  z-index: -1;
  position: absolute;
  left: -100%;
  min-width:200%;
  
  font-size: 0.8rem;
  text-align: right;
  line-height: 2rem;

  opacity: 0;
    transform: translateX(-50%);
    transition: all 0.5s ease;
    color: white;
    
    width: -webkit-fill-available;

    text-wrap: nowrap;
    overflow-x:hidden;
    height: 2rem;
    padding-right: 1.2rem;
    padding-left: 0.5rem;
    border-radius: 15px 0 0 15px;
  
    vertical-align: middle;


    @media screen and (max-width: 768px) {
      background: -webkit-linear-gradient(90deg,#7e09df, #ffa600);
    }
}
/* 
@keyframes hide-label {
  0% {
    left: -100%;
    min-width: 200%;
    width: 200%;
    padding-right: 1.2rem;
  }
  70% {
    border-radius: 15px 0 0 15px;
    opacity: 1;
  }
  90% {
    opacity: 0.2;
    padding-right: 0;
  }
  100% {
    border-radius: 50% 0 0 50%;
    opacity:0;
    left: 30%;
    min-width: 0;
    width: 0;
  } */
/* } */
</style>