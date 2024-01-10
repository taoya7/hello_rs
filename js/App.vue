<template>
    <div>
        <input type="text" v-model="key">
        {{ result }}
    </div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue';
import { md5 } from 'hello-wasm'
let key = ref('');
let result = ref('');
watch(key, (val)=>{
    result.value = md5(val);
})
onMounted(()=>{
})
</script>