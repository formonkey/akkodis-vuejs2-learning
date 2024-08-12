<template>
    <div>
        <button @click="showModal">Mostrar Modal desde ComponentB</button>
    </div>
</template>

<script>
import ComponentC from "./ComponentC.vue";

export default {
    name: 'ComponentB',
    inject: ['openModal', 'closeModal'],
    methods: {
        showModal() {
            const data = {
                test: 'Prueba Componente B',
                closeModal: this.closeModal,
            }

            this.openModal(ComponentC, data, () => {
                console.log('Modal cerrado desde ComponentB');
            });
        }
    }
};
</script>
