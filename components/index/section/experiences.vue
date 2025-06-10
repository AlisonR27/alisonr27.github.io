<template>
  <section id="experiences">
  <h2>{{$t('experiences.title')}}</h2>
  <p>
    {{ $t('experiences.text') }}
  </p>
  <div v-for="(item, index) in experiences" :key="index" class="experience-item">
    <a v-if="item.organizacao.link" :href="item.organizacao.link" target="_blank" rel="noopener noreferrer" title="Ir para o site da Organizaçãocc">
      <h3>{{ item.organizacao.name }}</h3>
    </a>
    <h3 v-else>{{ item.organizacao.name }}</h3>

    <p aria-label="Cargo"><b>{{ item.cargo }}</b></p>
    <p aria-label="Descrição">{{ item.descricao }}</p>

    <ul class="tags">
      <li class="tag" :class="hasStar(tecnologia)" v-for="(tecnologia, i) in item.tecnologias" :key="i">{{ tecnologia }}</li>
    </ul>
  </div>
</section>

</template>

<script lang="ts" setup>
function hasStar(tecnology: String) {
  const classes = []
  const favorites = ["Nuxt", "Vue.js", "PHP", "Laravel"] as String[]

  if (favorites.includes(tecnology)) classes.push("star")

  return classes
}
const { t } = useI18n()

const experiences = [
  {
    organizacao: {
      name: t('experiences.places.sti.title'),
      link: "https://sti.ufrn.br"
    },
    cargo: t('experiences.places.sti.type'),
    descricao: t('experiences.places.sti.description'),
    tecnologias: ["Vue.js", "Nuxt", "PHP", "Bootstrap", "Figma", "Scrum"]
  },
  {
    organizacao: {
      name: "Freelancer",
      link: null
    },
    cargo: "Freelancer Web Developer, Webmaster (Webmaster?)",
    descricao: t('experiences.places.freela.description'),
    tecnologias: ["PHP", "React", "WordPress", "Bootstrap", "Figma"]
  },
  {
    organizacao: {
      name: t('experiences.places.csa.title'),
      link: "https://csa.cnat.ifrn.edu.br"
    },
    cargo: t('experiences.places.csa.type'),
    descricao: t('experiences.places.csa.description'),
    tecnologias: ["Laravel", "React", "Puppeteer", "JavaScript", ".NET"]
  },
  {
    organizacao: {
      name: t('experiences.places.navi.title'),
      link: "https://navi.ifrn.edu.br"
    },
    cargo: t('experiences.places.navi.type'),
    descricao: t('experiences.places.navi.type'),
    tecnologias: ["Laravel", "Vue.JS", "JavaScript", "WebSocket"]
  },
];

</script>

<style lang="scss" scoped> 
.experience-item a {
  color: white;
}
.experience-item a:hover {
  color: violet;
}
@media screen and (max-width: 480px) {
  .experience-item {
    p {
      &:last-of-type {
        font-weight: lighter;
      } 
      &:first-of-type > b {
        font-weight: 500;
      }
    }
  }
}

</style>