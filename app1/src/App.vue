<template>
    <div>
        <h1>Hello, World! - {{ message }} ({{ count }})</h1>
        <button @click="increment">Incrementar</button>

        <TextTitle />
    </div>
</template>

<script>
import { TextTitle } from '@common-lib/components';

export default {
    name: 'App',
    components: {
        TextTitle,
    },
    data() {
        return {
            message: "App 1",
            count: 0
        };
    },
    methods: {
        increment() {
            this.count++;
        }
    },
    watch: {
        count(newValue, oldValue) {
            console.log(`Valor de count cambió: ${oldValue} -> ${newValue}`);
        }
    },
    mounted() {
        console.log('Componente montado');
    }
};
</script>

<style>
/* Estilos opcionales */
</style>
