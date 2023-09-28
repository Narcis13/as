<script setup>
import { ref, onMounted } from 'vue'

const el = ref('test')

onMounted(() => {
    let rnd = Math.random()*100
    let idx= rnd<50?1:2;
    fetch('https://jsonplaceholder.typicode.com/todos/'+idx)
      .then(response => response.json())
      .then(json => el.value=json.title)
})
</script>

<template>
    <h1>Component VUE {{ el }}</h1>
</template>
