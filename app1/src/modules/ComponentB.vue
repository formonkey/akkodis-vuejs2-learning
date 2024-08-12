<template>
    <div>
        <button @click="showModal">Mostrar Modal desde ComponentB</button>
    </div>
</template>

<script>
import ComponentC from "./ComponentC.vue";

export default {
    name: 'ComponentB',
    inject: ['openModal'],
    methods: {
        showModal() {
            const content = ComponentC;
            const data = {
                test: 'Prueba Componente B'
            }

            this.openModal(content, data, () => {
                console.log('Modal cerrado desde ComponentB');
            });
        }
    }
};
</script>
