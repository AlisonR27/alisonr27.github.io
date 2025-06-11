<template>
  <section id="education">
    <h2> {{ $t('education.title') }} </h2>
     <div v-for="(item, index) in cursos" :key="index" class="education-item">
      <a :href="item.instituicao.link" target="_blank" rel="noopener noreferrer">
        <h3>
          {{ item.instituicao.name }}
          <Icon name="mdi-external-link"/>
        </h3>
      </a>
      <p aria-label="Tipo de Formação"><b>{{ item.tipo }}</b></p>
      <p aria-label="Curso:"> {{ item.curso }}</p>
      <ul class="tags">
        <li v-for="(tecnologia, index) in item.tecnologias" :key="index">
          <GenericsTag :label="tecnologia" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { t } = useI18n()

const cursos = computed(() => [
  {
    instituicao: {
      name: t('education.unit.ifrn'),
      link: "https://portal.ifrn.edu.br/"
    },
    curso: t('education.course.info'),
    tipo: t('education.type.integrated'),
    tecnologias: [".NET", "React", "HTML", "CSS", "JavaScript"]
  },
  {
    instituicao: {
      name: t('education.unit.imd'),
      link: "https://portal.imd.ufrn.br/"
    },
    curso: t('education.course.gamedev'),
    tipo: t('education.type.technical'),
    tecnologias: [".NET", "Unity", "Blender"]
  },
  {
    instituicao: {
      name: t('education.unit.ufrn'),
      link: "https://ufrn.br/"
    },
    curso: t('education.course.it'),
    tipo: t('education.type.bachelor'),
    tecnologias: ["Spring", "Vue.js", "Java", "C++", "RabbitMQ", "Scrum", t('terms.software-architecture')]
  }
])

</script>

<style scoped>
.education-item {
  margin-bottom: 2rem;
}

.education-item a {
  color: white;
  text-decoration: none;

  :deep(span) {
    vertical-align: middle;
  }
}

.education-item a:hover {
  color: violet;
  text-decoration: underline;
}




</style>