<script setup>
import { ref, onMounted } from 'vue'

const el = ref('test')
let medici = ref([])


onMounted(async () => {
    let rnd = Math.random()*100
    let idx= rnd<50?1:2;


    const response = await fetch('http://ionjianu.smupitesti.org:3339/totimedicii',{
        headers:{
            idclinica:3
        }
        })
medici.value= await response.json()
console.log(medici)
})

</script>

<template>
    <div>
        
                <div v-for="m in medici.medici">
                    {{ m.nume }}
                 </div>
    </div>

</template>
