<script setup>
import { ref, onMounted } from 'vue'

const el = ref('test')

onMounted(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => el.value=json.title)
})
</script>

<template>
    <h1>Component VUE {{ el }}</h1>
</template>
