<template>
    <div>
        <h1>TEST Component</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto dolorem eaque earum eos et ipsa ipsum libero non nostrum, odio officia omnis reprehenderit sed tempora vel veniam. Perspiciatis, provident?</p>
        <span>{{ data.test }}</span>
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
    }
}
</script>