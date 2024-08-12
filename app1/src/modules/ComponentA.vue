<template>
    <div>
        <button @click="showModal">Mostrar Modal desde ComponentA</button>
    </div>
</template>

<script>
import ComponentC from "./ComponentC.vue";

export default {
    name: 'ComponentA',
    inject: ['openModal'],
    methods: {
        showModal() {
            const content = ComponentC;
            const data = {
                test: 'Prueba Componente A'
            }

            this.openModal(content, data, () => {
                console.log('Modal cerrado desde ComponentA');
            });
        }
    }
};
</script>
