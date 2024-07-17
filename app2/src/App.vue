<template>
    <div>
        <h1>Hello, World! - {{ state.message }} ({{ state.count }})</h1>
        <button @click="increment">Incrementar</button>
        <TextTitle />
    </div>
</template>

<script setup>
import { reactive, watch, onMounted } from 'vue';

import { TextTitle } from '@common-lib/components';

const state = reactive({
    message: "App 2",
    count: 0
});

onMounted(() => {
    console.log('Componente montado');
});

const increment = () => {
    state.count++;
};

watch(() => state.count, (newValue, oldValue) => {
    console.log(`Valor de count cambió: ${oldValue} -> ${newValue}`);
});
</script>

<style>
/* Estilos opcionales */
</style>
