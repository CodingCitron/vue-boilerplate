<template>
    <AppHeader />
    <router-view />
    <AppFooter />
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

export default {
    name: 'App',
    components: {
        AppHeader,
        AppFooter,
    },

    setup() {
        console.log(process.env)
    },
}
</script>

<style></style>
