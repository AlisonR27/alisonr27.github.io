<template>
  <section id="projects">
    <h2>{{ $t('projects.title') }}</h2>
    <p> {{ $t('projects.text') }} </p>
    <ul class="projects-list">
      <li v-for="project in projects" :key="project.name">
        <a :href="project.link" target="_blank">
          <span class="sr-only" :id="`description-${project.slug}`">{{ project.description }}</span>
          <GenericsImage :src="project.image" :alt="project.name" />
          <h3>{{ project.name }}</h3>
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
const projects = [
  {
    slug: 'turismo',
    name: 'Observatório do Turismo (RN) - LEME/IFRN',
    description: 'Projeto de extensão do LEME/IFRN, desenvolvido com ReactJS e Bootstrap, que visava promover e exibir métricas sobre o turismo da região.',
    link: 'https://turismo-temp.vercel.app/',
    image: '/projetos/turismo.png'
  },
  {
    slug: 'enade',  
    name: 'Portal do ENADE (UFRN)',
    description: 'Portal do ENADE desenvolvido com Nuxt.JS, que visa facilitar o acesso às informações do exame.',
    link: 'https://enade.ufrn.br/',
    image: '/projetos/enade.png'
  },
  {
    slug: 'proex',
    name: 'PROEX - Pró-Reitoria de Extensão (UFRN)',
    description: 'Portal da Pró-Reitoria de Extensão desenvolvido com Vue.js, Nuxt.JS e Nuxt/UI que visa facilitar o acesso às informações da PROEX/UFRN.',
    link: 'https://proex.ufrn.br/',
    image: '/projetos/proex.png'
  },
  {
    slug: 'sia',
    name: 'SIA - Secretaria de Inclusão e Acessibilidade (UFRN)',
    description: 'Portal da Secretaria de Inclusão e Acessibilidade desenvolvido com Vue.js, Nuxt.JS e Nuxt/UI que visa facilitar o acesso às informações da SIA/UFRN.',
    link: 'https://sia.ufrn.br/',
    image: '/projetos/sia.png'
  },
  {
    slug: 'sisbi',
    name: 'SISBI - Sistema de Bibliotecas (UFRN)',
    description: 'Sistema de Bibliotecas desenvolvido com Vue.js, que visa facilitar o acesso às informações das bibliotecas da UFRN.',
    link: 'https://sisbi.ufrn.br/',
    image: '/projetos/sisbi.png'
  },
  {
    slug: 'sipac',
    name: 'SIPAC - Sistema Integrado de Patrimônio, Administração e Contratos (UFRN)',
    description: 'Sistema Integrado de Patrimônio, Administração e Contratos desenvolvido com Vue.js, que visa facilitar a gestão de bens e contratos da UFRN.',
    link: 'https://sipac.ufrn.br/',
    image: '/projetos/sipac.png'
  }
];
</script>

<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.projects-list::-webkit-scrollbar {
  display: block !important;
}
.projects-list {
  list-style: none; padding: 0;
  display: flex; flex-direction: row; flex-wrap:wrap; gap: 0.5rem;
  justify-content: space-around;
  color: white;
  overflow: auto;
  width: max(70vw, 100%);
}
.projects-list li {
  width: 400px;
  height: 350px;
  aspect-ratio:1/1;
  display: block;
  box-sizing: border-box;
  position: relative;
}
.projects-list li a {
  display: block;
  position: relative;
  width: 100%; height: 100%;
  color: black;
  text-decoration: none;
}

.projects-list li img {
  width:100%;
  height: 100%;
  object-fit: cover;
}
.projects-list li a:hover > h3 {
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  opacity:1;
}
.projects-list li a > h3 {
  transition: all 0.7s ease;
  margin:0;
  box-sizing: border-box;
  position: absolute;
  top: 0; left: 0;
  max-width: 100%;
  text-overflow: ellipsis;
  padding: 0 2rem;
  text-wrap: nowrap;
  overflow:hidden;
  background-color: rgba(0, 0, 0, 0);
  opacity:0;
  backdrop-filter: blur(0px);
  color: white;
  width: 100%;
  height: 100%;
  line-height:350px;
  vertical-align: middle;
  text-align: center;
}

@media screen and (max-width: 480px) {
  .projects-list {
    gap: 2rem;

    > li {
      width: 100%;
      height: 200px;

      img {
        object-position: top;
      }
    }
  }
}
</style>