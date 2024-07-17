<template>
    <div>
        <h1>Hello, World! - {{ state.message }} ({{ state.count }})</h1>
        <button @click="increment">Incrementar</button>
        <TextTitle />
        <CheckBoxV1
            id="checkboxes1"
            label="Test1"
            :options="[{ value: 'A', label: 'A'}, { value: 'B', label: 'B' }]"
            :selected-values="['A']"
        />
        <CheckBoxV2
            id="checkboxes2"
            label="Test2"
            :options="[{ value: 'A', label: 'A'}, { value: 'B', label: 'B' }]"
            :selected-values="['B']"
        />
    </div>
</template>

<script setup>
import { reactive, watch, onMounted } from 'vue';

import { TextTitle, CheckBoxV1, CheckBoxV2 } from '@common-lib/components';

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
