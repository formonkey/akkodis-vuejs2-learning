<template>
<div class="checkbox">
    <label :for="id">{{ label }}</label>

    <div
        v-for="option in options"
        :key="options.value"
    >
        <input
            :id="`${id}-${option.value}`"
            :value="option.value"
            v-model="checkedValues"
            type="checkbox"
        />

        <label
            :for="`${id}-${option.value}`"
        >
            {{ option.label }}
        </label>
    </div>
</div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    options: {
        type: Array,
        default: () => [],
    },
    selectedValues: {
        type: Array,
        default: () => []
    }
})

const checkedValues = props.selectedValues;
</script>

<style>
</style>