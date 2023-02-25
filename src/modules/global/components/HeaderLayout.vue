<script setup lang="ts">
import { ref, watchEffect } from 'vue';

export interface Props {
    loggedIn: boolean
}

const props = defineProps<Props>()
const loggedInLocal = ref(false)

watchEffect(() => {
    loggedInLocal.value = props.loggedIn
})

const logIn = () => {
    loggedInLocal.value = true
}

const logOut = () => {
    loggedInLocal.value = false
}

</script>

<template>
    <div class="header">
        <h1 class="header__title">
            CITest
        </h1>
        <button v-if="!loggedInLocal" type="button" @click="logIn">
            Log In
        </button>
        <button v-else type="button" @click="logOut">
            Log Out
        </button>
    </div>
</template>

<style scoped lang="scss">
.header {
    @apply py-10 pl-3 pr-6 bg-red-300 flex justify-between;

    &__title {
        @apply text-3xl;
    }
}</style>
