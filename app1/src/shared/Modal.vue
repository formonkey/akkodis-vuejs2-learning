<!-- Modal.vue -->
<template>
    <div>
        <div v-if="isVisible" class="modal-overlay" @click.self="close">
            <div class="modal-content">
                <button @click="close" class="modal-close-button">X</button>

                <component :is="currentComponent" :data="componentData" />
            </div>
        </div>

        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    provide() {
        return {
            openModal: this.open,
            closeModal: this.close
        };
    },
    data() {
        return {
            isVisible: false,
            currentComponent: null,
            componentData: null,
            whenClose: null
        };
    },
    methods: {
        open(component, data, callback) {
            this.isVisible = true;
            this.currentComponent = component;
            this.componentData = data;
            this.whenClose = callback || null;
        },
        close(data) {
            this.isVisible = false;

            if (this.whenClose) {
                this.whenClose(data);
            }
        }
    }
};
</script>

<style>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 4px;
    position: relative;
}
.modal-close-button {
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>
