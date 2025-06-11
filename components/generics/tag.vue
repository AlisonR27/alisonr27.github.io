<template>
  <span class="tag" :class="{ 'star' : isFavorite }">
    {{ label }}
  </span>
</template>

<script lang="ts" setup>
  const props = defineProps(['label'])

  const favorites = [
      "vue.js",
      "laravel",
      "php",
      "scss"
  ] as String[]

  function isFavorite(label: String) {
    return favorites.includes(label)
  }
</script>

<style>

</style>