<template>
    <div>
        <h1>TEST Component</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto dolorem eaque earum eos et ipsa ipsum libero non nostrum, odio officia omnis reprehenderit sed tempora vel veniam. Perspiciatis, provident?</p>
        <span>{{ data.test }}</span>

        <button @click="handleClose(false)">Cancel</button>
        <button @click="handleClose(true)">Accept</button>
    </div>
</template>

<script>
export default {
    name: 'ComponentC',
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        handleClose(flag) {
            this.data.closeModal(flag);
        }
    }
}
</script>