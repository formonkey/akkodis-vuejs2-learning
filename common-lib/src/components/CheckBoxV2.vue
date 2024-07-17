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

<script>
export default {
    name: 'CheckBoxV2',
    props: {
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
    },
    computed: {
        checkedValues: {
            get() {
                return this.selectedValues;
            }
        }
    }
}
</script>

<style></style>