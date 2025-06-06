<template>
    <img
        v-if="!hasError"
        :src="src"
        :alt="alt"
        :width="width"
        :height="height"
        class="object-cover rounded-lg shadow-md"
        loading="lazy"
        @error="handleError"
    />
    <div v-else class="image-placeholder">
        <h3> :( </h3>
        <span class="text-gray-500">Image not available</span>
    </div>
</template>

<script lang="ts" setup>
const hasError = ref(false);

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true,
    default: 'Image'
  },
  width: {
    type: [String, Number],
    default: '100%'
  },
  height: {
    type: [String, Number],
    default: 'auto'
  }
});

function handleError(event : Event) {
  hasError.value = true;
  console.log('Image load error:', hasError.value);
}
</script>

<style scoped>
.image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #c4b1dd;
    color: black !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-decoration: none !important;
}
.image-placeholder * {
    text-decoration: none !important;
    text-decoration-color: transparent;
}
.image-placeholder h3 {
    display: block;
    font-size: 2.5em;
    margin: 0; margin-bottom:0.5rem;
}
</style>