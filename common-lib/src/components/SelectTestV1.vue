<template>
    <div class="select">
        <label :for="id">
            {{ label }}
        </label>

        <select
            :id="id"
            :name="name"
            v-model="tempValue"
            @change="handleChange"
        >
            <option
                v-for="option in options"
                :key="`${id}-${option.value}`"
                :value="option.value"
            >
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const emit = defineEmits(['update:value']);

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        default: () => '',
    },
    options: {
        type: Array,
        default: () => [],
    },
})

const tempValue = ref(props.value)

const handleChange = () => {
    emit('update:value', tempValue.value)
}
</script>

<style scoped>
.select {
    display: flex;
    flex-direction: column;

    max-width: 200px;
}
</style>