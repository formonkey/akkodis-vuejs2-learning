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

<script>
export default {
    name: 'SelectTestV2',
    props: {
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
    },
    data() {
        return {
            temp: this.value,
        }
    },
    computed: {
        tempValue: {
            get() {
                return this.temp;
            },
            set(value) {
                this.temp = value;
            },
        },
    },
    methods: {
        handleChange() {
            this.$emit('update:value', this.temp);
        }
    }
}
</script>

<style scoped>
.select {
    display: flex;
    flex-direction: column;

    max-width: 200px;
}
</style>