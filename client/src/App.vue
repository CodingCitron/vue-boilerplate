<template>
    <div style="height: 4000px">
        <AppHeader />
        <div>
            <router-view />
        </div>
        <AppFooter />
    </div>
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
