<template>
    <header class="app-header fixed-top d-flex align-items-center bg-white">
        <Navbar />
    </header>
    <div class="header-space"></div>
</template>

<script>
import Navbar from '@/components/common/Navbar.vue'

export default {
    components: {
        Navbar,
    },
}
</script>

<style scoped>
.app-header {
    font-size: 16px;
    border-bottom: 1px solid #e5e5e5;
    z-index: 10;
}

.app-header,
.header-space {
    width: 100%;
    height: 70px;
}
</style>
