<template>
    <div>
        <button @click="showModal">Mostrar Modal desde ComponentA</button>
    </div>
</template>

<script>
import ComponentC from "./ComponentC.vue";

export default {
    name: 'ComponentA',
    inject: ['openModal', 'closeModal'],
    methods: {
        async showModal() {
            const data = {
                test: 'Prueba Componente A',
                closeModal: this.closeModal,
            }

            const res = await new Promise((resolve) => {
                this.openModal(ComponentC, data, (flag) => {
                    resolve(flag)
                });
            })

            console.log('This is a X value', res);

            if (res) {
                console.log('This is a Accept Flow');
            } else {
                console.log('This is a Cancel Flow')
            }
        },
    }
};
</script>
