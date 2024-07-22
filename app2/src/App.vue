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

        <h1>Select</h1>

        <SelectTestV1
            name="testv1"
            id="SelectTestv1"
            label="Select Test V1"
            :options="[{ value: 'A', label: 'A' }, { value: 'B', label: 'B' }]"
            :value="selectTestV1Value"
            @update:value="handleUpdateValue"
        />
    </div>
</template>

<script setup>
import { reactive, watch, onMounted, ref } from 'vue';

import { TextTitle, CheckBoxV1, CheckBoxV2, SelectTestV1 } from '@common-lib/components';

const state = reactive({
    message: "App 2",
    count: 0
});

const selectTestV1Value = ref('');

onMounted(() => {
    console.log('Componente montado');
});

const increment = () => {
    state.count++;
};

const handleUpdateValue = (value) => {
    selectTestV1Value.value = value;
}

watch(() => state.count, (newValue, oldValue) => {
    console.log(`Valor de count cambió: ${oldValue} -> ${newValue}`);
});
</script>

<style>
/* Estilos opcionales */
</style>
