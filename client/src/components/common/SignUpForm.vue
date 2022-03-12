<template>
    <form @submit.prevent="onSubmit">
        <div>
            <label for="username">username</label>
            <input type="text" id="username" v-model="username" />
        </div>
        <div>
            <label for="password">password</label>
            <input type="password" id="password" v-model="password" />
        </div>
        <div>
            <button type="submit">로그인</button>
        </div>
    </form>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const username = ref(''),
            password = ref('')

        const onSubmit = () => {
            console.log(username.value)
            console.log(password.value)
            console.log('서브밋')
        }

        return {
            username,
            password,
            onSubmit,
        }
    },
}
</script>

<style></style>
