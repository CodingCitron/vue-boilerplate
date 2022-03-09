<template>
    <div
        @mouseover="onHover"
        @mouseleave="onLeave"
        class="dropdown-container"
        ref="container"
    >
        <div class="dropdown-items-background" ref="background"></div>
        <ul class="d-flex p-0 mb-0 dropdown" :style="`height: ${height}`">
            <li class="dropdown">
                <button type="button" class="px-4 bg-transparent border-0 btn">
                    메뉴-1
                </button>
                <ul class="p-0 py-2 dropdown-items">
                    <li><a href="#" class="py-2">메뉴-1</a></li>
                    <li><a href="#" class="py-2">메뉴-2</a></li>
                    <li><a href="#" class="py-2">메뉴-3</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <button type="button" class="px-4 bg-transparent border-0 btn">
                    메뉴-2
                </button>
                <ul class="p-0 py-2 dropdown-items">
                    <li><a href="#" class="py-2">메뉴-1</a></li>
                    <li><a href="#" class="py-2">메뉴-2</a></li>
                    <li><a href="#" class="py-2">메뉴-3</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <button type="button" class="px-4 bg-transparent border-0 btn">
                    메뉴-3
                </button>
                <ul class="p-0 py-2 dropdown-items">
                    <li><a href="#" class="py-2">메뉴-1</a></li>
                    <li><a href="#" class="py-2">메뉴-2</a></li>
                    <li><a href="#" class="py-2">메뉴-3</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <button type="button" class="px-4 bg-transparent border-0 btn">
                    메뉴-4
                </button>
                <ul class="px-0 py-2 dropdown-items">
                    <li><a href="#" class="py-2">메뉴-1</a></li>
                    <li><a href="#" class="py-2">메뉴-2</a></li>
                    <li><a href="#" class="py-2">메뉴-3</a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'

//동적 ref https://stackoverflow.com/questions/45563329/how-to-add-dynamic-ref-in-vue-js
export default {
    props: {
        height: {
            type: String,
        },
    },

    setup(props) {
        const container = ref(undefined),
            background = ref(undefined)

        onMounted(() => {
            container.value.classList.add('active')

            background.value.style.top =
                parseInt(container.value.offsetHeight) + 'px'

            const propHeight = parseInt(props.height.replace('px', '')),
                height =
                    container.value.querySelectorAll('.dropdown')[0]
                        .scrollHeight - propHeight

            background.value.style.setProperty(
                '--dropdown-max-height',
                height + 'px',
            )

            container.value.classList.remove('active')
        })

        const onHover = () => {
            container.value.classList.add('active')
        }

        const onLeave = () => {
            container.value.classList.remove('active')
        }

        return {
            container,
            background,
            onHover,
            onLeave,
        }
    },
}
</script>

<style scoped>
:root {
    --dropdown-max-height: 0;
}

.dropdown-container {
}

.dropdown > li > button {
    height: 100%;
}

.dropdown-items > li > a {
    display: block;
}

.dropdown-items {
    position: absolute;
    left: 0;
    width: 100%;
    max-height: 0;
    text-align: center;
    overflow: hidden;
    transition: all 0.25s ease-in;
}

.dropdown-items-background {
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 0;
    background: white;
    overflow: hidden;
    transition: all 0.25s ease-in;
}

.dropdown-container.active .dropdown-items {
    max-height: var(--dropdown-max-height);
    transition: all 0.25s ease-out;
}

.dropdown-container.active .dropdown-items-background {
    max-height: var(--dropdown-max-height);
    transition: all 0.25s ease-out;
}
</style>
