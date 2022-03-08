<template>
    <div :style="`background-image: url(${image})`">
        <slot> </slot>
    </div>
</template>
<script>
export default {
    props: {
        image: {
            type: String,
        },
    },
    setup() {},
}
</script>
<style scoped></style>
