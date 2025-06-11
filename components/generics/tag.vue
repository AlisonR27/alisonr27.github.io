<template>
  <span class="tag" :class="{ 'star' : isFavorite(label) }">
    {{ label }}
  </span>
</template>

<script lang="ts" setup>
  const props = defineProps(['label'])

  const favorites = [
      "vue.js",
      "laravel",
      "php",
      "scss",
      "nuxt"
  ] as String[]

  function isFavorite(label: String) {
    return favorites.includes(label.toLowerCase())
  }
</script>

<style>

</style>