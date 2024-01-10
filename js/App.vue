<template>
    <div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { greet } from 'hello-wasm'
onMounted(()=>{
    greet();
})
</script>