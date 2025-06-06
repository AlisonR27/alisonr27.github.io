<template>
  <div class="language-selector">
    <button @click="toggleDropdown" aria-haspopup="listbox" :aria-expanded="isOpen">
        <img :src="`/flag/${currentLanguage}.png`"/>
        <span> {{ currentLanguage.toUpperCase() }}</span>
        <Icon :name="isOpen ? 'mdi-menu-up' : 'mdi-menu-down'" />
    </button>
    <ul v-if="isOpen" class="dropdown" role="listbox">
      <li
        v-for="(label, code) in languages"
        :key="code"
        role="option"
        :aria-selected="currentLanguage === code"
        @click="setLanguage(code)"
      >
      <img :src="`/flag/${code}.png`"/>
      <span> {{ label }} </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const { locales, setLocale, getLocaleCookie } = useI18n()


const isOpen = ref(false)
const currentLanguage = ref(getLocaleCookie() || 'br') // ou 'en' como padrão

const languages = {
  br: 'BR',
  en: 'EN'
}

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function setLanguage(code) {
  currentLanguage.value = code
  isOpen.value = false
  // Aqui você poderia emitir um evento, salvar no localStorage, ou usar i18n global
  setLocale(code)
}
</script>

<style lang="scss" scoped>
.language-selector {
  position: fixed;
  top: 1rem;
  right: 1.5rem;
  z-index: 10;
  display: inline-block;

  button {
    background: none;
    border: 0;
    padding: 0.5rem 1rem;
    cursor: pointer;
    vertical-align: middle;
    color: white; font-weight: 900;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 4px;
    display: flex; flex-direction: row; gap: 4px; align-items: center;


    &:hover {
        background-color: rgba(255,255,255,.3);
    }

    img {
        width: 32px;
    }
  }
}


.dropdown {
    box-sizing: border-box;
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: transparent;
  border: 1px solid rgba(255,255,255,.2);
  border-top: 0;
  border-radius: 0 0 4px 4px;
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: 1000;

    li {
        padding: 0.5rem 1rem;
        cursor: pointer;
        color: white;
        display: flex; flex-direction: row; align-items: center; gap: 4px;

        img {
            width: 24px;
            display: inline-block;
        }

        &:hover,
        &[aria-selected="true"] {
            background-color: #8d0fc76b;
        }
    }
}

</style>