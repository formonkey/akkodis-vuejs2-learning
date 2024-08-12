<template>
    <Modal>
        <h1>Hello, World! - {{ message }} ({{ count }})</h1>
        <button @click="increment">Incrementar</button>

        <TextTitle />

        <SelectTestV2
            name="testv2"
            id="SelectTestv2"
            label="Select Test V2"
            :options="[{ value: 'A', label: 'A' }, { value: 'B', label: 'B' }]"
            :value="selectTestV2Value"
            @update:value="handleUpdateValue"
        />

        <ComponentA />

        <ComponentB />
    </Modal>
</template>

<script>
import {TextTitle, SelectTestV2, SelectTestV1} from '@common-lib/components';

import Modal from "./shared/Modal.vue";
import ComponentA from "./modules/ComponentA.vue";
import ComponentB from "./modules/ComponentB.vue";

export default {
    name: 'App',
    components: {
        Modal,
        TextTitle,
        ComponentB,
        ComponentA,
        SelectTestV1,
        SelectTestV2,
    },
    data() {
        return {
            message: "App 1",
            count: 0,
            selectV2Value: '',
        };
    },
    methods: {
        increment() {
            this.count++;
        },
        handleUpdateValue(value) {
            this.selectTestV2Value = value;
        }
    },
    computed: {
        selectTestV2Value: {
            get() {
                return this.selectV2Value;
            },
            set(value) {
                this.selectV2Value = value;
            }
        }
    },
    watch: {
        count(newValue, oldValue) {
            console.log(`Valor de count cambió: ${oldValue} -> ${newValue}`);
        }
    },
};
</script>

<style>
/* Estilos opcionales */
</style>
