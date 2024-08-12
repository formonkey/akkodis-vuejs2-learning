<!-- Modal.vue -->
<template>
    <div>

        <div v-if="isVisible" class="modal-overlay" @click.self="handleClose">
            <div class="modal-content">
                <button @click="handleClose" class="modal-close-button">X</button>
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
            closeModal: this.handleClose
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
            console.log('TEST :: OPEN MODAL');
            this.isVisible = true;
            this.currentComponent = component;
            this.componentData = data;
            this.whenClose = callback || null;
        },
        handleClose() {
            console.log('TEST :: CLOSE MODAL');
            this.isVisible = false;
            if (this.whenClose) {
                this.whenClose();
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
