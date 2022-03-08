<template>
    <div>
        <Banner
            :image="require('@/assets/image/banner_img_01.jpg')"
            :style="custom"
        />
    </div>
</template>

<script>
import Banner from '@/components/common/Banner'
import { ref } from 'vue'

export default {
    components: {
        Banner,
    },

    setup() {
        const custom = ref('height: 600px; width: 100%;')

        return {
            custom,
        }
    },
}
</script>

<style></style>
