<template>
  <section id="about-me">
    <article>
      <p> 
      {{ $t('about-me.greetings') }} <em>Alison Souza</em>. <br/>
      </p>
      <p>
      {{ $t('about-me.text') }}
      </p>
    </article>
    <ul id="links">
      <li v-for="contact in contacts">
        <a :href="contact.link" target="_blank" rel="noopener noreferrer">
          <Icon :name="contact.icon" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
const contacts = [
  {
    link: 'https://github.com/AlisonR27',
    icon: 'mdi-github'
  },
  {
    link: 'https://linkedin.com/in/alison-ranier',
    icon: 'mdi-linkedin'
  }
]
</script>

<style lang="scss" scoped>

#about-me {
  font-size: 26pt;
  font-weight: lighter;
  article {
    p {
      em {
          font-size: 1.2em;
          font-weight: bolder;
          background: -webkit-linear-gradient(90deg,#7e09df, #ffa600);
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          background-size: 100% 400%;
          background-position: center center;
          background-attachment: fixed;
      }

      &:first-child {
        font-weight: normal;
        font-size:1.2em;
        margin-bottom: 0.3rem;
      }
      &:last-child {
        margin-top: 0.3rem;
        font-size: 24pt;
      }
    }
  }
}

ul {
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

ul li a {
  color: white;
}

ul li a:hover {
  filter:drop-shadow(0px 0px 3px rgba(255,255,255,.5)) drop-shadow(0px 0px 8px rgba(255,255,255,.3)) drop-shadow(0px 0px 2px rgba(255,255,255,.7));
}
</style>